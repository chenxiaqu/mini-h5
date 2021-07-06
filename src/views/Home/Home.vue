<!--
 * @Author: 庞昭昭
 * @Date: 2021-06-25 14:23:34
 * @LastEditTime: 2021-07-06 15:20:25
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
        <two-column-sku v-for="sku in skuList" :key="sku.id" :sku="sku" :badge="getCartLineNum(sku.id)" @addCart="addCart"></two-column-sku>
      </div>
    </div>
    <!-- tabbar -->
    <tab-bar></tab-bar>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>

<style lang="less" scoped>
@color-theme: #4fc08d; // 主题色;
.home {
  width: 100vw;
  background-color: #f5f5f5;
  .top-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 20vh;
    background: linear-gradient(@color-theme, rgba(0, 0, 0, 0));
  }
  .search-input {
    position: sticky;
    top: 0;
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
    }
  }
}
</style>
