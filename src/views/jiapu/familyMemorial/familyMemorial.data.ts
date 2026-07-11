import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';

export const columns: BasicColumn[] = [
  {
    title: '成员姓名',
    width: 120,
    dataIndex: 'memberName',
  },
  {
    title: '家族ID',
    width: 120,
    dataIndex: 'familyId',
  },
  {
    title: '纪念馆封面图',
    width: 80,
    dataIndex: 'coverImage',
    customRender: ({ text }) => (text ? h('img', { src: text, style: 'width: 40px; height: 40px; object-fit: cover;' }) : '-'),
  },
  {
    title: '生平简介',
    width: 200,
    dataIndex: 'bio',
    customRender: ({ text }) => {
      if (!text) return '-';
      return text.length > 30 ? text.substring(0, 30) + '...' : text;
    },
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
    field: 'memberName',
    label: '成员姓名',
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
    componentProps: {
      placeholder: '请输入家族ID',
    },
  },
  {
    field: 'memberId',
    label: '成员ID',
    component: 'Input',
    componentProps: {
      placeholder: '请输入成员ID',
    },
  },
  {
    field: 'memberName',
    label: '成员姓名',
    component: 'Input',
    required: true,
    componentProps: {
      placeholder: '请输入成员姓名',
    },
  },
  {
    field: 'bio',
    label: '生平简介',
    component: 'InputTextArea',
    componentProps: {
      placeholder: '请输入生平简介',
      rows: 4,
    },
  },
  {
    field: 'coverImage',
    label: '纪念馆封面图',
    component: 'JImageUpload',
    componentProps: {
      text: '上传封面图',
    },
  },
];
