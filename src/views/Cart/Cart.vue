<!--
 * @Author: 庞昭昭
 * @Date: 2021-06-30 18:53:54
 * @LastEditTime: 2021-07-06 17:54:07
 * @LastEditors: 庞昭昭
 * @Description: 购物车
 * @FilePath: \mini-h5\src\views\Cart\Cart.vue
 * 记得注释
-->
<template>
  <div class="cart">
    <sku-card v-for="line in cartLines" :key="line.code" :sku="line" @doDelete="doDelete"></sku-card>
    <!-- 提交订单栏 -->
    <van-submit-bar class="submit-bar" :price="realAmount" :disabled="!canSubmit" button-text="提交订单" @submit="doSubmit">
      <!-- <van-checkbox v-model="checked">全选</van-checkbox> -->
      <!-- <template #tip>
        你的收货地址不支持同城送,
        <span @click="onClickLink">修改地址</span>
      </template> -->
    </van-submit-bar>
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
  .submit-bar {
    bottom: 50px;
  }
}
</style>
