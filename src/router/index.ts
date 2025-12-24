import { createRouter, createWebHistory } from 'vue-router'
import fruitRoutes from './modules/fruit'

export default createRouter({
  history: createWebHistory(),
  routes: [...fruitRoutes],
  scrollBehavior() {
    return { top: 0 }
  }
})
