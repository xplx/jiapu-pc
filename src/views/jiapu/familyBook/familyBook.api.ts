import { defHttp } from '/@/utils/http/axios';

enum Api {
  list = '/pc/jiapu/familyBook/list',
  edit = '/pc/jiapu/familyBook/edit',
  delete = '/pc/jiapu/familyBook/delete',
  deleteBatch = '/pc/jiapu/familyBook/deleteBatch',
}

/**
 * 查询谱书列表
 * @param params
 */
export const getList = (params) => {
  return defHttp.get({ url: Api.list, params });
};

/**
 * 保存或更新谱书
 * @param params
 * @param isUpdate
 */
export const saveOrUpdate = (params, isUpdate) => {
  return defHttp.post({ url: Api.edit, params });
};

/**
 * 删除谱书
 * @param params
 * @param handleSuccess
 */
export const deleteFamilyBook = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.delete, data: params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};

/**
 * 批量删除谱书
 * @param params
 */
export const batchDeleteFamilyBook = (params) =>
  defHttp.delete({ url: Api.deleteBatch, data: params }, { joinParamsToUrl: true });
