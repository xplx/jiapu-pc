import { BasicColumn, FormSchema } from '/@/components/Table';

const genderMap = { 0: '未知', 1: '男', 2: '女' };
const statusMap = { 0: '禁用', 1: '启用' };

export const columns: BasicColumn[] = [
  {
    title: '微信openId',
    width: 200,
    dataIndex: 'openId',
  },
  {
    title: '用户昵称',
    width: 120,
    dataIndex: 'nickName',
  },
  {
    title: '手机号码',
    width: 120,
    dataIndex: 'phoneNumber',
  },
  {
    title: '性别',
    width: 80,
    dataIndex: 'gender',
    customRender: ({ text }) => genderMap[text] || '-',
  },
  {
    title: '状态',
    width: 80,
    dataIndex: 'status',
    customRender: ({ text }) => statusMap[text] || '-',
  },
  {
    title: '创建时间',
    width: 150,
    dataIndex: 'createTime',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'openId',
    label: 'openId',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'nickName',
    label: '用户昵称',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'phoneNumber',
    label: '手机号码',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'gender',
    label: '性别',
    component: 'Select',
    componentProps: {
      options: [
        { label: '未知', value: 0 },
        { label: '男', value: 1 },
        { label: '女', value: 2 },
      ],
      allowClear: true,
      placeholder: '请选择性别',
    },
    colProps: { span: 6 },
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '禁用', value: 0 },
        { label: '启用', value: 1 },
      ],
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
    field: 'nickName',
    label: '用户昵称',
    component: 'Input',
    componentProps: {
      placeholder: '请输入用户昵称',
    },
  },
  {
    field: 'phoneNumber',
    label: '手机号码',
    component: 'Input',
    componentProps: {
      placeholder: '请输入手机号码',
    },
  },
  {
    field: 'gender',
    label: '性别',
    component: 'Select',
    componentProps: {
      options: [
        { label: '未知', value: 0 },
        { label: '男', value: 1 },
        { label: '女', value: 2 },
      ],
      placeholder: '请选择性别',
    },
  },
  {
    field: 'status',
    label: '状态',
    component: 'RadioGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: '禁用', value: 0 },
        { label: '启用', value: 1 },
      ],
    },
  },
];
