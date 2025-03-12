<script>
import {http} from "@/utils/http.js";
import {RouterLink} from "vue-router";
export default {
  name: "StudentView",
  components:{
    RouterLink
  },
  data(){
    return{
      student: {}
    }
  },
  methods:{
    async getStudentData(){
      const response = await http.get(`student/${this.$route.params.id}`)
      this.student = await response.data.data;
    }
  },
  mounted() {
    this.getStudentData();
  }
}
</script>



<template>
  <section class="container" v-if="student">
    <h1>{{student.name}}</h1>
    <hr>
    <ul class="list-group">
      <li class="list-group-item list-group-item-info">Azonosító: {{student.eduid}}</li>
      <li class="list-group-item list-group-item-danger">Jegy: {{drink.price}}Ft</li>
    </ul>
  </section>
</template>

<style>

</style>