import { BasicColumn, FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '家族名称',
    width: 150,
    dataIndex: 'familyName',
  },
  {
    title: '姓氏',
    width: 80,
    dataIndex: 'surname',
  },
  {
    title: '始祖名',
    width: 120,
    dataIndex: 'ancestorName',
  },
  {
    title: '所属地区',
    width: 120,
    dataIndex: 'region',
  },
  {
    title: '手机账号',
    width: 120,
    dataIndex: 'phoneAccount',
  },
  {
    title: '堂号',
    width: 120,
    dataIndex: 'hallName',
  },
  {
    title: '创建时间',
    width: 150,
    dataIndex: 'createTime',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'familyName',
    label: '家族名称',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'surname',
    label: '姓氏',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'ancestorName',
    label: '始祖名',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'region',
    label: '所属地区',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'phoneAccount',
    label: '手机账号',
    component: 'JInput',
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
    field: 'familyName',
    label: '家族名称',
    component: 'Input',
    required: true,
    componentProps: {
      placeholder: '请输入家族名称',
    },
  },
  {
    field: 'surname',
    label: '姓氏',
    component: 'Input',
    required: true,
    componentProps: {
      placeholder: '请输入姓氏',
    },
  },
  {
    field: 'ancestorName',
    label: '始祖名',
    component: 'Input',
    required: true,
    componentProps: {
      placeholder: '请输入始祖名',
    },
  },
  {
    field: 'region',
    label: '所属地区',
    component: 'Input',
    componentProps: {
      placeholder: '请输入所属地区',
    },
  },
  {
    field: 'phoneAccount',
    label: '手机账号',
    component: 'Input',
    componentProps: {
      placeholder: '请输入手机账号',
    },
  },
  {
    field: 'hallName',
    label: '堂号',
    component: 'Input',
    componentProps: {
      placeholder: '请输入堂号',
    },
  },
  {
    field: 'introduction',
    label: '家族简介',
    component: 'InputTextArea',
    componentProps: {
      placeholder: '请输入家族简介',
      rows: 4,
    },
  },
  {
    field: 'isDefault',
    label: '是否默认',
    component: 'RadioGroup',
    defaultValue: 0,
    componentProps: {
      options: [
        { label: '否', value: 0 },
        { label: '是', value: 1 },
      ],
    },
  },
];
