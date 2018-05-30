import Vue from 'vue'
import Router from 'vue-router'
import Step1 from '@/components/Step1'
import Step2 from '@/components/Step2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'step1',
      component: Step1
    },
    {
      path: '/step2',
      name: 'step2',
      component: Step2
    }
  ]
})
