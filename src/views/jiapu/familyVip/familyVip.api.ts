import { defHttp } from '/@/utils/http/axios';

enum Api {
  list = '/pc/jiapu/familyVip/list',
  delete = '/pc/jiapu/familyVip/delete',
  deleteBatch = '/pc/jiapu/familyVip/deleteBatch',
}

/**
 * 查询VIP订单列表
 * @param params
 */
export const getList = (params) => {
  return defHttp.get({ url: Api.list, params });
};

/**
 * 删除VIP订单
 * @param params
 * @param handleSuccess
 */
export const deleteFamilyVip = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.delete, data: params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};

/**
 * 批量删除VIP订单
 * @param params
 */
export const batchDeleteFamilyVip = (params) =>
  defHttp.delete({ url: Api.deleteBatch, data: params }, { joinParamsToUrl: true });
