import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';

const coverTypeOptions = [
  { label: '图片', value: 'image' },
  { label: '视频', value: 'video' },
];

const coverTypeMap = { image: '图片', video: '视频' };

const statusOptions = [
  { label: '启用', value: 1 },
  { label: '禁用', value: 0 },
];

const yesNoOptions = [
  { label: '是', value: 1 },
  { label: '否', value: 0 },
];

export const columns: BasicColumn[] = [
  {
    title: '封面',
    width: 80,
    dataIndex: 'coverUrl',
    customRender: ({ text }) => (text ? h('img', { src: text, style: 'width: 40px; height: 40px; object-fit: cover;' }) : '-'),
  },
  {
    title: '封面名称',
    width: 120,
    dataIndex: 'coverName',
  },
  {
    title: '封面类型',
    width: 100,
    dataIndex: 'coverType',
    customRender: ({ text }) => coverTypeMap[text] || '-',
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
    title: '展示首页',
    width: 100,
    dataIndex: 'showHomepage',
    customRender: ({ text }) => (text === 1 ? '是' : '否'),
  },
  {
    title: '是否收费',
    width: 100,
    dataIndex: 'isCharge',
    customRender: ({ text }) => (text === 1 ? '是' : '否'),
  },
  {
    title: '收费金额',
    width: 100,
    dataIndex: 'chargeAmount',
  },
  {
    title: '创建时间',
    width: 150,
    dataIndex: 'createTime',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'coverName',
    label: '封面名称',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'coverType',
    label: '封面类型',
    component: 'Select',
    componentProps: {
      options: coverTypeOptions,
      allowClear: true,
      placeholder: '请选择封面类型',
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
    field: 'coverName',
    label: '封面名称',
    component: 'Input',
    required: true,
    componentProps: {
      placeholder: '请输入封面名称',
    },
  },
  {
    field: 'coverUrl',
    label: '封面URL',
    component: 'JImageUpload',
    required: true,
    componentProps: {
      text: '上传封面',
    },
  },
  {
    field: 'coverType',
    label: '封面类型',
    component: 'Select',
    required: true,
    componentProps: {
      options: coverTypeOptions,
      placeholder: '请选择封面类型',
    },
  },
  {
    field: 'description',
    label: '封面描述',
    component: 'InputTextArea',
    componentProps: {
      placeholder: '请输入封面描述',
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
  {
    field: 'showHomepage',
    label: '展示首页',
    component: 'RadioGroup',
    defaultValue: 0,
    componentProps: {
      options: yesNoOptions,
    },
  },
  {
    field: 'isCharge',
    label: '是否收费',
    component: 'RadioGroup',
    defaultValue: 0,
    componentProps: {
      options: yesNoOptions,
    },
  },
  {
    field: 'chargeAmount',
    label: '收费金额',
    component: 'InputNumber',
    componentProps: {
      step: 0.01,
      min: 0,
      placeholder: '请输入收费金额',
    },
  },
];
