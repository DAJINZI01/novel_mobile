<template>
  <div class="index">
    我是首页
    <!-- 幻灯片 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style>
</style>
