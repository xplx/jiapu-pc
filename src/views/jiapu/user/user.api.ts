import { defHttp } from '/@/utils/http/axios';

enum Api {
  list = '/pc/jiapu/user/list',
  edit = '/pc/jiapu/user/edit',
  delete = '/pc/jiapu/user/delete',
  deleteBatch = '/pc/jiapu/user/deleteBatch',
}

/**
 * 查询用户列表
 * @param params
 */
export const getList = (params) => {
  return defHttp.get({ url: Api.list, params });
};

/**
 * 保存或更新用户
 * @param params
 * @param isUpdate
 */
export const saveOrUpdate = (params, isUpdate) => {
  return defHttp.put({ url: Api.edit, params });
};

/**
 * 删除用户
 * @param params
 * @param handleSuccess
 */
export const deleteUser = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.delete, data: params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};

/**
 * 批量删除用户
 * @param params
 */
export const batchDeleteUser = (params) =>
  defHttp.delete({ url: Api.deleteBatch, data: params }, { joinParamsToUrl: true });
