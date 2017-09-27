import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import todayIncome from '@/components/todayIncome/index'
import available from '@/components/available/index'
import general from '@/components/general/index'
import stayAccount from '@/components/stayAccount/index'
import withdrawCash from '@/components/withdrawCash/index'
import bankCard from '@/components/bankcard/index'
import comList from '@/components/bankcard/comList'
import perList from '@/components/bankcard/perList'
import myShop from '@/components/myShop/index'
import offShelves from '@/components/myShop/offShelves'
import onsell from '@/components/myShop/onsell'
import Login from '@/components/login/Login'
import product from '@/components/product/index'
import bindPer from '@/components/bindCard/bindPer'
import bindCom from '@/components/bindCard/bindCom'
import bindStep2 from '@/components/bindCard/bindStep2'
import classification from '@/components/classification/classification'
import classedit from '@/components/classification/classedit'
import mymber from '@/components/mymber/index'
import mydistribution from '@/components/mymber/mydistribution'
import mycustomer from '@/components/mymber/mycustomer'
import myfuns from '@/components/mymber/myfuns'
import memberOrderList from '@/components/mymber/memberOrderList'
import memberOrderDetail from '@/components/mymber/memberOrderDetail'
import incomestatistic from '@/components/incomestatistic/index'
import shop from '@/components/shop/shop'
import shopIndex from '@/components/shop/shopIndex'
import selfproduct from '@/components/shop/selfproduct'
import goodsclassification from '@/components/shop/goodsclassification'
import shopData from '@/components/shop/shopData'
import toPay from '@/components/toPay/index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
      //component: index,
      //meta: { requiresAuth: true }
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: { requiresAuth: true }
    },
    {
      path: '/todayIncome',
      name: 'todayIncome',
      component: todayIncome,
      meta: { requiresAuth: true }
    },
    {
      path: '/available',
      name: 'available',
      component: available
    },
    {
      path: '/general',
      name: 'general',
      component: general
    },
    {
      path: '/stayAccount',
      name: 'stayAccount',
      component: stayAccount
    },
    {
      path: '/withdrawCash',
      name: 'withdrawCash',
      component: withdrawCash
    },
    {
      path: '/myShop',
      name: 'myShop',
      component: myShop,
      children: [
        {
          path: 'onsell',
          component: onsell
        },
        {
          path: 'offShelves',
          component: offShelves
        }
      ]
    },
    {
      path: '/bankCard',
      name: 'bankCard',
      component: bankCard,
      children: [
        {
          path: 'perList',
          component: perList
        },
        {
          path: 'comList',
          component: comList
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/bindPer',
      name: 'bindPer',
      component: bindPer
    },
    {
      path: '/bindCom',
      name: 'bindCom',
      component: bindCom
    },
    {
      path:'/bindStep2',
      name:'bindStep2',
      component:bindStep2
    },
    {
      path:'/classification',
      name:'classification',
      component:classification
    },
    {
      path:'/classedit',
      name:'classedit',
      component:classedit
    },
    {
      path:'/mymber',
      name:'mymber',
      component:mymber,
      children: [
        {
          path:'mydistribution',
          name:'mydistribution',
          component:mydistribution
        },
        {
          path:'mycustomer',
          name:'mycustomer',
          component:mycustomer
        },
        {
          path:'myfuns',
          name:'myfuns',
          component:myfuns
        }
      ]
    },
    {
      path:'/memberOrderList',
      name:'memberorderlist',
      component:memberOrderList
    },
    {
      path:'/memberOrderDetail',
      name:'memberorderdetail',
      component:memberOrderDetail
    },
    {
      path:'/incomestatistic',
      name:'incomestatistic',
      component:incomestatistic
    },
    {
      path:'/shop',
      name:'shop',
      component:shop,
      children: [
        {
          path:'shopIndex',
          name:'shopIndex',
          component:shopIndex
        },
        {
          path:'selfproduct',
          name:'selfproduct',
          component:selfproduct
        },
        {
          path:'shopData',
          name:'shopData',
          component:shopData
        }
      ]
    },
    {
      path:'/goodsclassification',
      name:'goodsclassification',
      component:goodsclassification
    },
    {
      path:'/toPay',
      name:'toPay',
      component:toPay
    }
    
  ]
})
