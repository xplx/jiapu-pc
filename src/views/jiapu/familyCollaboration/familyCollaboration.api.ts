import { defHttp } from '/@/utils/http/axios';

enum Api {
  list = '/pc/jiapu/familyCollaboration/list',
  delete = '/pc/jiapu/familyCollaboration/delete',
  deleteBatch = '/pc/jiapu/familyCollaboration/deleteBatch',
}

/**
 * 查询族务协作列表
 * @param params
 */
export const getList = (params) => {
  return defHttp.get({ url: Api.list, params });
};

/**
 * 删除族务协作
 * @param params
 * @param handleSuccess
 */
export const deleteFamilyCollaboration = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.delete, data: params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};

/**
 * 批量删除族务协作
 * @param params
 */
export const batchDeleteFamilyCollaboration = (params) =>
  defHttp.delete({ url: Api.deleteBatch, data: params }, { joinParamsToUrl: true });
