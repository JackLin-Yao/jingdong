<template>
  <div class="content">
    <div class="category">
      <div
        :class="{
          category_item: true,
          'category_item-active': currentTab === item.tab
        }"
        v-for="item in categories"
        :key="item.name"
        @click="() => handleTabClick(item.tab)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="product">
      <div class="product_item" v-for="item in list" :key="item._id">
        <img src="item.imgUrl" alt="" class="product_item_img" />
        <div class="product_item_detail">
          <h4 class="product_item_title">{{ item.name }}</h4>
          <p class="product_item_sales">月售{{ item.sales }}件</p>
          <p class="product_item_price">
            <span class="product_item_yen">&yen;</span>{{ item.price }}
            <sapn class="product_item_origin">{{ item.oldPrice }}</sapn>
          </p>
        </div>
        <div class="product_number">
          <span class="product_number_minus">-</span>0<span
            class="product_number_plus"
            >+</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from '../../utils/request'
import { reactive, toRefs, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
const categories = [
  {
    name: '全部商品',
    tab: 'all'
  },
  {
    name: '秒杀',
    tab: 'seckill'
  },
  {
    name: '新鲜水果',
    tab: 'fruit'
  }
]
const useTabEffect = () => {
  const currentTab = ref(categories[0].tag)
  const handleTabClick = tab => {
    currentTab.value = tab
  }
  return { currentTab, handleTabClick }
}
const useCurrentListEffect = currentTab => {
  const content = reactive({ list: [] })
  const route = useRoute()
  const shopId = route.params.id
  const getContentData = async tab => {
    const result = await get(`/api/shop/${shopId}/products?tab=all`, {
      tab: currentTab.value
    })
    if (result?.errno === 0 && result?.data?.length) {
      content.list = result.data
    }
    console.log(result)
  }
  watchEffect(() => {
    getContentData()
  })
  const { list } = toRefs(content)
  return { list }
}
export default {
  name: 'Content',
  setup () {
    const { currentTab, handleTabClick } = useTabEffect()
    const { list } = useCurrentListEffect(currentTab)
    return { list, categories, handleTabClick, currentTab }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: 0.5rem;
  // background: red;
}
.category {
  width: 0.76rem;
  background: #f5f5f5;
  height: 100%;
  overflow: scroll;
  &_item {
    line-height: 0.4rem;
    text-align: center;
    font-size: 0.16rem;
    color: #333;
    &-active {
      background: #fff;
    }
  }
}
.product {
  flex: 1;
  overflow-y: scroll;
  &_item {
    position: relative;
    display: flex;
    height: 0.68rem;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid #f1f1f1;
    &_img {
      width: 0.68rem;
      height: 0.68rem;
      margin-right: 0.16rem;
    }
    &_title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #333;
    }
    &_sales {
      margin: 0.06rem 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #333;
    }
    &_price {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.12rem;
      color: #e93b3b;
    }
    &_yen {
      font-size: 0.12rem;
    }
    &_origin {
      line-height: 0.2rem;
      font-size: 0.12rem;
      color: #999;
      text-decoration: line-through;
      margin-left: 0.06rem;
    }
    .product_number {
      position: absolute;
      right: 0;
      bottom: 0;
      bottom: 0.12rem;
      &_minus,
      &_plus {
        width: 0.2rem;
        height: 0.2rem;
        display: inline-block;
        line-height: 0.2rem;
        text-align: center;
        border-radius: 50%;
        font-size: 0.2rem;
        color: #f1f1f1;
      }
      &_minus {
        border: 0.01rem solid #666;
        color: #666;
        margin-right: 0.06rem;
      }
      &_plus {
        background: #0091ff;
        margin-left: 0.06rem;
      }
    }
  }
}
</style>
