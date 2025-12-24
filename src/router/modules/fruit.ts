import type { RouteRecordRaw } from 'vue-router'

const fruitRoutes: RouteRecordRaw[] = [
  {
    path: '/fruit',
    component: () => import('~/layouts/FruitLayout.vue'),
    children: [
      {
        path: '',
        name: 'FruitHome',
        component: () => import('~/views/fruit/HomePage.vue')
      },
      {
        path: 'products',
        name: 'FruitProducts',
        component: () => import('~/views/fruit/ProductsPage.vue')
      },
      {
        path: 'products/:id',
        name: 'FruitProductDetail',
        component: () => import('~/views/fruit/ProductDetailPage.vue')
      },
      {
        path: 'about',
        name: 'FruitAbout',
        component: () => import('~/views/fruit/AboutPage.vue')
      },
      {
        path: 'contact',
        name: 'FruitContact',
        component: () => import('~/views/fruit/ContactPage.vue')
      },
      {
        path: 'cart',
        name: 'FruitCart',
        component: () => import('~/views/fruit/CartPage.vue')
      },
      {
        path: 'checkout',
        name: 'FruitCheckout',
        component: () => import('~/views/fruit/CheckoutPage.vue')
      },
      {
        path: ':pathMatch(.*)*',
        name: 'FruitNotFound',
        component: () => import('~/views/fruit/NotFound.vue')
      }
    ]
  }
]

export default fruitRoutes
