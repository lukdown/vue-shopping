import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/customer/Main/MainView.vue'
import LoginView from '@/views/customer/Main/LoginView.vue'
import JoinView from '@/views/customer/Main/JoinView.vue'
import ProductDetailsView from '@/views/customer/ProductDetails/ProductDetailsView.vue'
import PaymentPageView from '@/views/customer/PaymentPage/PaymentPageView.vue'
import PaymentPageView2 from '@/views/customer/PaymentPage/PaymentPageView2.vue'
import ProductListView from '@/views/customer/ProductList/ProductListView.vue'
import SalesManagementView from '@/views/admin/SalesManagement/SalesManagementView.vue'
import ShoppingBasketView from '@/views/customer/ShoppingBasket/ShoppingBasketView.vue'
import PaymentManageView from '@/views/admin/PaymentManage/PaymentManageView.vue'
import DeliveryManagementView from '@/views/admin/DeliveryManagement/DeliveryManagementView.vue'
import ProductAddView from '@/views/admin/ProductManagement/ProductAddView.vue'
import ProductAdminView from '@/views/admin/ProductManagement/ProductAdminView.vue'

const routes = [
  {
    path: '/',
    name: '/',
    component: MainView
  },
  {
    path: '/customer/login',
    name: '/customer/login',
    component: LoginView
  },
  {
    path: '/customer/join',
    name: '/customer/join',
    component: JoinView
  },
  {
    path: '/customer/productdetails/:p_no',
    name: '/customer/productdetails',
    component: ProductDetailsView
  },
  {
    path: '/customer/paymentpage',
    name: '/customer/paymentpage',
    component: PaymentPageView
  },
  {
    path: '/customer/paymentpage2/:p_no',
    name: '/customer/paymentpage2',
    component: PaymentPageView2
  },
  {
    path: '/customer/productlist',
    name: '/customer/productlist',
    component: ProductListView
  },
  {
    path: '/admin/salesmanagement',
    name: '/admin/salesmanagement',
    component: SalesManagementView
  },
  {
    path: '/customer/shoppingbasket',
    name: '/customer/shoppingbasket',
    component: ShoppingBasketView
  },
  {
    path: '/admin/paymentmanage',
    name: '/admin/paymentmanage',
    component: PaymentManageView
  },
  {
    path: '/admin/deliverymanagement',
    name: '/admin/deliverymanagement',
    component: DeliveryManagementView
  },
  {
    path: '/admin/productadd',
    name: '/admin/productadd',
    component: ProductAddView
  },
  {
    path: '/admin/productadmin',
    name: '/admin/productadmin',
    component: ProductAdminView
  },
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router