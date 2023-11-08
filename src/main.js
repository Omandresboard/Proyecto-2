import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';



// IMPORTACIONES 
import ProductsComponent from './components/Usuario/Index/BannerComponent.vue';

// USUARIO
import userProfile from './components/Usuario/User/userProfile.vue';
import editProfile from './components/Usuario/User/editProfile.vue';

// LOGIN
import loginComponent from './components/Usuario/Login/loginComponent.vue';
import loginRegist from './components/Usuario/Login/loginRegist.vue';

// DETALLES Y CARRO
import detailsComponent from './components/Usuario/Details/detailsComponent.vue';
import cartComponent from './components/Usuario/Shopcart/cartComponent.vue';

// ADMINISTRADOR
import AdminPanel from './components/Admin/AdminPanel.vue';
import CotizacionComponent from './components/Admin/CotizacionComponent.vue';

// PRODUCTOS
import portatilComp from './components/Usuario/Index/Productos/PortatilComp.vue';
import monitorComp from './components/Usuario/Index/Productos/MonitorComp.vue';
import accesoriosComp from './components/Usuario/Index/Productos/AccesoriosComp.vue';
import computadorComp from './components/Usuario/Index/Productos/ComputadorComp.vue';




const routes = [
  { path: '/', component: ProductsComponent },

  // USUARIO
  { path: '/userProfile', component: userProfile },
  { path: '/editProfile', component: editProfile},
  
  // LOGIN
  { path: '/loginComponent', component: loginComponent},
  { path: '/loginRegist', component: loginRegist},

  // DETALLES Y CARRO
  { path: '/detailsComponent', component: detailsComponent},
  { path: '/cartComponent', component: cartComponent},

  // ADMINISTRADOR
  { path: '/AdminPanel', component: AdminPanel},
  { path: '/CotizacionComponent', component: CotizacionComponent},

  // PRODUCTOS
  { path: '/portatilComp', component: portatilComp},
  { path: '/monitorComp', component: monitorComp},
  { path: '/accesoriosComp', component: accesoriosComp},
  { path: '/computadorComp', component: computadorComp},
  

  
  // DETALLES ID PRODUCTOS
  {
    path: '/details/:productId',
    name: 'productDetails',
    component: detailsComponent,
  }
];


const router = createRouter({
  history: createWebHistory(), 
  routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');