import { BasicColumn, FormSchema } from '/@/components/Table';

const operationTypeMap = { 1: '新增成员', 2: '修改成员', 3: '删除成员', 4: '修改家谱', 5: '其他' };

const operationTypeOptions = [
  { label: '新增成员', value: 1 },
  { label: '修改成员', value: 2 },
  { label: '删除成员', value: 3 },
  { label: '修改家谱', value: 4 },
  { label: '其他', value: 5 },
];

export const columns: BasicColumn[] = [
  {
    title: '操作描述',
    width: 200,
    dataIndex: 'operationDesc',
  },
  {
    title: '家族ID',
    width: 120,
    dataIndex: 'familyId',
  },
  {
    title: '用户ID',
    width: 120,
    dataIndex: 'userId',
  },
  {
    title: '操作类型',
    width: 100,
    dataIndex: 'operationType',
    customRender: ({ text }) => operationTypeMap[text] || '-',
  },
  {
    title: 'IP地址',
    width: 130,
    dataIndex: 'ipAddress',
  },
  {
    title: '操作时间',
    width: 170,
    dataIndex: 'operationTime',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'familyId',
    label: '家族ID',
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
    field: 'operationType',
    label: '操作类型',
    component: 'Select',
    componentProps: {
      options: operationTypeOptions,
      allowClear: true,
      placeholder: '请选择操作类型',
    },
    colProps: { span: 6 },
  },
  {
    field: 'operationDesc',
    label: '操作描述',
    component: 'JInput',
    colProps: { span: 6 },
  },
];
