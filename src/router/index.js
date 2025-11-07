import {createRouter, createWebHistory} from 'vue-router'
import Login from "@/views/Login.vue";
import App from "@/views/App.vue";
import Welcome from "@/views/Welcome.vue";
import User from "@/views/User.vue";
import Index1 from "@/views/Index1.vue";

const routes = [
    {
        //http://localhost:8080/
        path: '/',
        redirect: '/login'
    },
    {
        path: '/index1',
        name: 'Index1',
        component: Index1
    },
    {
        //http://localhost:8080/login
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/index',
        name: 'App',
        component: App,
        redirect: '/index/welcome',
        children: [
            {
                //http://localhost:8080/index/welcome
                path: '/index/welcome',
                name: 'Welcome',
                component: Welcome
            },
            {
                path: '/index/user',
                name: 'User',
                component: User
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})

export default router
