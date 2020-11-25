import Vue from 'vue';
import Router from 'vue-router';
import home from '../components/view/home/home.vue';
import login from '../components/view/login/login.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: home
        },
      
    ]
})