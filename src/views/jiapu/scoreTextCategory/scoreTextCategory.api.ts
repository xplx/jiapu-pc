import { defHttp } from '/@/utils/http/axios';

enum Api {
  list = '/pc/jiapu/scoreTextCategory/list',
  save = '/pc/jiapu/scoreTextCategory/add',
  edit = '/pc/jiapu/scoreTextCategory/edit',
  delete = '/pc/jiapu/scoreTextCategory/delete',
  deleteBatch = '/pc/jiapu/scoreTextCategory/deleteBatch',
}

/**
 * 查询谱文类目列表
 * @param params
 */
export const getList = (params) => {
  return defHttp.get({ url: Api.list, params });
};

/**
 * 保存或更新谱文类目
 * @param params
 * @param isUpdate
 */
export const saveOrUpdate = (params, isUpdate) => {
  const url = isUpdate ? Api.edit : Api.save;
  return defHttp.post({ url: url, params });
};

/**
 * 删除谱文类目
 * @param params
 * @param handleSuccess
 */
export const deleteScoreTextCategory = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.delete, data: params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};

/**
 * 批量删除谱文类目
 * @param params
 */
export const batchDeleteScoreTextCategory = (params) =>
  defHttp.delete({ url: Api.deleteBatch, data: params }, { joinParamsToUrl: true });
