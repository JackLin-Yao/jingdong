<template>
  <div class="wrapper">
    <div class="search">
      <div class="search_back logo" @click="handleBackClick">&#xe677;</div>
      <div class="search_content">
        <sapn class="search_content_icon logo">&#xe668;</sapn>
        <input class="search_content_input" placeholder="请输入商品名称" />
      </div>
    </div>
    <Shopinfo :item="item" :hideBorder="true" />
    <Content />
  </div>
</template>

<script>
import Shopinfo from '../../components/Shopinfo'
import { get } from '../../utils/request.js'
import { useRouter, useRoute } from 'vue-router'
import { reactive, toRefs } from 'vue'
import Content from './Content'

const useShopInfoEffect = () => {
  const route = useRoute()
  const data = reactive({
    item: {}
  })
  const getItemData = async () => {
    const result = await get(`/api/shop/${route.params.id}`)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
    // console.log(result)
  }
  const { item } = toRefs(data)
  return { item, getItemData }
}

export default {
  name: 'Shop',
  components: { Shopinfo, Content },
  setup () {
    const router = useRouter()

    const { item, getItemData } = useShopInfoEffect()
    // const item = {}
    getItemData()
    const handleBackClick = () => {
      router.back()
    }

    return {
      item,
      handleBackClick
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0 0.18rem;
}
.search {
  margin: 0.2rem 0 0.04rem 0;
  height: 0.32rem;
  // background-color: royalblue;
  display: flex;
  &_back {
    width: 0.3rem;
    height: 0.32rem;
    // background-color: #fff;
    line-height: 0.32rem;
    font-size: 0.24rem;
    color: #b6b6b6;
  }
  &_content {
    display: flex;
    flex: 1;
    line-height: 0.32rem;
    background-color: #f5f5f5;
    border-radius: 0.16rem;
    &_icon {
      width: 0.44rem;
      line-height: 0.32rem;
      text-align: center;
      color: #bcbcbc;
      // background-color: royalblue;
    }
    &_input {
      height: 0.32rem;
      border: none;
      outline: none;
      background: none;
      display: block;
      width: 100%;
      padding-right: 0.2rem;
    }
  }
}
</style>
