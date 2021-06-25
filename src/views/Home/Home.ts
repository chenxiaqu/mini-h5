/*
 * @Author: 庞昭昭
 * @Date: 2021-06-25 16:31:51
 * @LastEditTime: 2021-06-25 17:44:28
 * @LastEditors: 庞昭昭
 * @Description: 首页
 * @FilePath: \mini-h5\src\views\Home\Home.ts
 * 记得注释
 */
import { Options, setup, Vue } from 'vue-class-component'
import { Button, Swipe, SwipeItem } from 'vant'
import { onMounted, ref } from 'vue'

@Options({
  components: {
    [Swipe.name]: Swipe,
    [Button.name]: Button,
    [SwipeItem.name]: SwipeItem
  }
})
export default class Home extends Vue {}

function init() {}
