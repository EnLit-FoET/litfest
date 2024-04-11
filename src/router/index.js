import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashBoard from '../views/DashBoard.vue'
import { auth, db } from '@/utils'
import { doc, getDoc } from 'firebase/firestore'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // { path: "/sponsor", component: () => import("../components/SponsorSection.vue") },
    { path: "/dashboard", component: DashBoard, meta: { requiresAuth: true } },
    { path: "/rulebook/:to", component: () => import("../components/RuleBook.vue"), meta: { requiresAuth: true } },
    { path: "/register", component: () => import("../components/SignUp.vue") },
    {path: "/timeline", component: () => import("../views/TimeLine.vue")},
    {
      path: "/admin",
      meta: { requiresAuth: true, requireAdmin: true },
      children: [
        {
          path : '',
          component: () => import("@/views/admin/HomeView.vue")
        },
        {
          path: 'requests',
          component: () => import("@/views/admin/ParticipationReq.vue")
        }
      ]
    },
    {
      path: "/401",
      component: () => import("@/views/UnAuth.vue")
    }
  ]
})

let isAdmin = false;
auth.onAuthStateChanged((user) => {
  getDoc(doc(db, "users", user.email)).then((doc) => {
    isAdmin = doc.data().admin;
  });
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAdmin)) {
    if (isAdmin) {
      next();
    }
    else {
      next("/401");
    }
    return
  }
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (auth.currentUser) {
      next();
    } else {
      next("/register");
    }
  } else {
    next();
  }
});

export default router
