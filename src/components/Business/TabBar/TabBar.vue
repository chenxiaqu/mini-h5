<!--
 * @Author: 庞昭昭
 * @Date: 2021-06-30 17:38:04
 * @LastEditTime: 2021-07-06 15:25:51
 * @LastEditors: 庞昭昭
 * @Description: 底部tabbar
 * @FilePath: \mini-h5\src\components\Business\TabBar\TabBar.vue
 * 记得注释
-->
<template>
  <van-tabbar v-model="activeTab" :placeholder="true" active-color="#4fc08d" @change="onActiveTabChange">
    <van-tabbar-item :name="tabBarName.Home" icon="wap-home-o">首页</van-tabbar-item>
    <van-tabbar-item :name="tabBarName.Category" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item :name="tabBarName.Cart" icon="shopping-cart-o" :badge="cartLinesSelectQtySum">购物车</van-tabbar-item>
    <van-tabbar-item :name="tabBarName.Mine" icon="user-o" :dot="true">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script lang="ts" src="./TabBar.ts"></script>
