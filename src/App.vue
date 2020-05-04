<template>
  <div id="app">
    <!-- 头部区域 -->
    <mt-header fixed title="幻云小说"></mt-header>
    <!-- 视图区域 -->
    <router-view class="body"/>
    <!-- 底部tabbar -->
    <mt-tabbar v-model="routerSelected" fixed>
      <mt-tab-item id="/index">
        <span class="iconfont icon-index" slot="icon"></span>
        首页
      </mt-tab-item>
      <mt-tab-item id="/category">
        分类
        <span class="iconfont icon-fenlei" slot="icon"></span>
      </mt-tab-item>
      <mt-tab-item id="/explore">
        <span class="iconfont icon-faxian" slot="icon"></span>
        发现
      </mt-tab-item>
      <mt-tab-item id="/home">
        <span class="iconfont icon-user" slot="icon"></span>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 默认选择的路由是首页
      routerSelected: '/index'
    }
  },
  watch: {
    routerSelected () {
      this.$router.push(this.routerSelected)
    }
  }
}
</script>>

<style>
.mint-header {
  background-color: orangered !important;
}
.is-selected {
  color: orangered !important;
}
.body {
  margin-top: 40px;
}
</style>
