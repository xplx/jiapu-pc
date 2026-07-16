import { defHttp } from '/@/utils/http/axios';

enum Api {
  list = '/pc/jiapu/offeringCategory/list',
  listAll = '/pc/jiapu/offeringCategory/listAll',
  save = '/pc/jiapu/offeringCategory/add',
  edit = '/pc/jiapu/offeringCategory/edit',
  delete = '/pc/jiapu/offeringCategory/delete',
  deleteBatch = '/pc/jiapu/offeringCategory/deleteBatch',
  toggleStatus = '/pc/jiapu/offeringCategory/toggleStatus',
}

/**
 * 查询分类列表
 * @param params
 */
export const getList = (params) => {
  return defHttp.get({ url: Api.list, params });
};

/**
 * 获取所有上架分类
 */
export const getAllList = () => {
  return defHttp.get({ url: Api.listAll });
};

/**
 * 保存或更新分类
 * @param params
 * @param isUpdate
 */
export const saveOrUpdate = (params, isUpdate) => {
  return isUpdate ? defHttp.put({ url:  Api.edit, params }) : defHttp.post({ url: Api.save, params });

};

/**
 * 删除分类
 * @param params
 * @param handleSuccess
 */
export const deleteOfferingCategory = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.delete, data: params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};

/**
 * 批量删除分类
 * @param params
 */
export const batchDeleteOfferingCategory = (params) =>
  defHttp.delete({ url: Api.deleteBatch, data: params }, { joinParamsToUrl: true });

/**
 * 上下架切换
 * @param id
 */
export const toggleStatus = (id) => defHttp.post({ url: Api.toggleStatus, params: { id } });
