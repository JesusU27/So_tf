import { createRouter, createWebHistory } from "vue-router";
import Login from "/src/ChallengePro/pages/login.vue"
import Register from "/src/ChallengePro/pages/register.vue";
import Home from "@/ChallengePro/pages/Home.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/", redirect: "/register"
        },
        {
            path: "/login", component: Login , name: "login"
        },
        {
            path: "/register", component: Register , name: "register"
        },
        {
            path: "/home", component: Home , name: "home"
        },
    ]
});

export default router;
