<template>
  <div>
    <div class="position">
      <span class="logo position_icon">&#xe64f;</span
      >北京理工大学国防科技园2号楼10层<span class="logo position_notice"
        >&#xe860;</span
      >
    </div>
    <div class="search">
      <div class="logo">&#xe668;</div>
      请输入商品名称
    </div>
    <div class="banner">
      <img
        class="banner_img"
        src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
      />
    </div>
    <div class="icons">
      <div class="icons_item" v-for="item in iconsList" :key="item.desc">
        <img
           :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"
          class="icons_item_img"
        />
        <p class="icons_item_desc">{{ item.desc }}</p>
      </div>
    </div>
    <div class="gap"></div>
  </div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup() {
    const iconsList = [
      { imgName: '超市', desc: '超市便利' },
      { imgName: '菜市场', desc: '菜市场' },
      { imgName: '水果店', desc: '水果店' },
      { imgName: '鲜花', desc: '鲜花绿植' },
      { imgName: '医药健康', desc: '医药健康' },
      { imgName: '家居', desc: '家居时尚' },
      { imgName: '蛋糕', desc: '烘培蛋糕' },
      { imgName: '签到', desc: '签到' },
      { imgName: '大牌免运', desc: '大牌免运' },
      { imgName: '红包', desc: '红包套餐' }
    ]
    return { iconsList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.position {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.position .position_icon {
  font-size: 0.2rem;
  position: relative;
  top: 0.015rem;
  margin-right: 0.06rem;
}
.position .position_notice {
  position: absolute;
  right: 0;
  top: 0.17rem;
  font-size: 0.2rem;
}
.search {
  line-height: 0.32rem;
  background-color: #f5f5f5;
  color: #b7b7b7;
  border-radius: 0.16rem;
  font-size: 0.14rem;
}
.search .logo {
  display: inline-block;
  font-size: 0.2rem;
  position: relative;
  top: 0.01rem;
  margin: 0 0.08rem 0 0.08rem;
  color: #b7b7;
  line-height: 0.32rem;
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  // background-color: royalblue;
}
.banner .banner_img {
  width: 100%;
  margin-top: 0.05rem;
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &_item {
    width: 20%;
    &_img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &_desc {
      text-align: center;
      margin: 0.06rem 0 0.16rem 0;
      color: $content-fontcolor;
    }
  }
}
.gap {
  height: 0.1rem;
  margin: 0 -0.18rem 0 -0.18rem;
  background-color: $content-bgcolor;
}
</style>
