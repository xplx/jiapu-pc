import { BasicColumn, FormSchema } from '/@/components/Table';

const configTypeOptions = [
  { label: '赚取', value: 1 },
  { label: '消费', value: 2 },
  { label: '免费额度', value: 3 },
];

const configTypeMap = { 1: '赚取', 2: '消费', 3: '免费额度' };

const statusOptions = [
  { label: '启用', value: 1 },
  { label: '禁用', value: 0 },
];

export const columns: BasicColumn[] = [
  {
    title: '配置键',
    width: 150,
    dataIndex: 'configKey',
  },
  {
    title: '配置名称',
    width: 120,
    dataIndex: 'configName',
  },
  {
    title: '配置值',
    width: 100,
    dataIndex: 'configValue',
  },
  {
    title: '配置类型',
    width: 100,
    dataIndex: 'configType',
    customRender: ({ text }) => configTypeMap[text] || '-',
  },
  {
    title: '配置说明',
    width: 150,
    dataIndex: 'configDesc',
  },
  {
    title: '排序',
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
    title: '创建时间',
    width: 150,
    dataIndex: 'createTime',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'configKey',
    label: '配置键',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'configName',
    label: '配置名称',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'configType',
    label: '配置类型',
    component: 'Select',
    componentProps: {
      options: configTypeOptions,
      allowClear: true,
      placeholder: '请选择配置类型',
    },
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
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'id',
    component: 'Input',
    show: false,
  },
  {
    field: 'configKey',
    label: '配置键',
    component: 'Input',
    required: true,
    componentProps: {
      placeholder: '请输入配置键',
    },
  },
  {
    field: 'configName',
    label: '配置名称',
    component: 'Input',
    required: true,
    componentProps: {
      placeholder: '请输入配置名称',
    },
  },
  {
    field: 'configValue',
    label: '配置值',
    component: 'InputNumber',
    required: true,
    componentProps: {
      placeholder: '请输入配置值',
    },
  },
  {
    field: 'configType',
    label: '配置类型',
    component: 'Select',
    required: true,
    componentProps: {
      options: configTypeOptions,
      placeholder: '请选择配置类型',
    },
  },
  {
    field: 'configDesc',
    label: '配置说明',
    component: 'Input',
    componentProps: {
      placeholder: '请输入配置说明',
    },
  },
  {
    field: 'sortOrder',
    label: '排序',
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
];
