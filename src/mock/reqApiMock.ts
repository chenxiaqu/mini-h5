/*
 * @Author: 庞昭昭
 * @Date: 2021-06-28 16:35:45
 * @LastEditTime: 2021-06-29 11:20:09
 * @LastEditors: 庞昭昭
 * @Description: reqApi的mock数据
 * @FilePath: \mini-h5\src\mock\reqApiMock.ts
 * 记得注释
 */
import BaseResponse from '@/model/BaseResponse'
import HomeInit from '@/model/HomeInit'

export default class reqApiMock {
  static getSuccessResp(Random: any, data: any): BaseResponse<any> {
    const resp = new BaseResponse()
    resp.code = 200
    resp.data = data
    resp.fields = '你嘿嘿嘿嘿嘿'
    resp.more = true
    resp.msg = '事实上事实上'
    resp.success = true
    resp.total = Random.natural(60, 100)
    return resp
  }

  static HomeInit(Random: any): BaseResponse<HomeInit> {
    const resp: BaseResponse<HomeInit> = reqApiMock.getSuccessResp(Random, new HomeInit())
    resp.data!.swiperImgUrl = [
      {
        imgUrl: 'https://img2.baidu.com/it/u=3566088443,3713209594&fm=26&fmt=auto&gp=0.jpg',
        url: 'https://img2.baidu.com/it/u=3566088443,3713209594&fm=26&fmt=auto&gp=0.jpg',
        name: '美滋滋'
      },
      {
        imgUrl: 'https://img0.baidu.com/it/u=1904359974,2894644924&fm=11&fmt=auto&gp=0.jpg',
        url: 'https://img0.baidu.com/it/u=1904359974,2894644924&fm=11&fmt=auto&gp=0.jpg',
        name: '笑呵呵'
      },
      {
        imgUrl: 'https://img0.baidu.com/it/u=1838988081,2167427448&fm=26&fmt=auto&gp=0.jpg',
        url: 'https://img0.baidu.com/it/u=1838988081,2167427448&fm=26&fmt=auto&gp=0.jpg',
        name: '所言极是'
      }
    ]
    for (let i = 0; i < 10; i++) {
      if (i % 2 == 0) {
        resp.data!.category.push({
          // 名称
          title: Random.ctitle(2, 6),
          // 图片地址
          imgUrl: 'https://img0.baidu.com/it/u=1904359974,2894644924&fm=11&fmt=auto&gp=0.jpg',
          // 类型
          type: 'external',
          // 内部页面
          targetPage: '',
          // 跳转外部地址
          url: 'https://img0.baidu.com/it/u=1904359974,2894644924&fm=11&fmt=auto&gp=0.jpg',
          // 外部页面携带的参数
          params: {
            word: Random.cparagraph(10, 15)
          }
        })
      } else {
        resp.data!.category.push({
          // 名称
          title: Random.ctitle(2, 6),
          // 图片地址
          imgUrl: 'https://img0.baidu.com/it/u=1838988081,2167427448&fm=26&fmt=auto&gp=0.jpg',
          // 类型
          type: 'interior',
          // 内部页面
          targetPage: 'category',
          // 跳转外部地址
          url: '',
          // 外部页面携带的参数
          params: null
        })
      }
    }
    for (let i = 0; i < 10; i++) {
      const price = Random.float(1, 10000, 2, 2)
      const promotPrice = Random.float(price / 2, price, 2, 2)
      resp.data!.skuList.push({
        // 商品名称
        name: Random.ctitle(2, 10),
        // 商品id
        id: Random.integer(1, 99999),
        // 商品Code
        code: Random.integer(1000, 99999),
        // 商品展示图片
        imgUrl: 'https://img2.baidu.com/it/u=3566088443,3713209594&fm=26&fmt=auto&gp=0.jpg',
        // 商品展示轮播图
        imgList: [
          'https://img2.baidu.com/it/u=3566088443,3713209594&fm=26&fmt=auto&gp=0.jpg',
          'https://img0.baidu.com/it/u=1904359974,2894644924&fm=11&fmt=auto&gp=0.jpg',
          'https://img0.baidu.com/it/u=1838988081,2167427448&fm=26&fmt=auto&gp=0.jpg'
        ],
        // 商品原价
        price: price,
        // 促销价
        promotPrice: promotPrice,
        // 商品单位
        unit: Random.string('件个箱台瓶袋', 1, 1),
        // 商品总数
        count: Random.integer(50, 100),
        // 商品剩余数量
        existing: Random.integer(0, 50),
        // 商品描述
        desc: Random.cparagraph(10, 15)
      })
    }
    return resp
  }
}
