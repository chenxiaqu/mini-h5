/*
 * @Author: 庞昭昭
 * @Date: 2021-06-25 16:31:51
 * @LastEditTime: 2021-06-29 11:55:17
 * @LastEditors: 庞昭昭
 * @Description: 首页
 * @FilePath: \mini-h5\src\views\Home\Home.ts
 * 记得注释
 */
import { Search, Button, Swipe, SwipeItem, Icon, Tabbar, TabbarItem } from 'vant'
import { defineComponent, ref, computed, onMounted } from 'vue'
import reqApi from '@/http/reqApi/reqApi'
import HomeInit from '@/model/HomeInit'

export default defineComponent({
  components: {
    [Search.name]: Search,
    [Swipe.name]: Swipe,
    [Button.name]: Button,
    [SwipeItem.name]: SwipeItem,
    [Icon.name]: Icon,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  setup() {
    const homeData = ref<HomeInit>(new HomeInit())
    const searchCode = ref<string>('')
    const activeTab = ref<number | string>('home')

    // 轮播图
    const images = computed(() => {
      return homeData.value.swiperImgUrl
    })
    // 金刚区数据
    const categoryList = computed(() => {
      return homeData.value.category
    })
    // 商品数据
    const skuList = computed(() => {
      return homeData.value.skuList
    })

    onMounted(() => {
      init()
    })

    // 首页初始化
    function init() {
      reqApi.homeInit().then((res) => {
        homeData.value = res.data!
      })
    }

    /**
     * tabbar标签切换
     * @param active 选中的tabbar
     */
    function onActiveTabChange(active: number | string) {
      activeTab.value = active
    }

    return {
      homeData,
      searchCode,
      activeTab,
      images,
      categoryList,
      skuList,
      onActiveTabChange
    }
  }
})
