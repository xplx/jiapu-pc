import { BasicColumn, FormSchema } from '/@/components/Table';

const isAiGeneratedMap = { 0: '手动', 1: 'AI生成' };

export const columns: BasicColumn[] = [
  {
    title: '祭文标题',
    width: 150,
    dataIndex: 'title',
  },
  {
    title: '用户名称',
    width: 120,
    dataIndex: 'userName',
  },
  {
    title: '纪念馆ID',
    width: 120,
    dataIndex: 'memorialId',
  },
  {
    title: '是否AI生成',
    width: 100,
    dataIndex: 'isAiGenerated',
    customRender: ({ text }) => isAiGeneratedMap[text] || '-',
  },
  {
    title: '创建时间',
    width: 150,
    dataIndex: 'createTime',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'memorialId',
    label: '纪念馆ID',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'userId',
    label: '用户ID',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'userName',
    label: '用户名称',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'title',
    label: '祭文标题',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'isAiGenerated',
    label: '是否AI生成',
    component: 'Select',
    componentProps: {
      options: [
        { label: '手动', value: 0 },
        { label: 'AI生成', value: 1 },
      ],
      allowClear: true,
      placeholder: '请选择',
    },
    colProps: { span: 6 },
  },
];
