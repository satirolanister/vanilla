<template>
    <div>
        <navigation/>
        <div class="container p-3 justify-content-center login-form">
            <login/>
        </div>
        <template>
        <router-view/>
        </template>
        
        <foot/>
    </div>
</template>
<script>
import navigation from './layout/navigation.vue';
import foot from './layout/foot.vue';
import login from './view/login/login.vue'
export default {
    components:{
        navigation,
        foot,
        login
    },
    data(){
        return{
            sing : ''
        }
    }
    
}
</script>