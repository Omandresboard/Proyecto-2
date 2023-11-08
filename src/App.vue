<template>
  <div>
    <div>
      <template v-if="!isAdminPage">
        <!-- Navbar general -->
        <nav class="navbar bg-dark">
          <div class="container-fluid">
            <router-link to="/" class="navbar-brand text-light">Tienda Productos</router-link>
    
            <form class="d-flex custom-width-form" role="search">
              <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
              <!-- <button class="btn btn-light" type="submit">Buscar</button> -->
            </form>
            
            <div class="more" style="">
              <router-link to="/userProfile"><span class="fas fa-user"></span></router-link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="fas fa-bars"></span>
              </button>
            </div>
          </div>
          <br>
        </nav>
        <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
          <div class="bg-dark p-4">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <router-link to="/loginComponent" class="dropdown-item text-light">Iniciar Sesion</router-link>
              <router-link to="/cartComponent" class="dropdown-item text-light">Mi Carrito</router-link>
              <li>
                <hr class="text-light">
              </li>
              <router-link to="/AdminPanel" class="dropdown-item text-light">Administrador</router-link>
            </ul>
          </div>
        </div>
      </template>
      <template v-else>
        <!-- Navbar de administrador -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
          <router-link to="/AdminPanel" class="navbar-brand">Panel de Administrador</router-link>
          <router-link to="/" class="navbar-brand">Cerrar Sesion</router-link>
        </nav>
      </template>
      <router-view></router-view>
    </div>
    <FooterComponent />
  </div>
</template>

  
  <script>

  //ICONS   
  import '../src/components/fontawesome-free-6.4.2-web/css/all.css';
  
  // INDEX  
  import './components/Usuario/css/Index/BannerComponent.css';
  import './components/Usuario/css/Index/ProductoComponent.css';
  import './components/Usuario/css/Index/ProductsComp.css';
  
  // USER
  import './components/Usuario/css/Users/userProfile.css';
  
  //EDIT USER   
  import './components/Usuario/User/editProfile.vue';
  
  //FOOTER   
  import FooterComponent from './components/Usuario/Plantillas/FooterComponent.vue';
  import './components/Usuario/css/NavFooter.css';

  //LOGIN REGISTRATION AND ACCESS
  import './components/Usuario/css/Login/login.css';

  //DETAILS
  import './components/Usuario/css/Details/details.css';   

  //SHOPCART AND PAYMENTS
  import './components/Usuario/css/Shopcart/cartComponent.css';   

// -------------------------------------------------------------------------------------

// ADMIN
  import './components/Admin/css/Admin.css';
  

// --------------------------------------------------------------------------------------
// import { getSomeData } from './api';
export default {
    name: 'App',
    components: {
    FooterComponent,
    },
    data() {
    return {
      isAdminPage: false, 
    };
  },
  watch: {
    $route(to) {
      this.isAdminPage = to.path === '/AdminPanel' || to.path === '/CotizacionComponent';
    },
  }
}
  
  

</script>
  