<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div id="brand" class="col-10">
        <a class="navbar-brand" href="/"><img id="logo" src="/../media/img/gcfglobal-color.png" alt="" /></a>
      </div>
      <template v-if="logoff">
      <div id="close" class="col-2">
        <button id="close" type="button" @click="logOff()" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div> 
      </template> 
    </nav>
  </div>
</template>
<script>
  export default {
    props: ["logo"],
    data() {
      return {
        logoff: this.logo
      };
    },
    methods: {
      logOff() {
        this.logoff = true;
        this.$emit('logoffnnav', this.logoff);
      },
      viewpro(){
        console.log("nav ",this.logoff, "props", this.logo)
      }
    },
    mounted(){
      this.viewpro()
    }
  };
</script>
<style>
  
</style>