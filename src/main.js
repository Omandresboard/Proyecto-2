import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// IMPORTACIONES 
import ProductsComponent from './components/Usuario/Index/BannerComponent.vue';
import userProfile from './components/Usuario/User/userProfile.vue';
import editProfile from './components/Usuario/User/editProfile.vue';
import loginComponent from './components/Usuario/Login/loginComponent.vue';
import loginRegist from './components/Usuario/Login/loginRegist.vue';
import detailsComponent from './components/Usuario/Details/detailsComponent.vue';
import cartComponent from './components/Usuario/Shopcart/cartComponent.vue';

const routes = [
  { path: '/', component: ProductsComponent },
  { path: '/userProfile', component: userProfile },
  { path: '/editProfile', component: editProfile},
  { path: '/loginComponent', component: loginComponent},
  { path: '/loginRegist', component: loginRegist},
  { path: '/detailsComponent', component: detailsComponent},
  { path: '/cartComponent', component: cartComponent},
];

const router = createRouter({
  history: createWebHistory(), // Para URL limpias
  routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');