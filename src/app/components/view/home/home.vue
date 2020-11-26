<template>
  <div class="container">
    <div v-for="user of users" :key="user.id" class="mt-2">
        <h1>Bienvenido <strong>{{user.firstname+' '+user.lastname }}</strong></h1>
        
    </div> 
    <div class="row">
    <div><strong>Cursos Inscriptos</strong></div>
    <div v-for="enroll of enrolls"
      :key="enroll.course" class="card mt-2 col-4 mx-2">
      <div class="card-body">
        <h5 class="card-title">{{ enroll.course }}</h5>
        <div v-for="course of courses" :key="course.id" class="card-text">
            <div v-if="course.id === enroll.course">
            <p>{{ course.name }}</p>
            <p>{{ course.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      enrolls: {},
      courses: {},
      users: {}
    };
  },
  methods: {
    getenroll() {
      axios
        .get("http://localhost:3000/api/enroll")
        .then((data) => {
          this.enrolls = data.data;
        })
        .catch((e) => {
          console.error(e);
        });
    },
    getcourses() {
      axios
        .get("http://localhost:3000/api/courses")
        .then((data) => {
          this.courses = data.data;
        })
        .catch((e) => {
          console.error(e);
        });
    },
    getusers(){
        axios
            .get("http://localhost:3000/api/users")
            .then(data =>{
                this.users = data.data;
            })
            .catch(e => {
                console.error(e);
            })
    }
  },
  mounted() {
    this.getenroll();
    this.getcourses();
    this.getusers();
  },
};
</script>