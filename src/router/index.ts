import { createRouter, createWebHistory } from 'vue-router'
import fruitRoutes from './modules/fruit'
import adminRoutes from '~/admin/router'
import { useAdminAuthStore } from '~/admin/store/adminAuth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...fruitRoutes,
    ...adminRoutes
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

// 🔐 ADMIN GUARD — ĐẶT Ở ĐÂY
router.beforeEach((to) => {
  const adminAuth = useAdminAuthStore()

  // 1️⃣ Chưa login mà vào admin
  if (to.meta.requiresAdmin && !adminAuth.isLoggedIn) {
    return { path: '/admin/login' }
  }

  // 2️⃣ Đã login mà vào login page
  if (to.meta.guestOnly && adminAuth.isLoggedIn) {
    return { path: '/admin' }
  }
})

export default router
