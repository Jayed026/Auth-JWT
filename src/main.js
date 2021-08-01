import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue';
import Nav from './components/Nav.vue';
import Registration from './components/Registration.vue';
import Login from './components/Login.vue';
Vue.use(VueRouter);
const routes = [
  { path: '/', component: Home },
  {
    path:'/nav',component:Nav
  },
  {
    path:'/login',component:Login
  },
  {
    path:'/reg',component:Registration
  },
   
]
const router = new VueRouter({
  routes
})
Vue.config.productionTip = false

new Vue({
   router:router,
  render: h => h(App),
}).$mount('#app')
