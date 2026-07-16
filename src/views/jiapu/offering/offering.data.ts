import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';

const baseUploadUrl = import.meta.env.VITE_GLOB_DOMAIN_URL || '';

export const columns: BasicColumn[] = [
  {
    title: '祭品图',
    width: 80,
    dataIndex: 'icon',
    customRender: ({ text }) => (text ? h('img', { src: text, style: 'width: 40px; height: 40px; object-fit: contain;' }) : '-'),
  },
  {
    title: '名称',
    width: 120,
    dataIndex: 'name',
  },
  {
    title: '分类',
    width: 100,
    dataIndex: 'categoryName',
  },
  {
    title: '价格(族币)',
    width: 100,
    dataIndex: 'price',
  },
  {
    title: '持续时间',
    width: 120,
    dataIndex: 'duration',
    customRender: ({ text }) => {
      if (text === null || text === undefined) return '永久';
      return `${text}分钟`;
    },
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
    customRender: ({ text }) => {
      return text === 1 ? '上架' : '下架';
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '名称',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'categoryId',
    label: '分类',
    component: 'Select',
    componentProps: {
      allowClear: true,
      placeholder: '请选择分类',
    },
    colProps: { span: 6 },
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '上架', value: 1 },
        { label: '下架', value: 0 },
      ],
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
    field: 'name',
    label: '名称',
    component: 'Input',
    required: true,
    componentProps: {
      placeholder: '请输入祭品名称',
    },
  },
  {
    field: 'categoryId',
    label: '分类',
    component: 'Select',
    required: true,
    componentProps: {
      placeholder: '请选择分类',
    },
  },
  {
    field: 'icon',
    label: '图标',
    component: 'JImageUpload',
    required: true,
    componentProps: {
      text: '上传图标',
      uploadUrl: `${baseUploadUrl}/mini/jiapu/upload/uploadMinio`,
    },
  },
  {
    field: 'path',
    label: '播放源',
    component: 'JUpload',
    required: true,
    show: false,
    componentProps: {
      text: '上传音频',
      fileType: 'file',
      accept: 'audio/*',
      action: `${baseUploadUrl}/mini/jiapu/upload/uploadMinio`,
    },
  },
  {
    field: 'price',
    label: '价格(族币)',
    component: 'InputNumber',
    required: true,
    defaultValue: 0,
    componentProps: {
      min: 0,
      placeholder: '请输入价格',
    },
  },
  {
    field: 'duration',
    label: '持续时间(分钟)',
    component: 'InputNumber',
    componentProps: {
      min: 0,
      placeholder: '留空表示永久',
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
      options: [
        { label: '上架', value: 1 },
        { label: '下架', value: 0 },
      ],
    },
  },
];
