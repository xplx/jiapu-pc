import { BasicColumn, FormSchema } from '/@/components/Table';

const genderMap = { 1: '男', 2: '女', 3: '未知' };

export const columns: BasicColumn[] = [
  {
    title: '家族ID',
    width: 200,
    dataIndex: 'familyId',
  },
  {
    title: '姓',
    width: 80,
    dataIndex: 'surname',
  },
  {
    title: '名',
    width: 80,
    dataIndex: 'name',
  },
  {
    title: '性别',
    width: 80,
    dataIndex: 'gender',
    customRender: ({ text }) => genderMap[text] || '-',
  },
  {
    title: '出生日期',
    width: 120,
    dataIndex: 'birthDate',
  },
  {
    title: '死亡日期',
    width: 120,
    dataIndex: 'deathDate',
  },
  {
    title: '代数',
    width: 80,
    dataIndex: 'generation',
  },
  {
    title: '是否健在',
    width: 80,
    dataIndex: 'isAlive',
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
    field: 'surname',
    label: '姓',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'name',
    label: '名',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'gender',
    label: '性别',
    component: 'Select',
    componentProps: {
      options: [
        { label: '男', value: 1 },
        { label: '女', value: 2 },
        { label: '未知', value: 3 },
      ],
      allowClear: true,
      placeholder: '请选择性别',
    },
    colProps: { span: 6 },
  },
];
