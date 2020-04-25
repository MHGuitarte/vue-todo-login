import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    meta: { authRequired: false },
    component: Login,
  },
  {
    path: "/todo",
    name: "Todo",
    meta: { authRequired: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Todo.vue"),
  },
  {
    path: "/error",
    name: "AccessError",
    meta: { authRequired: false },
    component: () => import("../views/AccessError.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.authRequired) {
    if (localStorage.getItem("user-token") != null) {
      return next();
    } else {
      return next({ name: "AccessError" });
    }
  } else {
    return next();
  }
});

export default router;
