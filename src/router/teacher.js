import Vue from 'vue'
import Router from 'vue-router'
//以下是老师页面
import Teacher from '@/pages/teacher/Teacher'
import TeacXsgl from '@/pages/teacher/right/teacxsgl'
import TeacCpgl from '@/pages/teacher/right/teaccpgl'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Teacher,
      children:[
        {path:'/teacxsgl',component: TeacXsgl},
        {path:'/teaccpgl',component: TeacCpgl},
        {path:'',component: TeacXsgl},
      ],
    }
  ]
})
