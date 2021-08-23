import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

import Home from './views/Home';
import Noncustomer from './views/Noncustomer';
import Login from './views/Login';
import Customer from './views/Customer';
import Admin from './views/Admin';
import CreateAccount from './views/CreateAccount';
import AboutUs from './views/AboutUs';
import Team from './views/Team';
import CustomerService from './views/CustomerService';
import SendBill from './views/SendBill';
import OperationMaintenance from './views/OperationMaintenance';
import Assistant from './views/Assistant';
import ContactUs from './views/ContactUs';
import UserProfile from './views/UserProfile';
import ForgotPassword from './views/ForgotPassword';
import Notification from './views/Notification';

Vue.use(VueRouter)

import './SCSS/main.SCSS';

Vue.config.productionTip = false 

Vue.component('CreateAccount', CreateAccount);
Vue.component('Noncustomer', Noncustomer);
Vue.component('Login', Login);
Vue.component('Customer', Customer);
Vue.component('home', Home);
Vue.component('Admin', Admin);
Vue.component('UserProfile', UserProfile);




const router = new VueRouter({
  mode:'history',

  routes:[
        {path:'/',component:Home},
        {path:'/createaccount',component:CreateAccount},
        {path:'/Noncustomer',component:Noncustomer},
        {path:'/Login',component:Login},
        {path:'/Customer',component:Customer},
        {path:'/Admin',component:Admin},
        {path:'/Assistant',component:Assistant},
        {path:'/Team',component:Team},
        {path:'/ContactUs',component:ContactUs},
        {path:'/CustomerService',component:CustomerService},
        {path:'/SendBill',component:SendBill},
        {path:'/OperationMaintenance',component:OperationMaintenance},
        {path:'/AboutUs',component:AboutUs},
        {path:'/user-profile',component:UserProfile},
        {path:'/Forgot-password',component:ForgotPassword},
        
            
      ]
 })
 Vue.use(vuetify);

new Vue({
router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
