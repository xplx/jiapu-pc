import { BasicColumn, FormSchema } from '/@/components/Table';

const vipTypeOptions = [
  { label: '月卡', value: 1 },
  { label: '年卡', value: 2 },
  { label: '永久', value: 3 },
];

const vipTypeMap = { 1: '月卡', 2: '年卡', 3: '永久' };

const statusOptions = [
  { label: '有效', value: 1 },
  { label: '无效', value: 0 },
];

export const columns: BasicColumn[] = [
  {
    title: '用户ID',
    width: 150,
    dataIndex: 'userId',
  },
  {
    title: '家族ID',
    width: 150,
    dataIndex: 'familyId',
  },
  {
    title: '会员类型',
    width: 100,
    dataIndex: 'vipType',
    customRender: ({ text }) => vipTypeMap[text] || '-',
  },
  {
    title: '会员等级',
    width: 100,
    dataIndex: 'vipLevel',
  },
  {
    title: '支付金额',
    width: 100,
    dataIndex: 'price',
  },
  {
    title: '生效时间',
    width: 150,
    dataIndex: 'startTime',
  },
  {
    title: '过期时间',
    width: 150,
    dataIndex: 'expireTime',
  },
  {
    title: '状态',
    width: 80,
    dataIndex: 'status',
    customRender: ({ text }) => (text === 1 ? '有效' : '无效'),
  },
  {
    title: '创建时间',
    width: 150,
    dataIndex: 'createTime',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'userId',
    label: '用户ID',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'familyId',
    label: '家族ID',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'vipType',
    label: '会员类型',
    component: 'Select',
    componentProps: {
      options: vipTypeOptions,
      allowClear: true,
      placeholder: '请选择会员类型',
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
