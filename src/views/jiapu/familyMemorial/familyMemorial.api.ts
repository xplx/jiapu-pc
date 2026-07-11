import { defHttp } from '/@/utils/http/axios';

enum Api {
  list = '/pc/jiapu/familyMemorial/list',
  save = '/pc/jiapu/familyMemorial/add',
  edit = '/pc/jiapu/familyMemorial/edit',
  delete = '/pc/jiapu/familyMemorial/delete',
  deleteBatch = '/pc/jiapu/familyMemorial/deleteBatch',
}

/**
 * 查询纪念馆列表
 * @param params
 */
export const getList = (params) => {
  return defHttp.get({ url: Api.list, params });
};

/**
 * 保存或更新纪念馆
 * @param params
 * @param isUpdate
 */
export const saveOrUpdate = (params, isUpdate) => {
  const url = isUpdate ? Api.edit : Api.save;
  return defHttp.post({ url: url, params });
};

/**
 * 删除纪念馆
 * @param params
 * @param handleSuccess
 */
export const deleteFamilyMemorial = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.delete, data: params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};

/**
 * 批量删除纪念馆
 * @param params
 */
export const batchDeleteFamilyMemorial = (params) =>
  defHttp.delete({ url: Api.deleteBatch, data: params }, { joinParamsToUrl: true });
