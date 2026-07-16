import { BasicColumn, FormSchema } from '/@/components/Table';
import { getDictItemsByCode } from '/@/utils/dict';

const belongDictItems = getDictItemsByCode('offering_category') || [];

function getBelongText(value) {
  if (value === null || value === undefined || value === '') return '-';
  const item = belongDictItems.find((d) => d.value === String(value));
  console.log(belongDictItems);
  return item ? item.text : value;
}

export const columns: BasicColumn[] = [
  {
    title: '名称',
    width: 120,
    dataIndex: 'name',
  },
  {
    title: '归属',
    width: 120,
    dataIndex: 'belong',
    customRender: ({ text }) => getBelongText(text),
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
      placeholder: '请输入分类名称',
    },
  },
  {
    field: 'belong',
    label: '归属',
    component: 'JDictSelectTag',
    defaultValue: 3,
    componentProps: {
      dictCode: 'offering_category',
      placeholder: '请选择归属',
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
