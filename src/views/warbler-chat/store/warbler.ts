import { defineStore } from 'pinia';
import { ref } from 'vue';
import warblerChatData from '@/views/warbler-chat/datasSource/warblerChat.json';

/**
 * @description: 数据仓库
 */
export const useDataStore = defineStore('userInfo', () => {
  console.log('🚀🚀 ~ useDataStore ~ warblerChatData:', warblerChatData);
  const { userChatData } = warblerChatData;
  // 群成员认证
  const isAuthentication = ref(true);
  // 权限认证
  const authText = (text: string) => (isAuthentication.value ? text : '口令认证通过后可查看数据');
  return { userChatData, isAuthentication, authText };
});
