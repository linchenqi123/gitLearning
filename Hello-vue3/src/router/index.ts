import {createRouter,createWebHistory} from 'vue-router'
const router=createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/home',
        name: 'Home',
        component: () => import('../pages/Home.vue')
        },
        {
        path: '/about',
        name: 'About',
        component: () => import('../pages/About.vue')
        },
        {
            path:'/news',
            name:'News',
            component:()=>import('../pages/News.vue'),
            children:[
                {
                    path:'news-detail/:id/:title/:content',
                    name:'NewsDetail',
                    component:()=>import('../pages/NewsDetail.vue'),
                    //如果是使用params传参，需要使用下面的写法
                    props:true
                    //如果是使用query传参，需要使用下面的写法
                    // props(route){
                    //     route route.query
                    // }
                }
            ]
        },
        // 重定向
        {
            path:'/',
            redirect:'/home'
        }
    ]
    })
export default router