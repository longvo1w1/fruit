import type { RouteRecordRaw } from 'vue-router'

const fruitRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('~/layouts/FruitLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('~/views/fruit/HomePage.vue')
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('~/views/fruit/ProductsPage.vue')
      },
      {
        path: 'products/:id',
        name: 'ProductDetail',
        component: () => import('~/views/fruit/ProductDetailPage.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('~/views/fruit/AboutPage.vue')
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('~/views/fruit/ContactPage.vue')
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('~/views/fruit/CartPage.vue')
      },
      {
        path: 'checkout',
        name: 'Checkout',
        component: () => import('~/views/fruit/CheckoutPage.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('~/views/fruit/NotFound.vue')
  }
]

export default fruitRoutes
