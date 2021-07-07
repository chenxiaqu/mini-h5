<!--
 * @Author: 庞昭昭
 * @Date: 2021-07-07 14:45:59
 * @LastEditTime: 2021-07-07 14:51:32
 * @LastEditors: 庞昭昭
 * @Description: 分类
 * @FilePath: \mini-h5\src\views\Category\Category.vue
 * 记得注释
-->
<template>
  <div class="category flex_center_row">
    <span class="empty">我的页面，它也啥都没有</span>
    <!-- tabbar -->
    <tab-bar></tab-bar>
  </div>
</template>
<script lang="ts" src="./Category.ts"></script>
<style lang="less" scoped>
.category {
  .empty {
    margin: 16px 0;
    font-size: 18px;
    color: #666;
  }
}
</style>
