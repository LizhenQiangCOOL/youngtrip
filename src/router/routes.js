import Home from '../views/Home.vue'

export default [{
        path: '/',
        name: 'Home',
        component: Home
    },
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
        component: () => import('@/views/user/Edit')
    },

    {
        path: '*',
        redirect: '/'
    }
]