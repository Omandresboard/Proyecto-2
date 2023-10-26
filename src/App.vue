<template>
    <div>
      <div>
        <nav class="navbar bg-dark">
          <div class="container-fluid">
            <!-- Usamos router-link para navegar a la página de inicio (Home) -->
            <router-link to="/" class="navbar-brand text-light">TITULO</router-link>
  
            <form class="d-flex custom-width-form" role="search">
              <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
              <!-- <button class="btn btn-light" type="submit">Buscar</button> -->
            </form>
  
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span class="fas fa-bars"></span>
            </button>
          </div>
          <br>
        </nav>
        <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
          <div class="bg-dark p-4">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <!-- Usamos router-link para navegar a la página de perfil (UserProfile) -->
              <router-link to="/userProfile" class="dropdown-item text-light">Perfil</router-link>
              <router-link to="/loginComponent" class="dropdown-item text-light">Iniciar Sesion</router-link>
              <li>
                <hr class="text-light">
              </li>
              <router-link to="/cartComponent" class="dropdown-item text-light">Mi Carrito</router-link>
            </ul>
          </div>
        </div>
      </div>
      <br>
  
      <router-view></router-view>
    </div>
    <FooterComponent />
  </template>
  
  <script>

  //ICONS   
  import '../src/components/fontawesome-free-6.4.2-web/css/all.css';
  
  // INDEX  
  import './components/Usuario/css/Index/BannerComponent.css';
  import './components/Usuario/css/Index/ProductoComponent.css';
  import './components/Usuario/css/Index/MasComponent.css';
  
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
  

// --------------------------------------------------------------------------------------
  export default {
    name: 'App',
    components: {
    FooterComponent,
    
},
  }
  </script>
  