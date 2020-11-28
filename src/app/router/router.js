import Vue from 'vue';
import Router from 'vue-router';
import A1 from '../components/view/courses/A1.vue';


Vue.use(Router);

export default new Router({
    routes: [
        {
            path:"/content/courses/A1",
            name:"A1",
            component:A1

        }
      
    ]
})