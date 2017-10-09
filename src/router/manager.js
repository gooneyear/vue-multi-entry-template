import Vue from 'vue'
import Router from 'vue-router'
//以下是管理员页面
import Manager from '@/pages/manager/Manager'
import Jsgl from '@/pages/manager/jsgl'
import Xsgl from '@/pages/manager/xsgl'
import Cpgl from '@/pages/manager/cpgl'
import Xxgl from '@/pages/manager/xxgl'
import Xtgl from '@/pages/manager/xtgl'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Manager,
      children:[
        {path:'/jsgl',component: Jsgl},
        {path:'/xsgl',component: Xsgl},
        {path:'/cpgl',component: Cpgl},
        {path:'/xxgl',component: Xxgl},
        {path:'/xtgl',component: Xtgl},
        {path:'',component: Jsgl},
      ],
    },
  ]
})
