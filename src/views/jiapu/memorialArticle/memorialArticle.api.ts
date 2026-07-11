import { defHttp } from '/@/utils/http/axios';

enum Api {
  list = '/pc/jiapu/memorialArticle/list',
  delete = '/pc/jiapu/memorialArticle/delete',
  deleteBatch = '/pc/jiapu/memorialArticle/deleteBatch',
}

/**
 * 查询祭文列表
 * @param params
 */
export const getList = (params) => {
  return defHttp.get({ url: Api.list, params });
};

/**
 * 删除祭文
 * @param params
 * @param handleSuccess
 */
export const deleteMemorialArticle = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.delete, data: params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};

/**
 * 批量删除祭文
 * @param params
 */
export const batchDeleteMemorialArticle = (params) =>
  defHttp.delete({ url: Api.deleteBatch, data: params }, { joinParamsToUrl: true });
