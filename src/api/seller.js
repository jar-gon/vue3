import { get } from 'helper/fetch';

// 测试环境专用接口，获取学生token
export async function getStudentToken(data) {
  return await get('/zmbiz-csc-o2olesson-arrange/test/generateTokenByStudentId', data);
}
