<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div id="brand" class="col-10">
        <a class="navbar-brand" href="/"><img id="logo" src="/../media/img/gcfglobal-color.png" alt="" /></a>
      </div>
      <template v-if="i">
      <div id="close" class="col-2">
        <button id="close" type="button" @click="logOff()" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div> 
      </template> 
    </nav>
  </div>
</template>
<script>
import {EventBus} from "../../services/bus.js"
export default {
    props: ['logo'],
    data() {
      return {
        logoff: '',
        i:this.logo
      };
    },
    methods: {
      logOff() {
        this.logoff = true;
        this.$emit('logoffnnav', this.logoff);
      },
      logOn(){
        EventBus.$on('singinNav', i =>{
        this.i = this.logo;
        console.log(`valor logo ${this.i}`);
      })
      }
    },
    mounted(){
      this.logOn();
    }
  };
</script>
<style>
  
</style>