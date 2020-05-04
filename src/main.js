import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Cell, Swipe, SwipeItem, Header, Tabbar, TabItem } from 'mint-ui'

import 'mint-ui/lib/style.css'
import './assets/font/iconfont.css'

Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Header.name, Header)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
