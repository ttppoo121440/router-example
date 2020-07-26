import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/views/Frontend/Main';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '@/views/Frontend/Home'),
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "Cart" */ '@/views/Frontend/Cart'),
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import(/* webpackChunkName: "Products" */ '@/views/Frontend/Products'),
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import(/* webpackChunkName: "Product" */ '@/views/Frontend/Products/Product'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "About" */ '@/views/Frontend/About'),
      },
      {
        path: 'checkout',
        name: 'Checkout',
        component: () => import(/* webpackChunkName: "Checkout" */ '@/views/Frontend/Checkout'),
      },
      {
        path: 'complete',
        name: 'Complete',
        component: () => import(
          /* webpackChunkName: "Complete" */ '@/views/Frontend/Checkout/Complete'
        ),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Dashboard/Login'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard/Admin'),
    children: [
      {
        path: 'Home',
        name: 'DashboardHome',
        component: () => import(/* webpackChunkName: "DashboardHome" */ '@/views/Dashboard/Home'),
      },
      {
        path: 'products',
        name: 'DashboardProducts',
        component: () => import(/* webpackChunkName: "DashboardProducts" */ '@/views/Dashboard/Products'),
      },
      {
        path: 'orders',
        name: 'DashboardOrders',
        component: () => import(/* webpackChunkName: "DashboardOrders" */ '@/views/Dashboard/Orders'),
      },
      {
        path: 'coupon',
        name: 'DashboardCoupon',
        component: () => import(/* webpackChunkName: "DashboardCoupon" */ '@/views/Dashboard/Coupon'),
      },
      {
        path: 'images',
        name: 'DashboardImages',
        component: () => import(/* webpackChunkName: "DashboardImages" */ '@/views/Dashboard/Images'),
      },
    ],
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});

export default router;
