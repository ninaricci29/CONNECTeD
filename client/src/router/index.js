import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  // MAIN PAGES
  {
    path: "/home",
    name: "home",
    component: () => import(/* webpackChunkName: "home"*/ "../views/Home.vue")
  },
  {
    path: "/signIn",
    name: "signIn",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "log-in" */ "../components/SignIn.vue")
  },
  {
    path: "/profile/:id",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "profile"*/ "../views/Profile.vue")
  },
  {
    path: "/search",
    name: "search",
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/Search.vue")
  },
  {
    path: "/log-in",
    name: "Log In",
    component: () =>
      import(/* webpackChunkName: "search"*/ "../components/SignIn.vue")
  },

  // SUB PAGES
  {
    path: "/register",
    name: "info",
    component: () =>
      import(/* webpackChunkName: "register"*/ "../components/NewUserForm.vue")
  },
  {
    path: "/projects/:id/update",
    name: "updateProjects",
    component: () =>
      import(
        /* webpackChunkName: "register"*/ "../components/UpdateProjects.vue"
      )
  },
  {
    path: "/profile/:id/edit",
    name: "UpdateProfile",
    component: () =>
      import(
        /* webpackChunkName: "updateprofile"*/ "../components/UpdateProfile.vue"
      )
  },
  {
    path: "/post-projects",
    name: "PostProjects",
    component: () =>
      import(
        /* webpackChunkName: "upload-projects"*/ "../components/PostProjects.vue"
      )
  },
  {
    path: "/faq",
    name: "FAQ",
    component: () =>
      import(/* webpackChunkName: "faq" */ "../components/FAQ.vue")
  },

  {
    path: "/404",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "log-in" */ "../components/404.vue")
  },
  {
    path: "*",
    component: () =>
      import(/* webpackChunkName: "log-in" */ "../components/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/connect",
  routes
});

router.beforeEach((to, from, next) => {
  store.dispatch("setUser");
  next();
});

export default router;
