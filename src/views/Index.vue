<template>
  <div class="index">
    <!-- 幻灯片 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!-- 通知栏  -->
    <van-notice-bar
      color="#1989fa"
      background="#ecf9ff"
      left-icon="info-o"
      mode="closeable"
    >{{ noticeInfo }}</van-notice-bar>
    <!-- 九宫格 -->
    <van-grid :gutter="10">
      <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
    </van-grid>
    <!-- 列表显示 -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getMoreBooks">
      <router-link
        :to="{name: 'BookInfo', params: { id: book.id }}"
        v-for="book in bookList"
        :key="book.id"
      >
        <van-card
          :desc="book.description"
          :thumb="bookCoverHost + book.cover_url"
          :lazy-load="true"
          centered
        >
          <template #title>
            <span>{{ book.name }}</span>
            <van-tag plain>{{ book.author }}</van-tag>
          </template>
          <template #tags>
            <van-tag
              plain
              type="danger"
              v-for="label in book.labels"
              :key="label.id"
            >{{ label.name }}</van-tag>
          </template>
          <template #footer>
            <span>更新时间: {{ book.update_time }}</span>
            <span>点击量: {{ book.total_click }}</span>
          </template>
        </van-card>
      </router-link>
    </van-list>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      // 获取小说列表的查询参数
      bookListParams: {
        category_id: null,
        page: 1,
        per_page: 10
      },
      // 小说列表
      bookList: [],
      // 数据是否加载完毕
      allLoaded: false,
      // 小说封面图片域名
      bookCoverHost: 'http://192.168.101.3:5000/static/upload/images/book',
      // 是否处于加载中
      loading: false,
      // 是否没有数据了
      finished: false,
      // 通知内容
      noticeInfo: '通知内容，本站上线第n天，欢迎大家点击访问。'
    }
  },
  created() {
    // 获取小说列表
    this.getBookList()
  },
  methods: {
    async getBookList() {
      const { data: res } = await this.$http.get('/book', {
        params: this.bookListParams
      })
      if (res.meta.code !== 200) return this.$toast('获取小说列表失败')
      this.bookList = this.bookList.concat(res.data.book_list)
      // 是否没有数据了
      this.finished = res.data.book_list.length === 0
    },
    // 刷新小说列表
    refreshBookList() {
      this.getBookList()
      // 加载数据后需要对组件进行一些重新定位的操作
      this.$refs.loadmore.onTopLoaded()
    },
    // 下拉获取更多
    getMoreBooks() {
      this.bookListParams.page += 1
      this.getBookList()
      this.loading = false // 表示加载完成
    }
  }
}
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.van-card__footer {
  display: flex;
  justify-content: space-between;
}
.van-card__footer span {
  color: #2c82c5;
}
</style>
