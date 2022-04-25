import { createApp } from 'vue'
import App from './App.vue'
import HomeComponent from '@/components/HomeComponent'
import  {createRouter,createWebHashHistory} from 'vue-router'
const routes=[
    {
        path:'/',
        name:'Home',
        component:HomeComponent
    }
]

const router=createRouter(options: {
    
    history:createWebHashHistory(),
    routes
})
const vueApp=createApp(App)

vueApp.use(router)
vueApp.mount('#app')
