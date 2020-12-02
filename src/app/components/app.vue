<template>
  <div>
    <navigation @logoffnnav="sing=$event"/>
    <template v-if="sing===''|| sing===true">
      <div  class="container p-3 justify-content-center login-form">
        <login @singin="singin=$event" />
      </div>
    </template>  
      <template v-else>
        <router-view />
      </template>
    <foot />
  </div>
</template>
<script>
import navigation from "./layout/navigation.vue";
import foot from "./layout/foot.vue";
import login from "./view/login/login.vue";
import home from "./view/home/home.vue"
import {EventBus} from "../services/bus.js"

export default {
  components: {
    navigation,
    foot,
    login,
    home
  },
  created : function(){
    EventBus.$on('singin', (item)=>{
      this.sing = item;
    })
  },
  data() {
    return {
      sing: true,
    };
  }
};
</script>
