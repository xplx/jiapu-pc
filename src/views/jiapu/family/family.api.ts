import { defHttp } from '/@/utils/http/axios';

enum Api {
  list = '/pc/jiapu/family/list',
  save = '/pc/jiapu/family/add',
  edit = '/pc/jiapu/family/edit',
  delete = '/pc/jiapu/family/delete',
  deleteBatch = '/pc/jiapu/family/deleteBatch',
}

/**
 * 查询家族列表
 * @param params
 */
export const getList = (params) => {
  return defHttp.get({ url: Api.list, params });
};

/**
 * 保存或更新家族
 * @param params
 * @param isUpdate
 */
export const saveOrUpdate = (params, isUpdate) => {
  const url = isUpdate ? Api.edit : Api.save;
  return defHttp.post({ url: url, params });
};

/**
 * 删除家族
 * @param params
 * @param handleSuccess
 */
export const deleteFamily = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.delete, data: params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};

/**
 * 批量删除家族
 * @param params
 */
export const batchDeleteFamily = (params) =>
  defHttp.delete({ url: Api.deleteBatch, data: params }, { joinParamsToUrl: true });
