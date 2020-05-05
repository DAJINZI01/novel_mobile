import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { NavBar, Icon, Tabbar, TabbarItem, Swipe, SwipeItem, Empty, Card, Tag, Lazyload, List, NoticeBar, TreeSelect, Grid, GridItem } from 'vant'

Vue.use(NavBar)
Vue.use(Icon)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Empty)
Vue.use(Card)
Vue.use(Tag)
Vue.use(Lazyload)
Vue.use(List)
Vue.use(NoticeBar)
Vue.use(TreeSelect)
Vue.use(Grid)
Vue.use(GridItem)

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://192.168.101.3:5000/api/v1.0'

Vue.prototype.$http = axios

// 全局时间过滤器
Vue.filter('dateFormat', function (dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {

})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
