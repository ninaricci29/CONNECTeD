import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    // MAIN PAGES
    {
        path: "/home",
        name: "home",
        component: () =>
            import(/* webpackChunkName: "home"*/ "../views/Home.vue")
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
        name: "info" ,
        component: () =>
            import(/* webpackChunkName: "register"*/ "../components/NewUserForm.vue")
    },
    {
        path: "/update-projects",
        name: "updateProjects",
        component: () =>
            import(/* webpackChunkName: "register"*/ "../components/UpdateProjects.vue")
    },
    {
        path: "/updateprofile/:id",
        name: "UpdateProfile",
        component: () =>
            import(/* webpackChunkName: "updateprofile"*/ "../components/UpdateProfile.vue")
    },
    {
        path: "/post-projects",
        name: "PostProjects",
        component: () =>
            import(/* webpackChunkName: "upload-projects"*/ "../components/PostProjects.vue")
    },
    {
        path: "/404",
        name: "404",
        component: () =>
            import(/* webpackChunkName: "upload-projects"*/ "../components/404.vue")
    }


];

const router = new VueRouter({
    mode: "history",
    base: "/connect",
    routes
});

export default router;