import { defHttp } from '/@/utils/http/axios';

enum Api {
  list = '/pc/jiapu/familyDynamic/list',
  delete = '/pc/jiapu/familyDynamic/delete',
  deleteBatch = '/pc/jiapu/familyDynamic/deleteBatch',
}

/**
 * 查询家族动态列表
 * @param params
 */
export const getList = (params) => {
  return defHttp.get({ url: Api.list, params });
};

/**
 * 删除家族动态
 * @param params
 * @param handleSuccess
 */
export const deleteFamilyDynamic = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.delete, data: params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};

/**
 * 批量删除家族动态
 * @param params
 */
export const batchDeleteFamilyDynamic = (params) =>
  defHttp.delete({ url: Api.deleteBatch, data: params }, { joinParamsToUrl: true });
