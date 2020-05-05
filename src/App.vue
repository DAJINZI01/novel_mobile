<template>
  <div id="app">
    <!-- 头部区域 -->
    <van-nav-bar title="turb novel" placeholder fixed>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <!-- 视图区域 -->
    <!-- <transition name="slide-fade" mode="out-in"><router-view /></transition> -->
    <router-view />
    <!-- 底部tabbar -->
    <van-tabbar v-model="active" active-color="orange" inactive-color="#000" route placeholder>
      <van-tabbar-item replace to="/index" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/category" icon="label-o">分类</van-tabbar-item>
      <van-tabbar-item replace to="/explore" icon="search">发现</van-tabbar-item>
      <van-tabbar-item replace to="/home" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 默认选择的路由是首页
      active: '/index'
    }
  }
}
</script>>

<style lang="less">
#app {
  // overflow-x: hidden;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter {
  transform: translateX(100%);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
