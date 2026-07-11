<template>
  <div>
    <BasicTable @register="registerTable" />
  </div>
</template>
<script lang="ts" name="jiapu-member" setup>
  import { BasicTable } from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { columns, searchFormSchema } from './member.data';
  import { getList } from './member.api';

  const { tableContext } = useListPage({
    designScope: 'jiapu-member',
    tableProps: {
      title: '家族成员管理',
      api: getList,
      columns: columns,
      formConfig: {
        schemas: searchFormSchema,
      },
    },
  });

  const [registerTable] = tableContext;
</script>
