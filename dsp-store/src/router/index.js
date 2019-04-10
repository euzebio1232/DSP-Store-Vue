import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import cadastro from '@/components/cadastro'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/cadastro',
      name: 'cadastro',
      component: cadastro
    },

  ]
})
