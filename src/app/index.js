import Vue from 'vue';
import App from './components/app.vue'
import router from './router/router.js'

new Vue({
    render: h=>h(App),
    router:router
}).$mount('#app');

