import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashBoard from '../views/DashBoard.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {path: "/competitions", component: () => import("../views/CompetitionSection.vue")},
    {path: "/dashboard", component: DashBoard},
    {path: "/register", component: () => import("../components/SignUp.vue")},
  ]
})

export default router
