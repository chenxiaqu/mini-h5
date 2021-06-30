/*
 * @Author: 庞昭昭
 * @Date: 2021-06-30 17:38:30
 * @LastEditTime: 2021-06-30 17:45:32
 * @LastEditors: 庞昭昭
 * @Description: 底部tabbar
 * @FilePath: \mini-h5\src\views\components\TabBar\TabBar.ts
 * 记得注释
 */

import { computed, defineComponent, ref } from 'vue'
import { Tabbar, TabbarItem } from 'vant'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  setup() {
    const store = useStore()
    const activeTab = ref<number | string>('home') // 选中的tab项

    // 获取购物车而中勾选总量
    const cartLinesSelectQtySum = computed(() => {
      return store.getters.cartLinesSelectQtySum
    })

    /**
     * tabbar标签切换
     * @param active 选中的tabbar
     */
    function onActiveTabChange(active: number | string) {
      activeTab.value = active
    }

    return {
      activeTab,
      cartLinesSelectQtySum,
      onActiveTabChange
    }
  }
})
