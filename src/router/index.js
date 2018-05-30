import Vue from 'vue'
import Router from 'vue-router'
import Step1 from '@/components/Step1'
import Step2 from '@/components/Step2'
import TargetCard from '@/components/TargetCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Step1',
      component: Step1
    },
    {
      path: '/Step2',
      name: 'Step2',
      component: Step2
    },
    {
      path: '/TargetCard',
      name: 'TargetCard',
      component: TargetCard
    }
  ]
})
