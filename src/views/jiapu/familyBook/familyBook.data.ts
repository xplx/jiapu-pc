import { BasicColumn, FormSchema } from '/@/components/Table';

const layoutStyleMap = { 1: '欧式', 2: '苏式', 3: '碟记式', 4: '现代式', 5: '宝塔式' };

const bookStatusMap = { draft: '草稿', generating: '生成中', completed: '已完成', failed: '生成失败' };

export const columns: BasicColumn[] = [
  {
    title: '谱书名称',
    width: 120,
    dataIndex: 'bookName',
  },
  {
    title: '家族ID',
    width: 120,
    dataIndex: 'familyId',
  },
  {
    title: '页眉谱名',
    width: 120,
    dataIndex: 'bookTitle',
  },
  {
    title: '堂号',
    width: 100,
    dataIndex: 'hallName',
  },
  {
    title: '编者',
    width: 100,
    dataIndex: 'editor',
  },
  {
    title: '排版样式',
    width: 100,
    dataIndex: 'layoutStyle',
    customRender: ({ text }) => layoutStyleMap[text] || '-',
  },
  {
    title: '谱书状态',
    width: 100,
    dataIndex: 'bookStatus',
    customRender: ({ text }) => bookStatusMap[text] || '-',
  },
  {
    title: '生成进度',
    width: 100,
    dataIndex: 'generationProgress',
    customRender: ({ text }) => {
      if (text === null || text === undefined) return '-';
      return `${text}%`;
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
    field: 'bookName',
    label: '谱书名称',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'bookTitle',
    label: '页眉谱名',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    field: 'layoutStyle',
    label: '排版样式',
    component: 'Select',
    componentProps: {
      options: [
        { label: '欧式', value: 1 },
        { label: '苏式', value: 2 },
        { label: '碟记式', value: 3 },
        { label: '现代式', value: 4 },
        { label: '宝塔式', value: 5 },
      ],
      allowClear: true,
      placeholder: '请选择排版样式',
    },
    colProps: { span: 6 },
  },
  {
    field: 'bookStatus',
    label: '谱书状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '草稿', value: 'draft' },
        { label: '生成中', value: 'generating' },
        { label: '已完成', value: 'completed' },
        { label: '生成失败', value: 'failed' },
      ],
      allowClear: true,
      placeholder: '请选择谱书状态',
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
    field: 'familyId',
    label: '家族ID',
    component: 'Input',
    required: true,
    componentProps: {
      placeholder: '请输入家族ID',
    },
  },
  {
    field: 'bookName',
    label: '谱书名称',
    component: 'Input',
    required: true,
    componentProps: {
      placeholder: '请输入谱书名称',
    },
  },
  {
    field: 'bookTitle',
    label: '页眉谱名',
    component: 'Input',
    componentProps: {
      placeholder: '请输入页眉谱名',
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
    field: 'editor',
    label: '编者',
    component: 'Input',
    componentProps: {
      placeholder: '请输入编者',
    },
  },
  {
    field: 'layoutStyle',
    label: '排版样式',
    component: 'Select',
    componentProps: {
      options: [
        { label: '欧式', value: 1 },
        { label: '苏式', value: 2 },
        { label: '碟记式', value: 3 },
        { label: '现代式', value: 4 },
        { label: '宝塔式', value: 5 },
      ],
      placeholder: '请选择排版样式',
    },
  },
  {
    field: 'coverTemplate',
    label: '封面模板',
    component: 'Input',
    componentProps: {
      placeholder: '请输入封面模板',
    },
  },
  {
    field: 'bookStatus',
    label: '谱书状态',
    component: 'Input',
    componentProps: {
      placeholder: '请输入谱书状态',
    },
  },
];
