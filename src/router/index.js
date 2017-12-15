import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import monitor from '@/view/monitor'
import security from '@/view/security'
import map from '@/view/map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      props: true
    },

    {
      path: '/monitor',
      component: monitor,
      props: true
    },

    {
      path: '/map',
      component: map,
      props: true
    },

    {
      path: '/security',
      component: security,
      props: true
    }
  ]
})
