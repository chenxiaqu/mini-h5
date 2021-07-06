/*
 * @Author: 庞昭昭
 * @Date: 2021-06-30 17:38:30
 * @LastEditTime: 2021-07-06 15:27:35
 * @LastEditors: 庞昭昭
 * @Description: 底部tabbar
 * @FilePath: \mini-h5\src\components\Business\TabBar\TabBar.ts
 * 记得注释
 */

import { computed, defineComponent, onMounted, ref } from 'vue'
import { Tabbar, TabbarItem } from 'vant'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

enum Tabs {
  Home = 'Home',
  Category = 'Category',
  Cart = 'Cart',
  Mine = 'Mine'
}

export default defineComponent({
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const tabBarName = Tabs // tabbar的Name
    const activeTab = ref<string>('') // 选中的tab项

    // 获取购物车而中勾选总量
    const cartLinesSelectQtySum = computed(() => {
      return store.getters.cartLinesSelectQtySum
    })

    onMounted(() => {
      // 切换tab状态
      activeTab.value = route.name as string
    })

    /**
     * tabbar标签切换
     * @param active 选中的tabbar
     */
    function onActiveTabChange(active: string) {
      // 跳转相关路由
      router.push(`/${active}`)
    }

    return {
      activeTab,
      tabBarName,
      cartLinesSelectQtySum,
      onActiveTabChange
    }
  }
})
