import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Github from './components/Github.vue'
import Products from './components/Products.vue'
import UserForm from './components/UserForm.vue'

const routes = [
    { path: '/vue-pages/github', component: Github },
    { path: '/vue-pages/products', component: Products },
    { path: '/vue-pages/userform', component: UserForm },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
