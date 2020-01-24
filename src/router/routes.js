import Home from '../views/Home.vue'

export default[
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  
    {
        path:'/auth/register',
        name:'Register',
        component:() => import('@/views/auth/Register')
    },
    {
        path:'/auth/login',
        name:'Login',
        component:() => import('@/views/auth/Login')
    },
    {
        path: '*',
        redirect: '/'
    }
]