import { defHttp } from '/@/utils/http/axios';

enum Api {
  list = '/pc/jiapu/familyCover/list',
  save = '/pc/jiapu/familyCover/add',
  edit = '/pc/jiapu/familyCover/edit',
  delete = '/pc/jiapu/familyCover/delete',
  deleteBatch = '/pc/jiapu/familyCover/deleteBatch',
}

/**
 * 查询封面列表
 * @param params
 */
export const getList = (params) => {
  return defHttp.get({ url: Api.list, params });
};

/**
 * 保存或更新封面
 * @param params
 * @param isUpdate
 */
export const saveOrUpdate = (params, isUpdate) => {
  const url = isUpdate ? Api.edit : Api.save;
  return defHttp.post({ url: url, params });
};

/**
 * 删除封面
 * @param params
 * @param handleSuccess
 */
export const deleteFamilyCover = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.delete, data: params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};

/**
 * 批量删除封面
 * @param params
 */
export const batchDeleteFamilyCover = (params) =>
  defHttp.delete({ url: Api.deleteBatch, data: params }, { joinParamsToUrl: true });
