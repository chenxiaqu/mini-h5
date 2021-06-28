/*
 * @Author: 庞昭昭
 * @Date: 2021-06-25 16:31:51
 * @LastEditTime: 2021-06-28 17:51:59
 * @LastEditors: 庞昭昭
 * @Description: 首页
 * @FilePath: \mini-h5\src\views\Home\Home.ts
 * 记得注释
 */
import { Options, setup, Vue } from 'vue-class-component'
import { Search, Button, Swipe, SwipeItem } from 'vant'
import { reactive } from 'vue'
import reqApi from '@/http/reqApi/reqApi'
import HomeInit from '@/model/HomeInit'

@Options({
  components: {
    [Search.name]: Search,
    [Swipe.name]: Swipe,
    [Button.name]: Button,
    [SwipeItem.name]: SwipeItem
  }
})
export default class Home extends Vue {
  searchCode: string = ''
  homeInit = setup(() => init())

  // 轮播图
  get images() {
    return this.homeInit.homeData.swiperImgUrl
  }

  // 金刚区数据
  get categoryList() {
    debugger
    return this.homeInit.homeData.category
  }

  // 商品数据
  get sku() {
    return this.homeInit.homeData.skuList
  }
}

function init() {
  let homeData = reactive<HomeInit>(new HomeInit())
  reqApi.homeInit().then((res) => {
    homeData = res.data!
  })
  return { homeData }
}
