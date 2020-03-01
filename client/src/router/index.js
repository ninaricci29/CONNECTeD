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
        path: "/info",
        name: "info",
        component: () =>
            import(/* webpackChunkName: "register"*/ "../components/NewUserForm.vue")
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
    }
];

const router = new VueRouter({
    mode: "history",
    base: "/connect",
    routes
});

export default router;