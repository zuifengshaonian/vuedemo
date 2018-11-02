import Vue from 'vue'
import Router from 'vue-router'
import RightBar from '@/components/RightBar'
import Pos from '@/views/pos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RightBar',
      component: RightBar
    },{
      path:'/pos',
      name:'Pos',
      component:Pos
    }
  ]
})
