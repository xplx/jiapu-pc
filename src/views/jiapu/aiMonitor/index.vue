<template>
  <div class="ai-monitor">
    <!-- ========== 概览 ========== -->
    <a-row :gutter="12">
      <a-col :span="6" v-for="card in overviewCards" :key="card.title">
        <a-card size="small" class="ai-monitor__card">
          <div class="ai-monitor__card-title">{{ card.title }}</div>
          <div class="ai-monitor__card-value" :style="{ color: card.color }">{{ card.value }}</div>
        </a-card>
      </a-col>
    </a-row>

    <a-card style="margin-top: 12px">
      <a-tabs v-model:activeKey="activeKey">
        <!-- ========== 厂商余额 ========== -->
        <a-tab-pane key="provider" tab="厂商余额">
          <BasicTable @register="registerProviderTable" :dataSource="providerList" :pagination="false">
            <template #tableTitle>
              <a-button preIcon="ant-design:reload-outlined" type="primary" @click="handleRefresh">刷新余额</a-button>
              <a-button preIcon="ant-design:mail-outlined" style="margin-left: 8px" @click="handleRunOnce">立即汇总并发送邮件</a-button>
            </template>
            <template #action="{ record }">
              <TableAction :actions="getProviderActions(record)" />
            </template>
          </BasicTable>
        </a-tab-pane>

        <!-- ========== 每日快照 ========== -->
        <a-tab-pane key="daily" tab="每日快照">
          <BasicTable @register="registerDailyTable" />
        </a-tab-pane>

        <!-- ========== 调用明细 ========== -->
        <a-tab-pane key="callLog" tab="调用明细">
          <BasicTable @register="registerCallLogTable" />
        </a-tab-pane>

        <!-- ========== 告警记录 ========== -->
        <a-tab-pane key="alert" tab="告警记录">
          <BasicTable @register="registerAlertTable" />
        </a-tab-pane>

        <!-- ========== 邮件配置 ========== -->
        <a-tab-pane key="mail" tab="邮件配置">
          <BasicForm @register="registerMailForm" />
          <div style="margin-top: 12px">
            <a-button type="primary" @click="handleSaveMail">保存配置</a-button>
            <a-button style="margin-left: 8px" @click="handleTestMail">发送测试邮件</a-button>
          </div>
        </a-tab-pane>
      </a-tabs>
    </a-card>

    <AiProviderModal @register="registerModal" @success="loadProvider" />
  </div>
</template>
<script lang="ts" name="jiapu-aiMonitor" setup>
  import { computed, onMounted, ref } from 'vue';
  import { BasicTable, TableAction, useTable } from '/@/components/Table';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { useModal } from '/@/components/Modal';
  import { useMessage } from '/@/hooks/web/useMessage';
  import AiProviderModal from './AiProviderModal.vue';
  import {
    providerColumns,
    dailyColumns,
    dailySearchFormSchema,
    callLogColumns,
    callLogSearchFormSchema,
    alertColumns,
    alertSearchFormSchema,
    mailFormSchema,
  } from './aiMonitor.data';
  import {
    getOverview,
    getProviderList,
    getDailyList,
    getCallLogList,
    getAlertList,
    getMailConfig,
    saveMailConfig,
    testMail,
    refreshBalance,
    runOnce,
  } from './aiMonitor.api';

  const { createMessage } = useMessage();
  const [registerModal, { openModal }] = useModal();

  const activeKey = ref('provider');
  const overview = ref<Recordable>({});
  const providerList = ref<Recordable[]>([]);

  const overviewCards = computed(() => [
    { title: '今日调用量', value: overview.value.todayCallCount ?? 0, color: '#333' },
    { title: '今日失败数', value: overview.value.todayFailCount ?? 0, color: '#fa8c16' },
    { title: '今日告警数', value: overview.value.alertCount ?? 0, color: '#1890ff' },
    {
      title: '低余额厂商',
      value: `${overview.value.lowCount ?? 0} / ${overview.value.providerCount ?? 0}`,
      color: (overview.value.lowCount ?? 0) > 0 ? '#f5222d' : '#52c41a',
    },
  ]);

  const [registerProviderTable] = useTable({
    columns: providerColumns,
    rowKey: 'id',
    bordered: true,
    canResize: true,
    useSearchForm: false,
    showActionColumn: true,
    actionColumn: { width: 80, title: '操作', dataIndex: 'action', slots: { customRender: 'action' } },
  });

  const [registerDailyTable] = useTable({
    api: getDailyList,
    columns: dailyColumns,
    rowKey: 'id',
    bordered: true,
    canResize: true,
    showActionColumn: false,
    useSearchForm: true,
    formConfig: { schemas: dailySearchFormSchema, showAdvancedButton: false, labelWidth: 60 },
  });

  const [registerCallLogTable] = useTable({
    api: getCallLogList,
    columns: callLogColumns,
    rowKey: 'id',
    bordered: true,
    canResize: true,
    showActionColumn: false,
    useSearchForm: true,
    formConfig: { schemas: callLogSearchFormSchema, showAdvancedButton: false, labelWidth: 60 },
  });

  const [registerAlertTable] = useTable({
    api: getAlertList,
    columns: alertColumns,
    rowKey: 'id',
    bordered: true,
    canResize: true,
    showActionColumn: false,
    useSearchForm: true,
    formConfig: { schemas: alertSearchFormSchema, showAdvancedButton: false, labelWidth: 60 },
  });

  const [registerMailForm, { setFieldsValue: setMailFields, validate: validateMail }] = useForm({
    schemas: mailFormSchema,
    showActionButtonGroup: false,
    labelWidth: 150,
  });

  async function loadOverview() {
    overview.value = await getOverview();
  }

  async function loadProvider() {
    providerList.value = await getProviderList();
    await loadOverview();
  }

  function handleEdit(record) {
    openModal(true, { record, isUpdate: true });
  }

  function getProviderActions(record) {
    return [{ label: '配置', onClick: handleEdit.bind(null, record) }];
  }

  async function handleRefresh() {
    await refreshBalance();
    createMessage.success('余额刷新完成');
    await loadProvider();
  }

  async function handleRunOnce() {
    const res: any = await runOnce();
    createMessage.success(res?.message || '汇总已触发');
    await loadProvider();
  }

  async function handleSaveMail() {
    const values = await validateMail();
    await saveMailConfig(values);
    createMessage.success('邮件配置已保存');
  }

  async function handleTestMail() {
    const values = await validateMail();
    await testMail(values);
    createMessage.success('测试邮件已发送，请查收');
  }

  onMounted(async () => {
    await loadProvider();
    const cfg = await getMailConfig();
    await setMailFields(cfg);
  });
</script>
<style lang="less" scoped>
  .ai-monitor {
    padding: 12px;

    &__card-title {
      color: #8c8c8c;
      font-size: 13px;
    }

    &__card-value {
      margin-top: 6px;
      font-size: 26px;
      font-weight: 600;
    }
  }
</style>
