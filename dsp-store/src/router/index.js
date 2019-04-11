import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import cadastro from '@/components/cadastro'
import login from '@/components/login'
import cadastroProdutos from '@/components/cadastroProdutos'
import produtos from '@/components/produtos'

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

    {
      path: '/login',
      name: 'login',
      component: login
    },

    {
      path: '/cadastroProdutos',
      name: 'cadastroProdutos',
      component: cadastroProdutos
    },

    {
      path: '/produtos/:categoria',
      name: 'produtos',
      component: produtos
    },

    {
      path: '/produtos',
      name: 'produtos',
      component: produtos
    }

  ]
})
