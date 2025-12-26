import type { RouteRecordRaw } from 'vue-router'

const adminRoutes: RouteRecordRaw[] = [
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: () =>
      import('~/admin/views/auth/AdminLogin.vue'),
    meta: { guestOnly: true }
  },
  {
    path: '/admin',
    component: () =>
      import('~/admin/layouts/AdminLayout.vue'),
    meta: { requiresAdmin: true },
    children: [
      {
        path: '',
        name: 'AdminDashboard',
        component: () =>
          import('~/admin/views/dashboard/Dashboard.vue')
      },
      {
        path: 'products',
        component: () =>
          import('~/admin/views/products/ProductList.vue')
      },
      {
        path: 'products/create',
        component: () =>
          import('~/admin/views/products/ProductForm.vue')
      },
      {
        path: 'products/:id/edit',
        component: () =>
          import('~/admin/views/products/ProductForm.vue')
      }
    ]
  }
]

export default adminRoutes
