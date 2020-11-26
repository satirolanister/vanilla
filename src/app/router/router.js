import Vue from 'vue';
import Router from 'vue-router';
import content from '../components/view/content/content.vue'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/content',
            name: 'content',
            component: content

        }
      
    ]
})