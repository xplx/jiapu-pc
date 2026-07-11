import { defHttp } from '/@/utils/http/axios';

enum Api {
  list = '/pc/jiapu/generationName/list',
}

/**
 * 查询字辈列表
 * @param params
 */
export const getList = (params) => {
  return defHttp.get({ url: Api.list, params });
};
