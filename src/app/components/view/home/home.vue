<template>
  <div class="mx-3 mt-3">
    <template v-if="redirectCourse">
      <div v-for="user of users" :key="user.id">
        <div class="d-block p-2 bg-primary text-white">
          <div class="col-10">
            <h1 class="text-white">
              Bienvenido
              <strong>{{ user.firstname + " " + user.lastname }}</strong>
            </h1>
          </div>
        </div>
        <div class="d-block p-2 text-info mt-2">
          <h2><strong>Cursos Inscriptos</strong></h2>
        </div>
        <div class="row mx-1 mb-5">
          <div class="card col-xs-12 mb-3 col-4 mx-2" v-for="enroll of enrolls" :key="enroll.course" style="max-width: 540px;">
            <div class="row no-gutters">
              <div class="col-md-4 mt-3">
                <div v-if="enroll.course === 'A1'">
                  <img src="/../media/img/A1.gif" class="card-img">
                </div>
                <div v-if="enroll.course === 'B1'">
                  <img src="/../media/img/b1.jpg" class="card-img">
                </div>
              </div>
              <div class="col-md-8 col-xs-12">
                <div class="card-body">
                  <h5 class="card-title">{{ enroll.course }}</h5>
                  <div v-for="course of courses" :key="course.id">
                    <div v-if="course.id === enroll.course">
                      <p class="card-text">{{ course.name }}</p>
                      <p class="card-text"><small>{{ course.description }}</small></p>
                      <div class="mt-1">
                        <div v-if="enroll.status === 'passed'">
                          <p class="card-text"><small class="text-muted">Estado: Aprobado</small></p>
                        </div>
                        <div v-if="enroll.status === 'failed'">
                          <p class="card-text"><small class="text-muted">Estado: Reprobado</small></p>
                        </div>
                      </div>
                      <div class="card-footer">
                        <router-link @click="renderRouter()"
                          class="text-dark text-decoration-none"
                          :to="`/content/courses/${enroll.course}`">
                          Ver contenido</router-link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <router-view />
    </template>
  </div>
</template>

<script>
  import axios from "axios";
  import {
    EventBus
  } from "../../../services/bus.js"

  export default {
    data() {
      return {
        enrolls: {},
        courses: {},
        users: {},
        estado: {},
        redirectCourse: true,
      };
    },
    created: function () {
      EventBus.$on('back', (item) => {
        this.redirectCourse = item
      })
    },
    beforeDestroy() {
      EventBus.$off('back');
    },
    methods: {
      getInfo() {
        axios
          .get("http://localhost:3000/api/users")
          .then((data) => {
            this.users = data.data;
          })
          .catch((e) => {
            console.error(e);
          });
        axios
          .get("http://localhost:3000/api/courses")
          .then((data) => {
            this.courses = data.data;
          })
          .catch((e) => {
            console.error(e);
          });
        axios
          .get("http://localhost:3000/api/enroll")
          .then((data) => {
            this.enrolls = data.data;
          })
          .catch((e) => {
            console.error(e);
          });
      },
      renderRouter() {
        this.redirectCourse = false;
      },


    },
    mounted() {
      this.getInfo();
    },
  };
</script>