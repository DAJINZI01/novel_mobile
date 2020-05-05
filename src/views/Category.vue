<template>
  <div class="category">
    <!-- <van-empty description="分类" /> -->
    <van-tree-select
      :items="treeSelectItems"
      :active-id.sync="categoryId"
      :main-active-index.sync="activeIndex"
      height="560"
    />
  </div>
</template>

<script>
export default {
  name: 'Category',
  data() {
    return {
      // 分类列表数据
      categoryList: [],
      // 树形选择数据
      treeSelectItems: [],
      categoryId: 0,
      activeIndex: 0
    }
  },
  created() {
    // 获取分类列表
    this.getCategoryList()
  },
  methods: {
    // 获取分类列表
    async getCategoryList() {
      const { data: res } = await this.$http.get('/category')
      if (res.meta.code !== 200) return this.$toast('获取分类列表失败')
      this.categoryList = res.data
      // 转化为组件所需要的树形结构的数据
      this.generateTreeSelectItems(this.categoryList, this.treeSelectItems)
    },
    // 将分类列表转换为树形结构所需要的数据
    generateTreeSelectItems(data, treeSelectItems) {
      data.forEach(item => {
        const children = []
        this.generateTreeSelectItems(item.child_category_list, children)
        const treeItem = {
          // 导航名称
          text: item.name,
          // id，作为匹配选中状态的标识符
          id: item.id,
          // 导航名称右上角徽标，2.5.6 版本开始支持
          // badge: 3,
          // 是否在导航名称右上角显示小红点
          // dot: true,
          // 导航节点额外类名
          // className: 'my-class',
          // 该导航下所有的可选项
          children
        }
        treeSelectItems.push(treeItem)
      })
    }
  }
}
</script>

<style>
</style>
