<!--
 * @Author: 庞昭昭
 * @Date: 2021-06-25 14:23:34
 * @LastEditTime: 2021-06-30 15:45:14
 * @LastEditors: 庞昭昭
 * @Description: 
 * @FilePath: \mini-h5\src\App.vue
 * 记得注释
-->
<template>
  <router-view />
</template>
<script lang="ts">
import { onMounted } from 'vue'
import User from './model/User'
import { useStore } from 'vuex'
export default {
  setup() {
    onMounted(() => {
      const userInfo = new User()
      userInfo.userName = '小机灵'
      userInfo.userTel = '18302266896'
      userInfo.uuid = 'qaq20210630878ext'
      userInfo.sex = '男'
      userInfo.memberId = 'vue3000001'
      userInfo.normalMember = 'normal000001'
      userInfo.vipMember = 'vip000001'
      useStore().dispatch('setUserInfo', userInfo)
    })
    return {}
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
