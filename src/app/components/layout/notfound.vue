<template>
    <div class="container">
        <div class="mb-2">
        <router-link @click="bHome()" to="/home" class="btn btn-light">volver</router-link>
        </div>
        <h1 class="align-self-center">Conternido no disponible</h1>
    </div>
</template>
<script>
export default {
    data(){
    return{
      bhome:''
    }
    
  },
  methods:{
    bHome(){
      this.bhome=true
      EventBus.$emit('back', this.bhome);
      console.log(this.bhome);
    }
}
}
</script>