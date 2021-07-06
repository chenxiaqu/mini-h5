/*
 * @Author: 庞昭昭
 * @Date: 2021-07-06 15:48:03
 * @LastEditTime: 2021-07-06 17:54:37
 * @LastEditors: 庞昭昭
 * @Description: 购物车商品卡片
 * @FilePath: \mini-h5\src\views\Cart\cmp\SkuCard.ts
 * 记得注释
 */
import { computed, defineComponent, onMounted, reactive, ref } from 'vue'
import { SwipeCell, Card, Button } from 'vant'
import Line from '@/model/Line'
export default defineComponent({
  components: {
    [SwipeCell.name]: SwipeCell,
    [Card.name]: Card,
    [Button.name]: Button
  },
  props: {
    sku: {
      type: Object,
      default: () => {
        return new Line()
      }
    }
  },
  setup(props, ctx) {
    const skuData = reactive<Line>(props.sku as Line) // 商品数据
    // 商品标题
    const skuTitle = computed(() => {
      return `${skuData.name} /${skuData.unit}`
    })

    // 删除商品
    function doDelete() {
      ctx.emit('doDelete', skuData.id)
    }
    return {
      props,
      skuData,
      skuTitle,
      doDelete
    }
  }
})
