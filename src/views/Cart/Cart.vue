<!--
 * @Author: 庞昭昭
 * @Date: 2021-06-30 18:53:54
 * @LastEditTime: 2021-07-07 14:45:21
 * @LastEditors: 庞昭昭
 * @Description: 购物车
 * @FilePath: \mini-h5\src\views\Cart\Cart.vue
 * 记得注释
-->
<template>
  <div class="cart">
    <div v-if="cartLines.length == 0" class="empty-cart flex_center_column">
      <img class="empty-img" :src="emptyCartImg" />
      <div class="empty-desc">首页也是假的，去了也没用啊</div>
      <van-button class="browse-button" plain round type="success" @click="doBrowse">去首页逛逛吧</van-button>
    </div>
    <div v-else>
      <sku-card v-for="line in cartLines" :key="line.code" :sku="line" @doDelete="doDelete"></sku-card>
      <!-- 提交订单栏 -->
      <van-submit-bar class="submit-bar" :price="realAmount" :disabled="!canSubmit" button-text="提交订单" @submit="doSubmit">
        <!-- <van-checkbox v-model="checked">全选</van-checkbox> -->
      </van-submit-bar>
    </div>
    <!-- tabbar -->
    <tab-bar></tab-bar>
  </div>
</template>
<script lang="ts" src="./Cart.ts"></script>
<style lang="less" scoped>
.cart {
  padding: 20px 0;
  min-height: 100vh;
  background-color: #f5f5f5;
  box-sizing: border-box;
  .empty-cart {
    width: 100vw;
    height: calc(100vh - 100px);
    .empty-img {
      width: 70vw;
      height: 50vw;
    }
    .empty-desc {
      margin: 16px 0;
      font-size: 14px;
      color: #666;
    }
  }
  .submit-bar {
    bottom: 50px;
  }
}
</style>
