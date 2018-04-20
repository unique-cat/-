import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import HotSell from '@/pages/HotSell'
import Meat from '@/pages/Meat'
import Member from '@/pages/Member'
import NewProduct from '@/pages/NewProduct'
import Product from '@/pages/Product'
import SpicyStrip from '@/pages/SpicyStrip'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/hotSell',
      name: 'hotSell',
      component: HotSell
    },
    {
      path: '/meat',
      name: 'meat',
      component: Meat
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/newProduct',
      name: 'newProduct',
      component: NewProduct
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/spicyStrip',
      name: 'spicyStrip',
      component: SpicyStrip
    }
  ]
})
