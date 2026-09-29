import { defHttp } from '/@/utils/http/axios';

enum Api {
  overview = '/pc/jiapu/aiMonitor/overview',
  providerList = '/pc/jiapu/aiMonitor/provider/list',
  providerEdit = '/pc/jiapu/aiMonitor/provider/edit',
  refresh = '/pc/jiapu/aiMonitor/refresh',
  runOnce = '/pc/jiapu/aiMonitor/runOnce',
  dailyList = '/pc/jiapu/aiMonitor/daily/list',
  callLogList = '/pc/jiapu/aiMonitor/callLog/list',
  alertList = '/pc/jiapu/aiMonitor/alert/list',
  mailConfig = '/pc/jiapu/aiMonitor/mailConfig',
  mailSave = '/pc/jiapu/aiMonitor/mailConfig/save',
  mailTest = '/pc/jiapu/aiMonitor/mailConfig/test',
}

/**
 * 总览：今日调用量、失败数、告警数、低余额厂商数
 */
export const getOverview = () => {
  return defHttp.get({ url: Api.overview });
};

/**
 * 厂商列表（含当前余额与状态）
 */
export const getProviderList = () => {
  return defHttp.get({ url: Api.providerList });
};

/**
 * 编辑厂商配置
 */
export const editProvider = (params) => {
  return defHttp.post({ url: Api.providerEdit, params });
};

/**
 * 手动刷新全部厂商余额
 */
export const refreshBalance = () => {
  return defHttp.post({ url: Api.refresh });
};

/**
 * 手动触发一次每日汇总
 */
export const runOnce = () => {
  return defHttp.post({ url: Api.runOnce });
};

/**
 * 每日快照分页
 */
export const getDailyList = (params) => {
  return defHttp.get({ url: Api.dailyList, params });
};

/**
 * 调用明细分页
 */
export const getCallLogList = (params) => {
  return defHttp.get({ url: Api.callLogList, params });
};

/**
 * 告警记录分页
 */
export const getAlertList = (params) => {
  return defHttp.get({ url: Api.alertList, params });
};

/**
 * 读取邮件配置
 */
export const getMailConfig = () => {
  return defHttp.get({ url: Api.mailConfig });
};

/**
 * 保存邮件配置
 */
export const saveMailConfig = (params) => {
  return defHttp.post({ url: Api.mailSave, params });
};

/**
 * 发送测试邮件
 */
export const testMail = (params) => {
  return defHttp.post({ url: Api.mailTest, params });
};
