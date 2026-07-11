import { BasicColumn, FormSchema } from '/@/components/Table';

const applicationTypeMap = { 1: '邀请绑定', 2: '主动申请' };
const statusMap = { 0: '待审核', 1: '已通过', 2: '已拒绝' };

const applicationTypeOptions = [
  { label: '邀请绑定', value: 1 },
  { label: '主动申请', value: 2 },
];

const statusOptions = [
  { label: '待审核', value: 0 },
  { label: '已通过', value: 1 },
  { label: '已拒绝', value: 2 },
];

export const columns: BasicColumn[] = [
  {
    title: '家族ID',
    width: 120,
    dataIndex: 'familyId',
  },
  {
    title: '申请人用户ID',
    width: 120,
    dataIndex: 'applicantUserId',
  },
  {
    title: '申请类型',
    width: 100,
    dataIndex: 'applicationType',
    customRender: ({ text }) => applicationTypeMap[text] || '-',
  },
  {
    title: '申请状态',
    width: 100,
    dataIndex: 'status',
    customRender: ({ text }) => statusMap[text] || '-',
  },
  {
    title: '申请原因',
    width: 200,
    dataIndex: 'reason',
  },
  {
    title: '审核人',
    width: 120,
    dataIndex: 'reviewer',
  },
  {
    title: '审核备注',
    width: 200,
    dataIndex: 'reviewRemark',
  },
  {
    title: '创建时间',
    width: 170,
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
    field: 'applicantUserId',
    label: '申请人用户ID',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'applicationType',
    label: '申请类型',
    component: 'Select',
    componentProps: {
      options: applicationTypeOptions,
      allowClear: true,
      placeholder: '请选择申请类型',
    },
    colProps: { span: 6 },
  },
  {
    field: 'status',
    label: '申请状态',
    component: 'Select',
    componentProps: {
      options: statusOptions,
      allowClear: true,
      placeholder: '请选择申请状态',
    },
    colProps: { span: 6 },
  },
];
