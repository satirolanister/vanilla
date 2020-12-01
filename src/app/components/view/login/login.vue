<template>
    <div>
        <img src="/../media/img/logo.jpg" class="rounded-circle mx-auto d-block m-4 img">
        <br>
        <form action="" @submit.prevent="login()">
        <div class="form-group">
        <label for="email" >Email address:</label>
        <input type="email" class="form-control" id="email">
        </div>
        <div class="form-group">
        <label for="pwd" >Password:</label>
        <input type="password" class="form-control" id="pwd">
        </div>
        <button type="submit" class="btn btn-success btn-lg btn-block text-decoration-none">Ingresar</button>
        </form>
    </div>
</template>
<script>
import { EventBus } from '../../../services/bus.js';
export default {
    data(){
        return{
            ingreso:''
        }
    },
    methods:{
        login(){
            this.ingreso=false;
            this.$emit('singin',this.ingreso);
            EventBus.$emit('singinNav',this.ingreso);
        }
    }
    
}
</script>

