// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueAwesomeSwiper from 'vue-awesome-swiper';//swiper

Vue.config.productionTip = false
//引入本地中的css文件
import './assets/css/mui.css';
import './assets/css/icons-extra.css';
//引入swiper.css Swiper通过npm安装
import 'swiper/dist/css/swiper.css';

Vue.use(Vuex);
Vue.use(VueAwesomeSwiper);
const store=new Vuex.Store({
	state:{
		count:0
	},
	mutations:{
		increment(state){
			state.count++
		}
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
