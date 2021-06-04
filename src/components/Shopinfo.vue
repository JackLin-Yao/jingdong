<template>
  <div class="shop">
    <img :src="item.imgUrl" alt="" class="shop_img" />
    <div  :class="{'shop_content':true,'shop_content-bordered': hideBorder ? false : true }">
      <div class="shop_content_title">{{ item.name }}</div>
      <div class="shop_content_tags">
        <sapn class="shop_content_tag">月售：{{ item.sales }}</sapn>
        <sapn class="shop_content_tag">起送：{{ item.expressLimit }}</sapn>
        <span class="shop_content_tag">基础运费：{{ item.expressPrice }}</span>
      </div>
      <div class="shop_content_highlight">
        {{ item.slogan }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shopinfo',
  props: ['item', 'hideBorder']
}
</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';
@import '../style/mixins.scss';
.shop {
  display: flex;
  padding-top: 0.12rem;
  &_img {
    width: 0.56rem;
    height: 0.56rem;
    margin-right: 0.16rem;
  }
  &_content {
    flex: 1;
    &-bordered {
      border-bottom: 0.01rem solid $content-bgcolor;
    }
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
}
</style>
