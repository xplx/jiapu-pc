import { defHttp } from '/@/utils/http/axios';

enum Api {
  list = '/pc/jiapu/familyOperationLog/list',
  delete = '/pc/jiapu/familyOperationLog/delete',
  deleteBatch = '/pc/jiapu/familyOperationLog/deleteBatch',
}

/**
 * 查询操作日志列表
 * @param params
 */
export const getList = (params) => {
  return defHttp.get({ url: Api.list, params });
};

/**
 * 删除操作日志
 * @param params
 * @param handleSuccess
 */
export const deleteFamilyOperationLog = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.delete, data: params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};

/**
 * 批量删除操作日志
 * @param params
 */
export const batchDeleteFamilyOperationLog = (params) =>
  defHttp.delete({ url: Api.deleteBatch, data: params }, { joinParamsToUrl: true });
