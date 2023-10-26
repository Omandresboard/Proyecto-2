<template>
    <div>
      <body>
        <main>
          <div class="contenedor__todo bg-dark">
            <div id="caja__trasera" class="caja__trasera">
               <div class="caja__trasera-login">
               <!-- <h3></h3>
                <p>Inicio sesion para entrar a la pagina</p>
                <button id="btn__iniciar--sesion" class="btn btn-outline-light w-100 btn-block">Iniciar sesion</button>-->
              </div> 
              <div class="caja__trasera-register">
                <h3>Ya tienes una cuenta registrada?</h3>
                <p>Inicie sesion para entrar a la pagina</p>
                <router-link to="/loginComponent" class="btn btn-outline-light btn-block" style="width:100%;">Iniciar sesion</router-link>
               </div>
            </div>
  
            <div class="contenedor__login-register">
              <form action="" method="POST" class="formulario__login">
                  <h2>Registrarse</h2>
                  <input type="text" placeholder="Nombre" name="nombre">
                  <input type="text" placeholder="Email" name="correo">
                  <input type="text" placeholder="Usuario" name="usuario">
                  <input type="password" placeholder="Contraseña" name="contrasena">
                  <br><br>
                  <router-link to="/loginComponent" class="btn btn-outline-dark btn-block" style="width:100%;">Registrarse</router-link>
              </form>
  
              <form action="" method="POST" class="formulario__register">
              </form>
            </div>
          </div>
        </main>
      </body>
    </div>
  </template>

<script>
    export default{
        name: 'loginRegist'
    }
</script>