<!--
 * @Author: 庞昭昭
 * @Date: 2021-07-01 09:37:44
 * @LastEditTime: 2021-07-01 10:20:00
 * @LastEditors: 庞昭昭
 * @Description: 双栏商品
 * @FilePath: \mini-h5\src\components\Business\TwoColumnSku\TwoColumnSku.vue
 * 记得注释
-->
<template>
  <!-- 商品信息 -->
  <div class="flex_between_column sku-info">
    <!-- 商品图片 -->
    <img :src="skuData.imgUrl" />
    <!-- 商品主要信息 -->
    <div class="flex_between_column sku-info-bottom">
      <!-- 商品名称/单位 -->
      <div class="two-clamp sku-desc">{{ skuData.name }} /{{ skuData.unit }}</div>
      <div class="flex_between_row sku-info-price-add">
        <!-- 商品金额 -->
        <div class="sku-price">
          ￥
          <span class="price">{{ skuData.price }}</span>
        </div>
        <!-- 添加购物车 -->
        <div class="add-cart" @click="addCart(skuData)">
          <van-icon name="cart-o" color="#f5f5f5" :badge="lineNum" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./TwoColumnSku.ts"></script>
<style lang="less" scoped>
@color-theme: #4fc08d; // 主题色;
@bg-white: #fff; // 背景颜色-白色;
.sku-info {
  margin-bottom: 12px;
  width: 49%;
  height: 242px;
  background-color: @bg-white;
  border-radius: 2px;
  img {
    width: 100%;
    height: 168px;
    flex: 0 0 auto;
  }
  .sku-info-bottom {
    flex: 1 1 auto;
    width: 100%;
    padding: 2px 2px 6px 2px;
    box-sizing: border-box;
    .sku-desc {
      margin-bottom: 6px;
      width: 100%;
      font-size: 14px;
      text-align: left;
    }
    .sku-info-price-add {
      width: 100%;
      padding-right: 6px;
      box-sizing: border-box;
      .sku-price {
        font-size: 12px;
        .price {
          font-size: 16px;
          color: red;
        }
      }
      .add-cart {
        padding: 2px;
        background-color: @color-theme;
        border-radius: 50%;
        opacity: 0.6;
      }
    }
  }
}
.sku-info:nth-child(2n + 1) {
  margin-right: 2%;
}
</style>
