import Merchant from '@/views/Merchant/index'
export default {
    path: '/Merchant',
    name: 'Merchant',
    children: [
        {
            path: "/employee/list",
            name: "employeeList",
            component: () => import("@/views/Merchant/employee.vue")
        },
       
        {
            path: "employee/detail",
            name: "employeeDetail",
            component: () => import("@/views/Merchant/employeeDetail.vue")
        },
        {
            path: "/room/list",
            name: "roomList",
            component: () => import("@/views/Merchant/room.vue")
        },
       
        {
            path: "room/detail",
            name: "roomDetail",
            component: () => import("@/views/Merchant/roomDetail.vue")
        },
        {
            path: "/game/list",
            name: "gameList",
            component: () => import("@/views/Merchant/game.vue")
        },
       
        {
            path: "game/detail",
            name: "gameDetail",
            component: () => import("@/views/Merchant/gameDetail.vue")
        },
        {
            path: "/merchant/list",
            name: "merchantList",
            component: () => import("@/views/Merchant/merchant.vue")
        },
       
        {
            path: "merchant/detail",
            name: "merchantDetail",
            component: () => import("@/views/Merchant/merchantDetail.vue")
        },

         // add router
    ],
    component: Merchant,
}
