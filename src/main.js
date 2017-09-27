// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'

import myStore from './components/global' //存入缓存数据
Vue.prototype.myStore = myStore           //存入缓存数据

//import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
//Vue.use(Mint)

import { Swipe, SwipeItem , Indicator,Toast ,Loadmore} from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Loadmore.name, Loadmore);


Vue.config.productionTip = false
axios.defaults.withCredentials = true
axios.defaults.baseURL = '/api/';
Vue.prototype.$axios = axios

Vue.filter('changePrice2money', function (s) {  //金额过滤器
    if(s == null) return '0.00';
    if (/[^0-9\.]/.test(s)) return "invalid value";
    var str = (s/100).toFixed(2) + '';
    var intSum = str.substring(0,str.indexOf(".")).replace( /\B(?=(?:\d{3})+$)/g, ',' );//取到整数部分
    var dot = str.substring(str.length,str.indexOf("."))//取到小数部分
    return "￥" +  intSum + dot;
})

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data:{
  	isLogin:false
  }
})
window.onresize = setFontSize;
setFontSize();
function setFontSize(){
  var windowWidth = document.documentElement.clientWidth;
  document.documentElement.style.fontSize = 100 * (windowWidth / 750) + "px";
}
/*router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!this.isLogin) {
      next({
        path: '/Login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})*/

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    Indicator.open('加载中...');
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    Indicator.close();
    if (response.status >= 500) {
      Toast('请求失败');
    };
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });