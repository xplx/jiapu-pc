import { BasicColumn, FormSchema } from '/@/components/Table';

// ==================== 通用字典 ====================

export const providerOptions = [
  { label: 'DeepSeek', value: 'deepseek' },
  { label: '阿里云百炼', value: 'aliyun_dashscope' },
  { label: '阿里云视觉智能', value: 'aliyun_viapi' },
  { label: '火山引擎MediaKit', value: 'volcengine' },
  { label: '百度AI开放平台', value: 'baidu' },
  { label: '百度语音识别', value: 'baidu_asr' },
  { label: '佐糖Picwish', value: 'picwish' },
  { label: 'Replicate', value: 'replicate' },
];

const providerMap = {
  deepseek: 'DeepSeek',
  aliyun_dashscope: '阿里云百炼',
  aliyun_viapi: '阿里云视觉智能',
  volcengine: '火山引擎MediaKit',
  baidu: '百度AI开放平台',
  baidu_asr: '百度语音识别',
  picwish: '佐糖Picwish',
  replicate: 'Replicate',
};

const balanceModeMap = { API: '接口自动拉取', QUOTA: '套餐次数估算', NONE: '仅统计用量' };
const statusMap = { NORMAL: '正常', LOW: '余额不足', EXHAUSTED: '已耗尽', UNKNOWN: '未知' };
const alertTypeMap = {
  BALANCE_LOW: '余额预警',
  CALL_REJECTED: '调用被拒',
  DAILY_SUMMARY: '每日汇总',
  MANUAL: '手动测试',
};
const sendStatusMap = { 0: '未发送', 1: '成功', 2: '失败' };

/** 字典列渲染 */
const renderMap = (map) => ({ text }) => (text == null ? '-' : map[text] || '-');

// ==================== 厂商档案 ====================

export const providerColumns: BasicColumn[] = [
  { title: '厂商', width: 130, dataIndex: 'providerName' },
  { title: '编码', width: 130, dataIndex: 'providerCode' },
  { title: '用途', width: 200, dataIndex: 'featureDesc' },
  {
    title: '余额来源',
    width: 110,
    dataIndex: 'balanceMode',
    customRender: ({ text }) => balanceModeMap[text] || '-',
  },
  { title: '当前余额', width: 110, dataIndex: 'balance' },
  { title: '单位', width: 80, dataIndex: 'currency' },
  { title: '套餐总量', width: 100, dataIndex: 'totalQuota' },
  { title: '已用量', width: 90, dataIndex: 'usedQuota' },
  { title: '告警阈值', width: 100, dataIndex: 'threshold' },
  {
    title: '状态',
    width: 100,
    dataIndex: 'status',
    customRender: renderMap(statusMap),
  },
  {
    title: '监控',
    width: 70,
    dataIndex: 'enabled',
    customRender: ({ text }) => (text === 1 ? '启用' : '停用'),
  },
  { title: '最近检查', width: 170, dataIndex: 'lastCheckTime' },
];

export const providerFormSchema: FormSchema[] = [
  { field: 'providerName', label: '厂商名称', component: 'Input', required: true },
  { field: 'featureDesc', label: '用途说明', component: 'Input' },
  {
    field: 'enabled',
    label: '启用监控',
    component: 'RadioButtonGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: '启用', value: 1 },
        { label: '停用', value: 0 },
      ],
    },
  },
  {
    field: 'balanceMode',
    label: '余额来源',
    component: 'Select',
    componentProps: {
      options: [
        { label: '接口自动拉取（有官方余额接口）', value: 'API' },
        { label: '套餐次数估算（无接口，本地扣减）', value: 'QUOTA' },
        { label: '仅统计用量', value: 'NONE' },
      ],
    },
  },
  {
    field: 'balanceApi',
    label: '余额接口地址',
    component: 'Input',
    ifShow: ({ values }) => values.balanceMode === 'API',
  },
  {
    field: 'apiKey',
    label: '余额接口密钥',
    component: 'Input',
    ifShow: ({ values }) => values.balanceMode === 'API',
    componentProps: { placeholder: '留空则取配置文件中的密钥' },
  },
  {
    field: 'totalQuota',
    label: '套餐总量',
    component: 'InputNumber',
    ifShow: ({ values }) => values.balanceMode === 'QUOTA',
    componentProps: { min: 0, style: { width: '100%' } },
  },
  { field: 'threshold', label: '告警阈值', component: 'InputNumber', componentProps: { min: 0, style: { width: '100%' } } },
  { field: 'currency', label: '单位', component: 'Input' },
  { field: 'remark', label: '备注', component: 'InputTextArea' },
];

// ==================== 每日快照 ====================

export const dailyColumns: BasicColumn[] = [
  { title: '统计日期', width: 120, dataIndex: 'statDate' },
  { title: '厂商', width: 140, dataIndex: 'providerName' },
  { title: '编码', width: 130, dataIndex: 'providerCode' },
  { title: '调用次数', width: 100, dataIndex: 'callCount' },
  { title: '失败次数', width: 100, dataIndex: 'failCount' },
  { title: '余额', width: 110, dataIndex: 'balance' },
  { title: '较前日', width: 100, dataIndex: 'balanceDelta' },
  { title: '单位', width: 80, dataIndex: 'currency' },
  {
    title: '状态',
    width: 100,
    dataIndex: 'status',
    customRender: renderMap(statusMap),
  },
];

