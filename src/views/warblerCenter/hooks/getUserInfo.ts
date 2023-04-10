/*
 * @Author: 一尾流莺
 * @Description:获取掘金用户信息
 * @Date: 2023-04-10 16:33:27
 * @LastEditTime: 2023-04-10 18:52:17
 * @FilePath: \warbler-fe\src\views\warblerCenter\hooks\getUserInfo.ts
 */
import { ref } from 'vue';

import service from './juejin';

const userInfo = ref({});

const useGetUserInfo = () => {
  const getUserInfo = async () => {
    const res = await service.get('/user', {
      id: '4099422807393901',
    });
    console.log('🚀🚀 ~ res:', res);
  };
  return {
    userInfo,
    getUserInfo,
  };
};

export default useGetUserInfo;
