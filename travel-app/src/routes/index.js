import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'link-exact-active',
    routes :[
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/brazil',
            name: 'Brazil',
            component : () => import('@/views/Brazil.vue')
        },
        {
            path: '/hawaii',
            name: 'Hawai',
            component : ()=> import('@/views/Hawai.vue')
        },
        {
            path: '/jamaica',
            name: 'Jamaica',
            component : () => import('@/views/Jamaica.vue')
        },
        {
            path: '/panama',
            name: 'Panama',
            component : () => import('@/views/Panama.vue')

        }
    ]
})

export default router