<div class="row mt-1">       
          <div v-for="enroll of enrolls" :key="enroll.course" class="card w-50 col-4 mx-3">
            <div class="card-body">
              <h4 class="card-title">{{ enroll.course }}</h4>
              <hr />
              <div v-for="course of courses" :key="course.id" class="card-text">
                <div v-if="course.id === enroll.course">
                  <p>
                    <strong>{{ course.name }}</strong>
                  </p>
                  {{ course.description }}
                  <hr />
                  <div>
                    <div v-if="enroll.status === 'passed'">
                     <strong class="text-info text-center">Estado: Aprobado</strong>  
                    </div>
                    <div  v-if="enroll.status === 'failed'">
                     <strong class="text-danger text-center">Estado: Reprobado</strong> 
                    </div>
                  </div>
                </div>
              </div>
              <button class="btn btn-info btn-block text-white" @click="renderRouter()">
                <router-link class="text-white text-decoration-none" :to="`/content/courses/${enroll.course}`">Ver contenido</router-link>
              </button>
            </div>
          </div>
        </div>