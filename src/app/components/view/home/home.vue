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
        <div class="row mt-3">       
          <div v-for="enroll of enrolls" :key="enroll.course" class="card mt-2 overflow-auto col-2 mx-3">
            <div class="card-body">
              <h4 class="card-title">{{ enroll.course }}</h4>
              <hr />
              <div v-for="course of courses" :key="course.id" class="card-text">
                <div v-if="course.id === enroll.course">
                  <p>
                    <strong>{{ course.name }}</strong>
                  </p>
                  <p>{{ course.description }}</p>
                  <hr />
                  <div>
                    <div v-if="enroll.status === 'passed'">
                     <strong>Estado: <p class="text-info text-center">Aprobado</p></strong>  
                    </div>
                    <div  v-if="enroll.status === 'failed'">
                     <strong>Estado: <p class="text-danger text-center">Reprobado</p></strong> 
                    </div>
                  </div>
                </div>
              </div>
              <button class="btn btn-info btn-block mt-3 text-white" @click="renderRouter()">
                <router-link class="text-white text-decoration-none" :to="`/content/courses/${enroll.course}`">Ver contenido</router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <router-view class="my-5" />
    </template>
  </div>
</template>

<script>
  import axios from "axios";

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
        console.log(this.redirectCourse);
      },
    },
    mounted() {
      this.getInfo();
    },
  };
</script>