import Vue from 'vue';
import axios from 'axios';
import vueaxios from 'vue-axios';
import App from './components/app.vue'
import router from './router/router.js'

Vue.use(vueaxios, axios);

new Vue({
    render: h=>h(App),
    router:router
}).$mount('#app');

