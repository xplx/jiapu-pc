<template>
  <div>
    <BasicTable @register="registerTable" :rowSelection="rowSelection">
      <template #tableTitle>
        <a-button preIcon="ant-design:plus-outlined" type="primary" @click="handleAdd">新增</a-button>
        <a-dropdown v-if="selectedRowKeys.length > 0">
          <template #overlay>
            <a-menu>
              <a-menu-item key="1" @click="batchHandleDelete">
                <Icon icon="ant-design:delete-outlined"></Icon>
                删除
              </a-menu-item>
            </a-menu>
          </template>
          <a-button
            >批量操作
            <Icon style="fontsize: 12px" icon="ant-design:down-outlined"></Icon>
          </a-button>
        </a-dropdown>
      </template>
      <template #action="{ record }">
        <TableAction :actions="getActions(record)" :dropDownActions="getDropDownAction(record)" />
      </template>
    </BasicTable>
    <OfferingModal @register="registerModal" @success="reload" />
  </div>
</template>
<script lang="ts" name="jiapu-offering" setup>
  import { BasicTable, TableAction } from '/@/components/Table';
  import { useModal } from '/@/components/Modal';
  import OfferingModal from './OfferingModal.vue';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { columns, searchFormSchema } from './offering.data';
  import { getList, deleteOffering, batchDeleteOffering, toggleStatus } from './offering.api';

  const [registerModal, { openModal }] = useModal();

  const { tableContext, doRequest } = useListPage({
    designScope: 'jiapu-offering',
    tableProps: {
      title: '祭品目录',
      api: getList,
      columns: columns,
      formConfig: {
        schemas: searchFormSchema,
      },
    },
  });

  const [registerTable, { reload }, { rowSelection, selectedRowKeys }] = tableContext;

  function handleAdd() {
    openModal(true, { isUpdate: false });
  }

  function handleEdit(record) {
    openModal(true, { record, isUpdate: true });
  }

  async function handleDelete(record) {
    await deleteOffering({ id: record.id }, reload);
  }

  async function batchHandleDelete() {
    doRequest(() => batchDeleteOffering({ ids: selectedRowKeys.value }));
  }

  async function handleToggleStatus(record) {
    await toggleStatus(record.id);
    reload();
  }

  function getActions(record) {
    return [
      {
        label: '编辑',
        onClick: handleEdit.bind(null, record),
      },
    ];
  }

  function getDropDownAction(record) {
    return [
      {
        label: record.status === 1 ? '下架' : '上架',
        popConfirm: {
          title: `确定要${record.status === 1 ? '下架' : '上架'}吗？`,
          confirm: handleToggleStatus.bind(null, record),
        },
      },
      {
        label: '删除',
        popConfirm: {
          title: '是否确认删除',
          confirm: handleDelete.bind(null, record),
        },
      },
    ];
  }
</script>
