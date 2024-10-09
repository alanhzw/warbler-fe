import { defineStore } from 'pinia';
import { computed, onMounted, ref } from 'vue';
import warblerChatData from '@/views/warbler-chat/datasSource/warblerChat.json';

/**
 * @description: 数据仓库
 */
export const useDataStore = defineStore('userInfo', () => {
  console.log('🚀🚀 ~ useDataStore ~ warblerChatData:', warblerChatData);
  const { userChatData, roomData, dateChatData, cityData } = warblerChatData;

  // 群成员认证
  const isAuthentication = ref(false);
  // 未通过权限认证文案
  const authText = (text: string) => (isAuthentication.value ? text : '暗号认证通过后可查看');
  // 是否小屏幕
  const isSmallScreen = computed(() => document.documentElement.clientWidth < 900);
  // 权限认证
  const triggerAuth = (code: string) => {
    // 暗号列表
    const codeList = ['一尾流莺', 'warbler', 'boss', '韩志伟', '韩志伟最帅', '我爱韩志伟'];
    // 符合暗号即可存入缓存
    if (codeList.includes(code)) {
      isAuthentication.value = true;
      localStorage.setItem('auth', 'true');
      return true;
    }
    return false;
  };

  // 获取权限
  onMounted(() => {
    // 获取权限  认证过的会存在 localStorage 里
    const auth = localStorage.getItem('auth');
    if (auth) {
      isAuthentication.value = true;
    }
  });

  return {
    userChatData,
    isSmallScreen,
    isAuthentication,
    authText,
    triggerAuth,
    roomData,
    dateChatData,
    cityData,
  };
});
