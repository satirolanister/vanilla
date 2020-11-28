<template>
  <div class="container">
    <template v-if="redirectCourse">
      <div v-for="user of users" :key="user.id" class="mt-2">
        <h1>
          Bienvenido <strong>{{ user.firstname + " " + user.lastname }}</strong>
        </h1>
      </div>
      <div class="my-1"><strong>Cursos Inscriptos</strong></div>
      <div class="row">
        <div
          v-for="enroll of enrolls"
          :key="enroll.course"
          class="card mt-2 col-4 mx-2"
        >
          <div class="card-body">
            <h5 class="card-title">{{ enroll.course }}</h5>
            <hr />
            <div v-for="course of courses" :key="course.id" class="card-text">
              <div v-if="course.id === enroll.course">
                <p>{{ course.name }}</p>
                <p>{{ course.description }}</p>
                <hr />
                <p>{{ enroll.status }}</p>
              </div>
            </div>
            <button @click="renderRouter()" ><router-link :to="`/content/courses/${enroll.course}`">contenido</router-link></button>
            
          </div>
        </div>
      </div>
    </template> 
    <template v-else>
    <router-view/>
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
      redirectCourse: true
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
    renderRouter(){
      this.redirectCourse = false;
      console.log(this.redirectCourse);
    }
    
  },
  mounted() {
    this.getInfo();
  }
};
</script>