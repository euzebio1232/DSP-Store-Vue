import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import cadastro from '@/components/cadastro'
import login from '@/components/login'
import cadastroProdutos from '@/components/cadastroProdutos'
import produtos from '@/components/produtos'
import teste from '@/components/teste'
import card from '@/components/card'
import cardItem from '@/components/cardItem'
import carrinho from '@/components/carrinho'
import pedido from '@/components/pedido'

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
    },

    {
      path: '/teste',
      name: 'teste',
      component: teste
    },

    {
      path: '/card',
      name: 'card',
      component: card
    },

    {
      path: '/cardItem/:id',
      name: 'cardItem',
      component: cardItem
    },

    {
      path: '/carrinho/:id',
      name: 'carrinho',
      component: carrinho
    },

    {
      path: '/pedido/:id',
      name: 'pedido',
      component: pedido
    },

  ]
})
