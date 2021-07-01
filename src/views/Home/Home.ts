/*
 * @Author: 庞昭昭
 * @Date: 2021-06-25 16:31:51
 * @LastEditTime: 2021-07-01 09:52:49
 * @LastEditors: 庞昭昭
 * @Description: 首页
 * @FilePath: \mini-h5\src\views\Home\Home.ts
 * 记得注释
 */
import { Search, Button, Swipe, SwipeItem } from 'vant'
import { defineComponent, ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { cartFun } from '@/common/Cart'
import { modCartLinesType } from '@/model/CartEnum'
import reqApi from '@/http/reqApi/reqApi'
import HomeInit from '@/model/HomeInit'
import Line from '@/model/Line'
import Sku from '@/model/Sku'
import TabBar from '@/components/Business/TabBar/TabBar.vue'
import TwoColumnSku from '@/components/Business/TwoColumnSku/TwoColumnSku.vue'

export default defineComponent({
  components: {
    TabBar,
    TwoColumnSku,
    [Search.name]: Search,
    [Swipe.name]: Swipe,
    [Button.name]: Button,
    [SwipeItem.name]: SwipeItem
  },
  setup() {
    const store = useStore()
    const homeData = ref<HomeInit>(new HomeInit()) // 首页初始化数据
    const searchCode = ref<string>('') // 搜索文本
    const modType = modCartLinesType // 修改商品行操作类型枚举

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

    // 获取购物车中相应商品数量
    const getCartLineNum = computed(() => (skuId: string) => {
      const lines: Line[] = store.state.cart.lines.filter((line: Line) => {
        return line.id == skuId
      })
      if (lines.length > 0) return lines[0].qty
      else return 0
    })

    const { modCartNet } = cartFun() // 购物车修改方法

    onMounted(() => {
      init()
    })

    /**
     * 首页初始化
     */
    function init() {
      reqApi.homeInit().then((res) => {
        homeData.value = res.data!
      })
    }

    /**
     * 添加购物车
     * @param sku 商品数据
     */
    function addCart(sku: Sku) {
      modCartNet(sku, modType.plus, 1)
    }

    return {
      homeData,
      searchCode,
      images,
      categoryList,
      skuList,
      getCartLineNum,
      modCartNet,
      init,
      addCart
    }
  }
})
