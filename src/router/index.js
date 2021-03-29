/*
 * @Author: Yin Xiang Zheng
 * @LastEditors: Yin Xiang Zheng
 * @LastEditTime: 2021-02-20 14:47:11
 */
import Vue from 'vue'
import Router from 'vue-router'
import CRUDRouter from './Merchant'
Vue.use(Router)

export default new Router({
    routes: [

        {
            path: '/login',
            name: 'login',
            component: () => import( /* webpackChunkName: 'index'*/ '@/views/login'),
        },
        {
            path: '/',
            name: 'index',
            redirect: {
                name: 'login'
            },
            component: () => import( /* webpackChunkName: 'index'*/ '@/views/index'),
            children: [
                CRUDRouter,
                
                // add module router
                

            ]
        },
        {
            path: '*',
            redirect: '/landing-page'
        }
    ],
    mode: 'history',
    base: '/'
})
