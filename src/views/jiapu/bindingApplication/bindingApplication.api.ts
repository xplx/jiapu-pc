import { defHttp } from '/@/utils/http/axios';

enum Api {
  list = '/pc/jiapu/bindingApplication/list',
  delete = '/pc/jiapu/bindingApplication/delete',
  deleteBatch = '/pc/jiapu/bindingApplication/deleteBatch',
}

/**
 * 查询绑定申请列表
 * @param params
 */
export const getList = (params) => {
  return defHttp.get({ url: Api.list, params });
};

/**
 * 删除绑定申请
 * @param params
 * @param handleSuccess
 */
export const deleteBindingApplication = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.delete, data: params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};

/**
 * 批量删除绑定申请
 * @param params
 */
export const batchDeleteBindingApplication = (params) =>
  defHttp.delete({ url: Api.deleteBatch, data: params }, { joinParamsToUrl: true });
