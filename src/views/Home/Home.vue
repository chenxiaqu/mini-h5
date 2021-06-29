<!--
 * @Author: 庞昭昭
 * @Date: 2021-06-25 14:23:34
 * @LastEditTime: 2021-06-29 19:41:00
 * @LastEditors: 庞昭昭
 * @Description: 首页
 * @FilePath: \mini-h5\src\views\Home\Home.vue
 * 记得注释
-->
<template>
  <div class="home">
    <!-- 顶部背景图 -->
    <div class="top-bg"></div>
    <!-- 搜索框 -->
    <van-search class="search-input" v-model="searchCode" shape="round" background="#4fc08d" placeholder="请输入搜索关键词" />
    <!-- 主体部分 -->
    <div class="main">
      <!-- 轮播图 -->
      <van-swipe :autoplay="3000" lazy-render class="home-swipe">
        <van-swipe-item v-for="image in images" :key="image">
          <img :src="image.imgUrl" />
        </van-swipe-item>
      </van-swipe>
      <!-- 金刚区 -->
      <div class="flex_row_wrap_start home-category">
        <div class="flex_center_column category-item" v-for="item in categoryList" :key="item.id">
          <div class="img-view">
            <img :src="item.imgUrl" />
          </div>
          <span class="one_clamp category-title">{{ item.title }}</span>
        </div>
      </div>
      <!-- 商品区 -->
      <div class="flex_row_wrap_start home-sku">
        <div class="flex_between_column sku-info" v-for="sku in skuList" :key="sku.id">
          <img :src="sku.imgUrl" />
          <div class="flex_between_column sku-info-bottom">
            <div class="two-clamp sku-desc">{{ sku.name }} /{{ sku.unit }}</div>
            <div class="flex_between_row sku-info-price-add">
              <div class="sku-price">
                ￥
                <span class="price">{{ sku.price }}</span>
              </div>
              <div class="add-cart">
                <van-icon name="cart-o" color="#1989fa" :badge="8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- tabbar -->
    <van-tabbar v-model="activeTab" :placeholder="true" active-color="#4fc08d" @change="onActiveTabChange">
      <van-tabbar-item name="home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item name="category" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item name="cart" icon="shopping-cart-o" :badge="5">购物车</van-tabbar-item>
      <van-tabbar-item name="mine" icon="user-o" :dot="true">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>

<style lang="less" scoped>
.home {
  width: 100vw;
  .top-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 20vh;
    background: linear-gradient(#4fc08d, rgba(0, 0, 0, 0));
  }
  .search-input {
    position: relative;
    z-index: 100;
  }
  .main {
    width: 100vw;
    padding: 0 24px;
    box-sizing: border-box;
    .home-swipe {
      margin: 20px auto;
      width: 100%;
      height: 20vh;
    }
    .home-category {
      margin-top: 20px;
      width: 100%;
      .category-item {
        margin-bottom: 20px;
        padding: 0 4px;
        width: 20%;
        height: 72px;
        box-sizing: border-box;
        .img-view {
          width: 100%;
          height: 52px;
        }
        .category-title {
          flex: 0 0 auto;
          margin-top: 4px;
          height: 16px;
          line-height: 16px;
          font-size: 12px;
          color: #535050;
        }
      }
    }
    .home-sku {
      width: 100%;
      .sku-info {
        margin-bottom: 12px;
        width: 49%;
        height: 228px;
        border-radius: 8px;
        img {
          width: 100%;
          height: 168px;
          flex: 0 0 auto;
        }
        .sku-info-bottom {
          flex: 1 1 auto;
          width: 100%;
          padding: 2px;
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
              // background-color: @color-theme;
            }
          }
        }
      }
      .sku-info:nth-child(2n + 1) {
        margin-right: 2%;
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
