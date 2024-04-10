import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashBoard from '../views/DashBoard.vue'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {path: "/sponsor", component: () => import("../components/SponsorSection.vue")},
    {path: "/dashboard", component: DashBoard, meta: {requiresAuth : true}},
    {path: "/rulebook/:to", component: () => import("../components/RuleBook.vue"), meta: {requiresAuth : true}},
    {path: "/register", component: () => import("../components/SignUp.vue")},
    {path: "/timeline", component: () => import("../views/TimeLine.vue")},
    {path: "/admin/requests", component: () => import("../views/ParticipationReq.vue"), meta: {requiresAuth : true}},
  ]
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeLister = onAuthStateChanged(
      getAuth(),
      (user) =>{
        removeLister();
        resolve(user);
      },
      reject
    )
  })
}

router.beforeEach(async(to, from, next) => {
  if(to.matched.some((record)=> record.meta.requiresAuth)){
    if(await getCurrentUser()){
      next();
    }else{
      next("/register");
    }
  } else{
    next();
  }
});

export default router
