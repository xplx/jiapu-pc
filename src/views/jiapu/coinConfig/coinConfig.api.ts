import { defHttp } from '/@/utils/http/axios';

enum Api {
  list = '/pc/jiapu/coinConfig/list',
  save = '/pc/jiapu/coinConfig/add',
  edit = '/pc/jiapu/coinConfig/edit',
  delete = '/pc/jiapu/coinConfig/delete',
  deleteBatch = '/pc/jiapu/coinConfig/deleteBatch',
}

/**
 * 查询谱币配置列表
 * @param params
 */
export const getList = (params) => {
  return defHttp.get({ url: Api.list, params });
};

/**
 * 保存或更新谱币配置
 * @param params
 * @param isUpdate
 */
export const saveOrUpdate = (params, isUpdate) => {
  const url = isUpdate ? Api.edit : Api.save;
  return defHttp.post({ url: url, params });
};

/**
 * 删除谱币配置
 * @param params
 * @param handleSuccess
 */
export const deleteCoinConfig = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.delete, data: params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};

/**
 * 批量删除谱币配置
 * @param params
 */
export const batchDeleteCoinConfig = (params) =>
  defHttp.delete({ url: Api.deleteBatch, data: params }, { joinParamsToUrl: true });
