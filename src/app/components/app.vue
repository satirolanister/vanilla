<template>
  <div>
    <navigation />
    <template v-if="sing">
      <div  class="container p-3 justify-content-center login-form">
        <login @singin="sing=$event"/>
      </div>
    </template>  
      <template v-else>
        <home/>
      </template>
    <foot />
  </div>
</template>
<script>
import navigation from "./layout/navigation.vue";
import foot from "./layout/foot.vue";
import login from "./view/login/login.vue";
import home from "./view/home/home.vue"

export default {
  components: {
    navigation,
    foot,
    login,
    home
  },
  data() {
    return {
      sing: true,
    };
  },
};
</script>