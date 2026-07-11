<template>
  <div>
    <BasicTable @register="registerTable" :rowSelection="rowSelection">
      <template #tableTitle>
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
        <TableAction :actions="getActions(record)" />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts" name="jiapu-familyCollaboration" setup>
  import { BasicTable, TableAction } from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { columns, searchFormSchema } from './familyCollaboration.data';
  import { getList, deleteFamilyCollaboration, batchDeleteFamilyCollaboration } from './familyCollaboration.api';

  const { tableContext, doRequest } = useListPage({
    designScope: 'jiapu-familyCollaboration',
    tableProps: {
      title: '族务协作',
      api: getList,
      columns: columns,
      formConfig: {
        schemas: searchFormSchema,
      },
    },
  });

  const [registerTable, { reload }, { rowSelection, selectedRowKeys }] = tableContext;

  async function handleDelete(record) {
    await deleteFamilyCollaboration({ id: record.id }, reload);
  }

  async function batchHandleDelete() {
    doRequest(() => batchDeleteFamilyCollaboration({ ids: selectedRowKeys.value }));
  }

  function getActions(record) {
    return [
      {
        label: '删除',
        color: 'error',
        popConfirm: {
          title: '是否确认删除',
          confirm: handleDelete.bind(null, record),
        },
      },
    ];
  }
</script>
