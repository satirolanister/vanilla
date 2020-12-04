<template>
    <div class="component-login">
        <div class="form-view">
            <img src="/../media/img/logo.jpg" class="rounded-circle mx-auto d-block m-4 img">
            <br>
            <form>
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" id="email">
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd">
                </div>
                <button @click="login()" class="btn btn-success btn-lg btn-block text-decoration-none">
                    <router-link class="text-white text-decoration-none" to="/home">Ingresar</router-link>
                </button>
            </form>
        </div>
    </div>
</template>
<script>
    import {
        EventBus
    } from '../../../services/bus.js';
    export default {
        data() {
            return {
                ingreso: ''
            }
        },
        methods: {
            login: function () {
                this.ingreso = false;
                EventBus.$emit('singin', this.ingreso);
                this.ingreso = ''
            }
        },



    }
</script>