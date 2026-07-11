import { BasicColumn, FormSchema } from '/@/components/Table';

const statusMap = { 0: '待审核', 1: '已接受', 2: '已拒绝', 3: '已移除' };

const statusOptions = [
  { label: '待审核', value: 0 },
  { label: '已接受', value: 1 },
  { label: '已拒绝', value: 2 },
  { label: '已移除', value: 3 },
];

export const columns: BasicColumn[] = [
  {
    title: '家族ID',
    width: 120,
    dataIndex: 'familyId',
  },
  {
    title: '协作者手机号',
    width: 130,
    dataIndex: 'collaboratorPhone',
  },
  {
    title: '协作者用户ID',
    width: 120,
    dataIndex: 'collaboratorUserId',
  },
  {
    title: '邀请人用户ID',
    width: 120,
    dataIndex: 'inviterUserId',
  },
  {
    title: '协作状态',
    width: 100,
    dataIndex: 'status',
    customRender: ({ text }) => statusMap[text] || '-',
  },
  {
    title: '备注信息',
    width: 200,
    dataIndex: 'remark',
  },
  {
    title: '加入时间',
    width: 170,
    dataIndex: 'joinTime',
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
    field: 'collaboratorPhone',
    label: '协作者手机号',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'collaboratorUserId',
    label: '协作者用户ID',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'inviterUserId',
    label: '邀请人用户ID',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'status',
    label: '协作状态',
    component: 'Select',
    componentProps: {
      options: statusOptions,
      allowClear: true,
      placeholder: '请选择协作状态',
    },
    colProps: { span: 6 },
  },
];
