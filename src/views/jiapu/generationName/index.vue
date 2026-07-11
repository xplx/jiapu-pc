<template>
  <div>
    <BasicTable @register="registerTable" />
  </div>
</template>
<script lang="ts" name="jiapu-generationName" setup>
  import { BasicTable } from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { columns, searchFormSchema } from './generationName.data';
  import { getList } from './generationName.api';

  const { tableContext } = useListPage({
    designScope: 'jiapu-generationName',
    tableProps: {
      title: '字辈管理',
      api: getList,
      columns: columns,
      formConfig: {
        schemas: searchFormSchema,
      },
    },
  });

  const [registerTable] = tableContext;
</script>
