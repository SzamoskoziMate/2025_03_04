<script>
import { http } from '@/utils/http';
import { RouterLink } from 'vue-router';
export default{
    name: 'StudentView',
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

<template>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Tanulók</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in items" :key="item.id">
      <td>{{ item.name }}</td>
      <td>{{ item.eduid }}</td>
    </tr>
  </tbody>
</table>
</template>

<style>

</style>