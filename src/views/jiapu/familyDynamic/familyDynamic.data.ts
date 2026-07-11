import { BasicColumn, FormSchema } from '/@/components/Table';

const dynamicTypeMap = { 1: '普通动态', 2: '公告', 3: '活动', 4: '纪念日' };

const visibilityMap = { 0: '所有人', 1: '仅家族成员', 2: '仅管理员' };

const statusMap = { 0: '草稿', 1: '已发布', 2: '已删除' };

const isTopMap = { 0: '否', 1: '是' };

export const columns: BasicColumn[] = [
  {
    title: '动态标题',
    width: 150,
    dataIndex: 'title',
  },
  {
    title: '家族ID',
    width: 120,
    dataIndex: 'familyId',
  },
  {
    title: '动态类型',
    width: 100,
    dataIndex: 'dynamicType',
    customRender: ({ text }) => dynamicTypeMap[text] || '-',
  },
  {
    title: '可见范围',
    width: 100,
    dataIndex: 'visibility',
    customRender: ({ text }) => visibilityMap[text] || '-',
  },
  {
    title: '状态',
    width: 100,
    dataIndex: 'status',
    customRender: ({ text }) => statusMap[text] || '-',
  },
  {
    title: '是否置顶',
    width: 80,
    dataIndex: 'isTop',
    customRender: ({ text }) => isTopMap[text] || '-',
  },
  {
    title: '点赞数',
    width: 80,
    dataIndex: 'likeCount',
  },
  {
    title: '评论数',
    width: 80,
    dataIndex: 'commentCount',
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
    field: 'userId',
    label: '发布者用户ID',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'dynamicType',
    label: '动态类型',
    component: 'Select',
    componentProps: {
      options: [
        { label: '普通动态', value: 1 },
        { label: '公告', value: 2 },
        { label: '活动', value: 3 },
        { label: '纪念日', value: 4 },
      ],
      allowClear: true,
      placeholder: '请选择动态类型',
    },
    colProps: { span: 6 },
  },
  {
    field: 'title',
    label: '动态标题',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'visibility',
    label: '可见范围',
    component: 'Select',
    componentProps: {
      options: [
        { label: '所有人', value: 0 },
        { label: '仅家族成员', value: 1 },
        { label: '仅管理员', value: 2 },
      ],
      allowClear: true,
      placeholder: '请选择可见范围',
    },
    colProps: { span: 6 },
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '草稿', value: 0 },
        { label: '已发布', value: 1 },
        { label: '已删除', value: 2 },
      ],
      allowClear: true,
      placeholder: '请选择状态',
    },
    colProps: { span: 6 },
  },
];
