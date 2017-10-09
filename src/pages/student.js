import Vue from 'vue'
//引入vuex
//import store from './tools/store'
//程序入口
import App from '@/App'
//引入router路由
import router from '@/router/student.js'
// 引入ajax
import vueResource from 'vue-resource'
Vue.use(vueResource)
//引入jquery
import $ from 'jquery'
//引入MuseUI
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css' // 使用 carbon 主题
Vue.use(MuseUI)
//设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false
// 设置数据提交的方式为formData
Vue.http.options.emulateJSON = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
