import { defHttp } from '/@/utils/http/axios';

enum Api {
  list = '/pc/jiapu/offering/list',
  save = '/pc/jiapu/offering/add',
  edit = '/pc/jiapu/offering/edit',
  delete = '/pc/jiapu/offering/delete',
  deleteBatch = '/pc/jiapu/offering/deleteBatch',
  toggleStatus = '/pc/jiapu/offering/toggleStatus',
}

/**
 * 查询祭品列表
 * @param params
 */
export const getList = (params) => {
  return defHttp.get({ url: Api.list, params });
};

/**
 * 保存或更新祭品
 * @param params
 * @param isUpdate
 */
export const saveOrUpdate = (params, isUpdate) => {
  const url = isUpdate ? Api.edit : Api.save;
  return defHttp.post({ url: url, params });
};

/**
 * 删除祭品
 * @param params
 * @param handleSuccess
 */
export const deleteOffering = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.delete, data: params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};

/**
 * 批量删除祭品
 * @param params
 */
export const batchDeleteOffering = (params) =>
  defHttp.delete({ url: Api.deleteBatch, data: params }, { joinParamsToUrl: true });

/**
 * 上下架切换
 * @param id
 */
export const toggleStatus = (id) => defHttp.post({ url: Api.toggleStatus, params: { id } });
