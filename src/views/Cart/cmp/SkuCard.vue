<!--
 * @Author: 庞昭昭
 * @Date: 2021-07-06 15:47:39
 * @LastEditTime: 2021-07-06 17:41:42
 * @LastEditors: 庞昭昭
 * @Description: 购物车商品卡片
 * @FilePath: \mini-h5\src\views\Cart\cmp\SkuCard.vue
 * 记得注释
-->
<template>
  <van-swipe-cell class="sku-card">
    <van-card
      :num="skuData.qty"
      :price="skuData.promotPrice"
      :origin-price="skuData.price"
      :desc="skuData.desc"
      :title="skuTitle"
      :thumb="skuData.imgUrl"
    />
    <template #right>
      <van-button square text="删除" type="danger" class="delete-button" @click="doDelete" />
    </template>
  </van-swipe-cell>
</template>
<script lang="ts" src="./SkuCard.ts"></script>
<style lang="less" scoped>
@bg-white: #fff;
.sku-card {
  background-color: @bg-white;
  .delete-button {
    height: 100%;
  }
}
</style>
