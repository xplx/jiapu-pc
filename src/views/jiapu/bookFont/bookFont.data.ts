import { BasicColumn, FormSchema } from '/@/components/Table';
import { useGlobSetting } from '/@/hooks/setting';
import { h } from 'vue';

const globSetting = useGlobSetting();

/**
 * 字体文件上传接口。
 * 走专用接口而非通用上传：jeecg 的 /sys/common/upload 带文件类型白名单，
 * 不含 ttf/otf/ttc 后缀，上传字体会被拒。
 * 该接口内部固定写入 MinIO 的 jpfile/fonts 目录。
 */
export const fontUploadUrl = `${globSetting.uploadUrl}/pc/jiapu/bookFont/upload`;

const statusOptions = [
  { label: '启用', value: 1 },
  { label: '禁用', value: 0 },
];

export const columns: BasicColumn[] = [
  {
    title: '字体名称',
    width: 160,
    dataIndex: 'fontName',
  },
  {
    title: '字体文件',
    width: 140,
    dataIndex: 'fontFileUrl',
    customRender: ({ text }) =>
      text ? h('a', { href: text, target: '_blank', rel: 'noopener' }, '查看字体文件') : '-',
  },
  {
    title: '存储路径',
    width: 280,
    dataIndex: 'fontFilePath',
    customRender: ({ text }) => text || '-',
  },
  {
    title: '状态',
    width: 80,
    dataIndex: 'status',
    customRender: ({ text }) => (text === 1 ? '启用' : '禁用'),
  },
  {
    title: '排序',
    width: 80,
    dataIndex: 'sortNo',
  },
  {
    title: '创建时间',
    width: 160,
    dataIndex: 'createTime',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'fontName',
    label: '字体名称',
    component: 'JInput',
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
    field: 'fontName',
    label: '字体名称',
    component: 'Input',
    required: true,
    componentProps: {
      placeholder: '请输入字体名称',
    },
  },
  {
    field: 'fontFileUrl',
    label: '字体文件',
    component: 'JUpload',
    required: true,
    helpMessage: '支持 ttf / otf / ttc / woff / woff2，文件将保存到 MinIO 的 jpfile/fonts 目录',
    componentProps: {
      action: fontUploadUrl,
      bizPath: 'jpfile/fonts',
      fileType: 'all',
      maxCount: 1,
      text: '上传字体文件',
      accept: '.ttf,.otf,.ttc,.woff,.woff2',
      returnUrl: true,
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
    field: 'sortNo',
    label: '排序',
    component: 'InputNumber',
    defaultValue: 0,
    componentProps: {
      min: 0,
    },
  },
];
