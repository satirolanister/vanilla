<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div id="brand" class="col-10">
        <a class="navbar-brand" href="/"><img id="logo" src="/../media/img/gcfglobal-color.png" alt="" /></a>
      </div>
      <template v-if="logoff===false">
      <div id="close" >
        <button  @click="logOff()" class="btn btn-danger text-white"><a class="text-white text-decoration-none" href="/">Cerrar sesion</a></button>
      </div> 
      </template> 
    </nav>
  </div>
</template>
<script>
import {EventBus} from "../../services/bus.js"
export default {
    data() {
      return {
        logoff: '',
      };
    },
    created: function(){
      EventBus.$on('singin', (item)=>{
      this.logoff = item
    })
    },
    methods: {
      logOff() {
        this.logoff = true;
        this.$emit('logoffnnav', this.logoff);

      }
    }
  };
</script>
