import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/Sign-In",
    name: "Sign-In",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "log-in" */ "../views/Sign-In.vue")
  },
  {
    path: "/info",
    name: "info",
    component: () =>
      import(/* webpackChunkName: "register"*/ "../views/info.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "profile"*/ "../views/Profile.vue")
  },
  {
    path: "/search",
    name: "search",
    component: () =>
      import(/* webpackChunkName: "search"*/ "../views/Search.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/connect",
  routes
});

export default router;
