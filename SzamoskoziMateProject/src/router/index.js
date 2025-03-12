import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentView from '@/views/StudentView.vue'
import AddGradeView from '@/views/AddGradesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{title: 'Főoldal'}
    },
    {
      path: '/students',
      name: 'student',
      component: StudentView,
      meta:{title: 'Tanulók'}
    },
    {
      path: '/addgrade',
      name: 'addgrade',
      component: AddGradeView,
      meta:{title: 'Jegy Hozzáadása'}
    },
  ],
})

router.beforeEach((to,form,next) =>{
  document.title = meta.title;
  next()
})

export default router
