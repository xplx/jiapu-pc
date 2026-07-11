import { defHttp } from '/@/utils/http/axios';

enum Api {
  list = '/pc/jiapu/worship/list',
  delete = '/pc/jiapu/worship/delete',
  deleteBatch = '/pc/jiapu/worship/deleteBatch',
}

/**
 * 查询祭拜记录列表
 * @param params
 */
export const getList = (params) => {
  return defHttp.get({ url: Api.list, params });
};

/**
 * 删除祭拜记录
 * @param params
 * @param handleSuccess
 */
export const deleteWorship = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.delete, data: params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};

/**
 * 批量删除祭拜记录
 * @param params
 */
export const batchDeleteWorship = (params) =>
  defHttp.delete({ url: Api.deleteBatch, data: params }, { joinParamsToUrl: true });
