import Home from '../views/Home.vue'

export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    },
    // 用户
    {
        path: '/auth/login',
        name: 'Login',
        component: () => import('@/views/auth/Login')
    },
    {
        path: '/auth/register',
        name: 'Register',
        component: () => import('@/views/auth/Register')
    },
    {
        path: '/auth/findpassword',
        name: 'FindPassword',
        component: () => import('@/views/auth/FindPassword')
    },
    {
        path: '/user/edit',
        name: 'edit',
        component: () => import('@/views/user/Edit'),
        meta: {
            auth: true
        }
    },
    // card
    {
        path: '/cards/create',
        name: 'Create',
        component: () => import('@/views/card/Create'),
        meta: {
            auth: true
        }
    },
    {
        path: '/cards/:cardId/content',
        name: 'Content',
        component: () => import('@/views/card/Content'),
    },
    {
        path: '/cards/:cardId/edit',
        name: 'Edit',
        component: () => import('@/views/card/Create'),
        meta: {
            auth: true
        }
    },
    // Search 
    {
        path: '/search',
        name: 'Search',
        component: () => import('@/views/Search'),
    },

    // 页面
    {
        path: '/:user',
        name: 'Column',
        component: () => import('@/views/card/Column')
    },
    {
        path: '/cards/likecard',
        name: 'Likecard',
        component: () => import('@/views/card/Likecard'),
        meta: {
            auth: true
        }
    },
    // user follow
    {
        path: '/user/follow',
        name: 'follow',
        component: () => import('@/views/user/Follow'),
    },


    {
        path: '*',
        redirect: '/'
    }
]