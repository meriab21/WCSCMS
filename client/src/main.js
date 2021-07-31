import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';

import Home from './views/Home';
import Noncustomer from './views/Noncustomer';
import Login from './views/Login';
import Customer from './views/Customer';
import Admin from './views/Admin';
import CreateAccount from './views/CreateAccount';


// import ViewStatus from './views/ViewStatus';
// import ViewBill from './views/ViewBill';
import CustomerService from './views/CustomerService';
import SendBill from './views/SendBill';

import UserProfile from './views/UserProfile';
import ForgotPassword from './views/ForgotPassword';

Vue.use(VueRouter)

import './SCSS/main.SCSS';

Vue.config.productionTip = false 

Vue.component('CreateAccount', CreateAccount);
Vue.component('Noncustomer', Noncustomer);
Vue.component('Login', Login);
Vue.component('Customer', Customer);
Vue.component('home', Home);
Vue.component('Admin', Admin);



const router = new VueRouter({
  mode:'history',

  routes:[
    {path:'/',component:Home},
    {path:'/CreateAcccount',component:CreateAccount},
      {path:'/Noncustomer',component:Noncustomer},
     {path:'/Login',component:Login},
       {path:'/Customer',component:Customer},
       {path:'/Admin',component:Admin},

       {path:'/CreateAccount',component:CreateAccount},
      //  {path:'/ViewStatus',component:ViewStatus},
      // {path:'/ViewBill',component:ViewBill},
       {path:'/CustomerService',component:CustomerService},
       {path:'/SendBill',component:SendBill},

       

       
  ],
      routes:[
            {path:'/',component:Home},
              {path:'/Noncustomer',component:Noncustomer},
            {path:'/Login',component:Login},
              {path:'/Customer',component:Customer},
              {path:'/Admin',component:Admin},
              {path:'/create-account',component:CreateAccount},
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
