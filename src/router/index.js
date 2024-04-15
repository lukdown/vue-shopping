import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/customer/Main/MainView.vue'
import LoginView from '@/views/customer/Main/LoginView.vue'
import JoinView from '@/views/customer/Main/JoinView.vue'
import ProductDetailsView from '@/views/customer/ProductDetails/ProductDetailsView.vue'
import PaymentPageView from '@/views/customer/PaymentPage/PaymentPageView.vue'
import ProductListView from '@/views/customer/ProductList/ProductListView.vue'
import SalesManagementView from '@/views/admin/SalesManagement/SalesManagementView.vue'
import ShoppingBasketView from '@/views/customer/ShoppingBasket/ShoppingBasketView.vue'
import PaymentManageView from '@/views/admin/PaymentManage/PaymentManageView.vue'
import DeliveryManagementView from '@/views/admin/DeliveryManagement/DeliveryManagementView.vue'

const routes = [
  {
    path: '/',
    name: '/',
    component: MainView
  },
  {
    path: '/login',
    name: '/login',
    component: LoginView
  },
  {
    path: '/join',
    name: '/join',
    component: JoinView
  },
  {
    path: '/productdetails',
    name: '/productdetails',
    component: ProductDetailsView
  },
  {
    path: '/paymentpage',
    name: '/paymentpage',
    component: PaymentPageView
  },
  {
    path: '/productlist',
    name: '/productlist',
    component: ProductListView
  },
  {
    path: '/salesmanagement',
    name: '/salesmanagement',
    component: SalesManagementView
  },
  {
    path: '/shoppingbasket',
    name: '/shoppingbasket',
    component: ShoppingBasketView
  },
  {
    path: '/paymentmanage',
    name: '/paymentmanage',
    component: PaymentManageView
  },
  {
    path: '/deliverymanagement',
    name: '/deliverymanagement',
    component: DeliveryManagementView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router