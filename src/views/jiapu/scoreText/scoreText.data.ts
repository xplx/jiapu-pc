import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';

export const columns: BasicColumn[] = [
  {
    title: '标题',
    width: 150,
    dataIndex: 'title',
  },
  {
    title: '家族ID',
    width: 120,
    dataIndex: 'familyId',
  },
  {
    title: '谱文类目Id',
    width: 120,
    dataIndex: 'categoryId',
  },
  {
    title: '排序号',
    width: 80,
    dataIndex: 'sortOrder',
  },
  {
    title: '配图',
    width: 80,
    dataIndex: 'imageUrl',
    customRender: ({ text }) => (text ? h('img', { src: text, style: 'width: 40px; height: 40px; object-fit: cover;' }) : '-'),
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
    field: 'categoryId',
    label: '谱文类目Id',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'title',
    label: '标题',
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
    field: 'familyId',
    label: '家族ID',
    component: 'Input',
    required: true,
    componentProps: {
      placeholder: '请输入家族ID',
    },
  },
  {
    field: 'categoryId',
    label: '谱文类目Id',
    component: 'Input',
    required: true,
    componentProps: {
      placeholder: '请输入谱文类目Id',
    },
  },
  {
    field: 'title',
    label: '标题',
    component: 'Input',
    required: true,
    componentProps: {
      placeholder: '请输入标题',
    },
  },
  {
    field: 'content',
    label: '内容',
    component: 'InputTextArea',
    componentProps: {
      placeholder: '请输入内容',
    },
  },
  {
    field: 'imageUrl',
    label: '配图',
    component: 'JImageUpload',
    componentProps: {
      text: '上传配图',
    },
  },
  {
    field: 'sortOrder',
    label: '排序号',
    component: 'InputNumber',
    defaultValue: 0,
    componentProps: {
      min: 0,
    },
  },
];
