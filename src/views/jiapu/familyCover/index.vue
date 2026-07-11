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
    <FamilyCoverModal @register="registerModal" @success="reload" />
  </div>
</template>
<script lang="ts" name="jiapu-familyCover" setup>
  import { BasicTable, TableAction } from '/@/components/Table';
  import { useModal } from '/@/components/Modal';
  import FamilyCoverModal from './FamilyCoverModal.vue';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { columns, searchFormSchema } from './familyCover.data';
  import { getList, deleteFamilyCover, batchDeleteFamilyCover } from './familyCover.api';

  const [registerModal, { openModal }] = useModal();

  const { tableContext, doRequest } = useListPage({
    designScope: 'jiapu-familyCover',
    tableProps: {
      title: '封面管理',
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
    await deleteFamilyCover({ id: record.id }, reload);
  }

  async function batchHandleDelete() {
    doRequest(() => batchDeleteFamilyCover({ ids: selectedRowKeys.value }));
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
        label: '删除',
        popConfirm: {
          title: '是否确认删除',
          confirm: handleDelete.bind(null, record),
        },
      },
    ];
  }
</script>
