import { BasicColumn, FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '家族ID',
    width: 200,
    dataIndex: 'familyId',
  },
  {
    title: '字辈字',
    width: 100,
    dataIndex: 'generationChar',
  },
  {
    title: '世代序号',
    width: 100,
    dataIndex: 'generationOrder',
  },
  {
    title: '备注',
    width: 200,
    dataIndex: 'remark',
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
    field: 'generationChar',
    label: '字辈字',
    component: 'JInput',
    colProps: { span: 6 },
  },
];
