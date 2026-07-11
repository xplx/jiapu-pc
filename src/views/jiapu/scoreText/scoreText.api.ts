import { defHttp } from '/@/utils/http/axios';

enum Api {
  list = '/pc/jiapu/scoreText/list',
  save = '/pc/jiapu/scoreText/add',
  edit = '/pc/jiapu/scoreText/edit',
  delete = '/pc/jiapu/scoreText/delete',
  deleteBatch = '/pc/jiapu/scoreText/deleteBatch',
}

/**
 * 查询谱文内容列表
 * @param params
 */
export const getList = (params) => {
  return defHttp.get({ url: Api.list, params });
};

/**
 * 保存或更新谱文内容
 * @param params
 * @param isUpdate
 */
export const saveOrUpdate = (params, isUpdate) => {
  const url = isUpdate ? Api.edit : Api.save;
  return defHttp.post({ url: url, params });
};

/**
 * 删除谱文内容
 * @param params
 * @param handleSuccess
 */
export const deleteScoreText = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.delete, data: params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};

/**
 * 批量删除谱文内容
 * @param params
 */
export const batchDeleteScoreText = (params) =>
  defHttp.delete({ url: Api.deleteBatch, data: params }, { joinParamsToUrl: true });
