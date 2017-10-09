import Vue from 'vue'
import Router from 'vue-router'
//以下是学生页面
import Student from '@/pages/student/Student'
// 1,测评模块
import StuCp from '@/pages/student/content/cp'
import StuStartEval from '@/pages/student/detail/cp/stustarteval'
// 2,个人信息设置模块
import StuSet from '@/pages/student/content/set'
import StuBasicInfo from '@/pages/student/detail/set/basicinfo'
import StuMoreInfo from '@/pages/student/detail/set/moreinfo'
// 3,脑能力评估模块
import StuNnlpg from '@/pages/student/content/nnlpg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Student,
      children:[
        {path:'/cp',component: StuCp},
        {path:'/stustarteval',component: StuStartEval},
        {path:'/nnlpg',component: StuNnlpg},
        {path:'/set',component:StuSet,
          children:[
            {path:'/set/basicinfo',component: StuBasicInfo},
            {path:'/set/moreinfo',component: StuMoreInfo},
            {path:'',component: StuBasicInfo},
          ],
        },
        {path:'',component: StuCp},
      ],
    }
  ]
})
