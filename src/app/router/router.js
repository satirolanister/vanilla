import Vue from 'vue';
import Router from 'vue-router';
import login from '../components/view/login/login.vue'
import A1 from '../components/view/courses/A1.vue';
import home from '../components/view/home/home.vue';
import notfound from '../components/layout/notfound.vue';



Vue.use(Router);

export default new Router({
    routes: [
         {
             path:'/',
             name: 'login',
             component: login
             
         },   
        {
            path:'/home',
            name: 'home',
            component: home
        },
        {
            path:"/content/courses/A1",
            name:"A1",
            component: A1

        },
        {
            path:'*',
            name:'notfound',
            component: notfound
        }
      
    ]
})