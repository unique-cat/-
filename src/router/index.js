import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import HotSell from '@/pages/HotSell'
import Meat from '@/pages/Meat'
import Member from '@/pages/Member'
import NewProduct from '@/pages/NewProduct'
import Product from '@/pages/Product'
import SpicyStrip from '@/pages/SpicyStrip'
import ProductDetail from '@/pages/ProductDetail'

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
      component: HotSell,
      redirect:'product'
    },
    {
      path: '/meat',
      name: 'meat',
      component: Meat,
      redirect:'product'
    },
    {
      path: '/member',
      name: 'member',
      component: Member,
      redirect:'product'
    },
    {
      path: '/newProduct',
      name: 'newProduct',
      component: NewProduct,
      redirect:'product'
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/spicyStrip',
      name: 'spicyStrip',
      component: SpicyStrip,
      redirect:'product'
    },
    {
      path: '/productDetail',
      name: 'productDetail',
      component: ProductDetail,
    }
  ]
})
