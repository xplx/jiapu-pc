import { defHttp } from '/@/utils/http/axios';

enum Api {
  list = '/pc/jiapu/bookFont/list',
  add = '/pc/jiapu/bookFont/add',
  edit = '/pc/jiapu/bookFont/edit',
  delete = '/pc/jiapu/bookFont/delete',
  deleteBatch = '/pc/jiapu/bookFont/deleteBatch',
}

/**
 * 查询字体列表
 * @param params
 */
export const getList = (params) => {
  return defHttp.get({ url: Api.list, params });
};

/**
 * 保存或更新字体
 * @param params
 * @param isUpdate
 */
export const saveOrUpdate = (params, isUpdate) => {
  const url = isUpdate ? Api.edit : Api.add;
  return isUpdate ? defHttp.put({ url: url, params }) : defHttp.post({ url: url, params });
};

/**
 * 删除字体
 * @param params
 * @param handleSuccess
 */
export const deleteBookFont = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.delete, data: params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};

/**
 * 批量删除字体
 * @param params
 */
export const batchDeleteBookFont = (params) =>
  defHttp.delete({ url: Api.deleteBatch, data: params }, { joinParamsToUrl: true });
