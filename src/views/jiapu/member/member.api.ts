import { defHttp } from '/@/utils/http/axios';

enum Api {
  list = '/pc/jiapu/member/list',
}

/**
 * 查询家族成员列表
 * @param params
 */
export const getList = (params) => {
  return defHttp.get({ url: Api.list, params });
};
