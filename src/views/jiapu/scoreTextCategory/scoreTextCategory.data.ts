import { BasicColumn, FormSchema } from '/@/components/Table';

const statusOptions = [
  { label: '启用', value: 1 },
  { label: '禁用', value: 0 },
];

const isPublicOptions = [
  { label: '公共', value: 1 },
  { label: '私有', value: 0 },
];

export const columns: BasicColumn[] = [
  {
    title: '类目名称',
    width: 150,
    dataIndex: 'categoryName',
  },
  {
    title: '家族ID',
    width: 150,
    dataIndex: 'familyId',
  },
  {
    title: '类目描述',
    width: 200,
    dataIndex: 'description',
  },
  {
    title: '排序号',
    width: 80,
    dataIndex: 'sortOrder',
  },
  {
    title: '状态',
    width: 80,
    dataIndex: 'status',
    customRender: ({ text }) => (text === 1 ? '启用' : '禁用'),
  },
  {
    title: '是否公共',
    width: 100,
    dataIndex: 'isPublic',
    customRender: ({ text }) => (text === 1 ? '公共' : '私有'),
  },
  {
    title: '创建时间',
    width: 150,
    dataIndex: 'createTime',
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
    field: 'categoryName',
    label: '类目名称',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: statusOptions,
      allowClear: true,
      placeholder: '请选择状态',
    },
    colProps: { span: 6 },
  },
  {
    field: 'isPublic',
    label: '是否公共',
    component: 'Select',
    componentProps: {
      options: isPublicOptions,
      allowClear: true,
      placeholder: '请选择',
    },
    colProps: { span: 6 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'id',
    component: 'Input',
    show: false,
  },
  {
    field: 'familyId',
    label: '家族ID',
    component: 'Input',
    componentProps: {
      placeholder: '请输入家族ID',
    },
  },
  {
    field: 'categoryName',
    label: '类目名称',
    component: 'Input',
    required: true,
    componentProps: {
      placeholder: '请输入类目名称',
    },
  },
  {
    field: 'description',
    label: '类目描述',
    component: 'InputTextArea',
    componentProps: {
      placeholder: '请输入类目描述',
    },
  },
  {
    field: 'sortOrder',
    label: '排序号',
    component: 'InputNumber',
    defaultValue: 0,
    componentProps: {
      min: 0,
    },
  },
  {
    field: 'status',
    label: '状态',
    component: 'RadioGroup',
    defaultValue: 1,
    componentProps: {
      options: statusOptions,
    },
  },
  {
    field: 'isPublic',
    label: '是否公共',
    component: 'RadioGroup',
    defaultValue: 0,
    componentProps: {
      options: isPublicOptions,
    },
  },
];
