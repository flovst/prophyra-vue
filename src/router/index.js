import { createRouter, createWebHistory } from 'vue-router'
// import HelloWorld from '../components/HelloWorld'
import Home from '../views/Home.vue'
import test1 from '../components/test1'
import test2 from '../components/test2'

const routes = [
    // {
    //     path: '/',
    //     name: 'Index',
    //     component: HelloWorld
    // },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/test1',
        name: 'test1',
        component: test1
    },
    {
        path: '/test2',
        name: 'test2',
        component: test2
    },

]

var router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;