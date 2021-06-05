<template>
  <div class="nearby">
    <h3 class="nearby_title">附近店铺</h3>
    <!-- <div class="nearby_item" v-for="item in nearbyList" :key="item._id">
      <img :src="item.imgUrl" alt="" class="nearby_item_img" />
      <div class="nearby_content">
        <div class="nearby_content_title">{{ item.name }}</div>
        <div class="nearby_content_tags">
          <sapn class="nearby_content_tag">月售：{{ item.sales }}</sapn>
          <sapn class="nearby_content_tag">起送：{{ item.expressLimit }}</sapn>
          <span class="nearby_content_tag"
            >基础运费：{{ item.expressPrice }}</span
          >
        </div>
        <div class="nearby_content_highlight">
          {{ item.slogan }}
        </div>
      </div>
    </div> -->
    <router-link v-for="item in nearbyList" :key="item._id" :to="`/shop/${item._id}`">
      <Shopinfo :item="item"
    /></router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import Shopinfo from '../../components/Shopinfo'

const useNearbyEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data
    } else {
    }
  }
  return { nearbyList, getNearbyList }
}

export default {
  name: 'Nearby',
  components: {
    Shopinfo
  },
  setup () {
    const { nearbyList, getNearbyList } = useNearbyEffect()
    getNearbyList()
    return { nearbyList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.nearby {
  &_title {
    margin: 0.16rem 0 0.04rem 0;
    font-size: 0.18rem;
    color: $content-fontcolor;
    font-weight: normal;
  }
  &_item {
    display: flex;
    padding-top: 0.12rem;
    &_img {
      width: 0.56rem;
      height: 0.56rem;
      margin-right: 0.16rem;
    }
  }
  &_content {
    flex: 1;
    border-bottom: 0.01rem solid $content-bgcolor;
    padding-bottom: 0.12rem;
    &_title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-fontcolor;
    }
    &_tags {
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-fontcolor;
      margin-top: 0.08rem;
    }
    &_tag {
      margin-right: 0.16rem;
    }
    &_highlight {
      color: #e93b3b;
      line-height: 0.18rem;
      font-size: 0.13rem;
      margin-top: 0.08rem;
    }
  }
  a {
    text-decoration: none;
  }
}
</style>
