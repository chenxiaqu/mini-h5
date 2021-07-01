/*
 * @Author: 庞昭昭
 * @Date: 2021-07-01 09:41:10
 * @LastEditTime: 2021-07-01 10:19:53
 * @LastEditors: 庞昭昭
 * @Description: 双栏商品
 * @FilePath: \mini-h5\src\components\Business\TwoColumnSku\TwoColumnSku.ts
 * 记得注释
 */

import { computed, defineComponent } from 'vue'
import { Icon } from 'vant'
import Sku from '@/model/Sku'
export default defineComponent({
  components: {
    [Icon.name]: Icon
  },
  emits: ['addCart'],
  props: {
    // 商品列表
    sku: {
      type: Object,
      default: () => {
        return new Sku()
      }
    },
    // 购物车该商品数量
    badge: {
      type: Number,
      default: () => {
        return 0
      }
    }
  },
  setup(props: any, { emit }) {
    // 商品列表
    const skuData = computed(() => {
      return props.sku
    })

    // 购物车该商品数量
    const lineNum = computed(() => {
      return props.badge
    })

    /**
     * 添加购物车
     * @param sku 商品数据
     */
    function addCart(sku: Sku) {
      emit('addCart', sku)
    }

    return { skuData, lineNum, addCart }
  }
})
