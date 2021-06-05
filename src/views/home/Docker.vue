<template>
  <div class="docker">
    <div
      v-for="(item, index) in dockerList"
      :key="item.icon"
      class="docker_item "
      :class="{ docker_item: true, 'docker_item-active': index === 0 }"
    >
      <div class="logo" v-html="item.icon" />
      <div class="docker_title">{{ item.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xea85;', text: '首页' },
      { icon: '&#xe610;', text: '购物车' },
      { icon: '&#xe663;', text: '订单' },
      { icon: '&#xe763;', text: '我的' }
    ]
    return { dockerList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.docker {
  box-sizing: border-box;
  display: flex;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid #f1f1f1;
  // background-color: blue;
}
.docker_item {
  flex: 1;
  text-align: center;
  .logo {
    margin-top: 0.07rem 0 0.02rem 0;
    font-size: 0.18rem;
  }
}
.docker_item-active {
  color: #1fa4fc;
}
.docker_title {
  font-size: 0.1rempx;
  transform: scale(0.5 0.5);
  transform-origin: center top;
}
</style>
