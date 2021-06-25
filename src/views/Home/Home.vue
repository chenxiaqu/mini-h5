<!--
 * @Author: 庞昭昭
 * @Date: 2021-06-25 14:23:34
 * @LastEditTime: 2021-06-25 17:38:56
 * @LastEditors: 庞昭昭
 * @Description: 首页
 * @FilePath: \mini-h5\src\views\Home\Home.vue
 * 记得注释
-->
<template>
  <div class="home">
    <div class="header flex_start_row">{{ aaa }}</div>
    <van-swipe :autoplay="3000" lazy-render class="home-swipe">
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>

<style lang="less" scoped>
.home {
  width: 100vw;
  .header {
  }
  .home-swipe {
    margin: 20px auto;
    width: 80vw;
    height: 220px;
  }
}
</style>
