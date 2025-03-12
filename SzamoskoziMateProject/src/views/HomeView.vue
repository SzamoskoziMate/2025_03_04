<template>
    <section class="container mt-4">
    <h1 class="text-center">Italok</h1>
    <table class="table table-hover table-bordered" v-show="drinks.length">
      <thead class="table-dark">
        <tr>
          <th>Név</th>
          <th>Azonosító</th>
          <th>Művelet</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in items" :key="student.id">
          <td>{{ student.name }}</td>
          <td>{{ student.eduid || 'N/A' }}</td>
          <td><RouterLink class="btn btn-sm btn-primary" :to="`student/${student.id}`">Megtekintés</RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  </template>

<script>
import { http } from '@/utils/http';
import { RouterLink } from 'vue-router';
export default{
    name: 'HomeView',
    components:{
        RouterLink
    },
    data(){
        return{ 
            items:[]
        }
    },
    methods:{
        async getStudentData(){
            const response = await http.get('api/students')
            this.items = await response.data
        }
    },
    mounted(){
        this.getStudentData()
    }
}
</script>

<style>

</style>