export const dailySearchFormSchema: FormSchema[] = [
  {
    field: 'providerCode',
    label: '厂商',
    component: 'Select',
    componentProps: { options: providerOptions, allowClear: true, placeholder: '请选择厂商' },
    colProps: { span: 6 },
  },
];

// ==================== 调用明细 ====================

export const callLogColumns: BasicColumn[] = [
  {
    title: '厂商',
    width: 130,
    dataIndex: 'providerCode',
    customRender: ({ text }) => providerMap[text] || text,
  },
  { title: '功能', width: 120, dataIndex: 'feature' },
  { title: '用户ID', width: 160, dataIndex: 'userId' },
  {
    title: '结果',
    width: 80,
    dataIndex: 'success',
    customRender: ({ text }) => (text === 1 ? '成功' : '失败'),
  },
  { title: '耗时(ms)', width: 100, dataIndex: 'costMs' },
  { title: '错误信息', dataIndex: 'errorMsg' },
  { title: '调用时间', width: 170, dataIndex: 'createTime' },
];

export const callLogSearchFormSchema: FormSchema[] = [
  {
    field: 'providerCode',
    label: '厂商',
    component: 'Select',
    componentProps: { options: providerOptions, allowClear: true, placeholder: '请选择厂商' },
    colProps: { span: 6 },
  },
  {
    field: 'success',
    label: '调用结果',
    component: 'Select',
    componentProps: {
      options: [
        { label: '成功', value: 1 },
        { label: '失败', value: 0 },
      ],
      allowClear: true,
      placeholder: '请选择结果',
    },
    colProps: { span: 6 },
  },
];

// ==================== 告警记录 ====================

export const alertColumns: BasicColumn[] = [
  {
    title: '类型',
    width: 110,
    dataIndex: 'alertType',
    customRender: renderMap(alertTypeMap),
  },
  {
    title: '厂商',
    width: 130,
    dataIndex: 'providerCode',
    customRender: ({ text }) => providerMap[text] || text || '-',
  },
  { title: '标题', width: 260, dataIndex: 'title' },
  { title: '收件人', width: 180, dataIndex: 'receivers' },
  {
    title: '发送状态',
    width: 100,
    dataIndex: 'sendStatus',
    customRender: renderMap(sendStatusMap),
  },
  { title: '发送结果', width: 200, dataIndex: 'sendMsg' },
  { title: '创建时间', width: 170, dataIndex: 'createTime' },
];

export const alertSearchFormSchema: FormSchema[] = [
  {
    field: 'alertType',
    label: '告警类型',
    component: 'Select',
    componentProps: {
      options: [
        { label: '余额预警', value: 'BALANCE_LOW' },
        { label: '调用被拒', value: 'CALL_REJECTED' },
        { label: '每日汇总', value: 'DAILY_SUMMARY' },
        { label: '手动测试', value: 'MANUAL' },
      ],
      allowClear: true,
      placeholder: '请选择类型',
    },
    colProps: { span: 6 },
  },
];

// ==================== 邮件配置 ====================

export const mailFormSchema: FormSchema[] = [
  {
    field: 'enabled',
    label: '启用邮件告警',
    component: 'RadioButtonGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: '启用', value: 1 },
        { label: '停用', value: 0 },
      ],
    },
  },
  { field: 'smtpHost', label: 'SMTP服务器', component: 'Input', required: true },
  { field: 'smtpPort', label: 'SMTP端口', component: 'InputNumber', required: true },
  {
    field: 'smtpSsl',
    label: 'SSL加密',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: '开启', value: 1 },
        { label: '关闭', value: 0 },
      ],
    },
  },
  { field: 'fromAccount', label: '发件邮箱', component: 'Input', required: true },
  {
    field: 'fromPassword',
    label: '邮箱授权码',
    component: 'InputPassword',
    componentProps: { placeholder: '需在邮箱SMTP设置中申请授权码，非登录密码' },
  },
  { field: 'fromName', label: '发件人名称', component: 'Input' },
  { field: 'receivers', label: '收件人', component: 'Input', required: true, componentProps: { placeholder: '多个收件人用英文逗号分隔' } },
  {
    field: 'dailySummaryEnabled',
    label: '每日汇总邮件',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: '启用', value: 1 },
        { label: '停用', value: 0 },
      ],
    },
  },
  { field: 'dailySummaryHour', label: '汇总发送小时', component: 'InputNumber', componentProps: { min: 0, max: 23, style: { width: '100%' } } },
  {
    field: 'lowBalanceEnabled',
    label: '余额不足即时告警',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: '启用', value: 1 },
        { label: '停用', value: 0 },
      ],
    },
  },
  { field: 'silentMinutes', label: '告警静默期(分钟)', component: 'InputNumber', componentProps: { min: 0, style: { width: '100%' } } },
];
