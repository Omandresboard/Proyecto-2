<template>
    <div>
      <body>
        <main>
          <div class="contenedor__todo bg-dark">
            <div id="caja__trasera" class="caja__trasera">
              <div class="caja__trasera-login">
                <!-- <h3>Ya tienes cuenta?</h3>
                <p>Inicio sesion para entrar a la pagina</p>
                <button id="btn__iniciar--sesion" class="btn btn-outline-light w-100 btn-block">Iniciar sesion</button>-->
              </div> 
              <div class="caja__trasera-register">
                <h3>Aun no tienes una cuenta?</h3>
                <p>Registrate para acceder a la pagina</p>
                <router-link to="/loginRegist" class="btn btn-outline-light w-100 btn-block">Registrarse</router-link>
               </div>
            </div>
  
            <div class="contenedor__login-register">
              <form action="" method="POST" class="formulario__login">
                <h2>Iniciar sesion</h2>
                <input type="text" placeholder="Correo electronico">
                <input type="password" placeholder="Contraseña"><br><br>
                <router-link to="/" class="btn btn-outline-dark w-100 btn-block">Entrar</router-link>
              </form>
  
              <!-- <form action="" method="POST" class="formulario__register">
                <h2>Registrarse</h2>
                <input type="text" placeholder="Nombre" name="nombre">
                <input type="text" placeholder="Email" name="correo">
                <input type="text" placeholder="Usuario" name="usuario">
                <input type="password" placeholder="Contraseña" name="contrasena">
                <br><br>
                <button class="btn btn-outline-dark w-100 btn-block">Registrarse</button>
              </form> -->
            </div>
          </div>
        </main>
      </body>
    </div>
  </template>
  
  <script>
  export default {
    name: 'loginComponent',
//     mounted() {
//       document.getElementById("btn__registrarse").addEventListener("click", this.register);
//       document.getElementById("btn__iniciar--sesion").addEventListener("click", this.iniciarSesion);
//       window.addEventListener("resize", this.anchoPagina);
//     },
//     methods: {
//       anchoPagina() {
//         if (window.innerWidth > 850) {
//         this.cajaTraseraLogin.style.display = "block";
//         this.cajaTraseraRegister.style.display = "block";
//       } else {
//         this.cajaTraseraRegister.style.display = "block";
//         this.cajaTraseraRegister.style.opacity = "1";
//         this.cajaTraseraLogin.style.display = "none";
//         this.formularioLogin.style.display = "block";
//         this.formularioRegister.style.display = "none";
//         this.contenedorLoginRegister.style.left = "0px";
//       }
//       },
//       register() {
//         if (window.innerWidth > 850) {
//         this.formularioRegister.style.display = "block";
//         this.contenedorLoginRegister.style.left = "410px";
//         this.formularioLogin.style.display = "none";
//         this.cajaTraseraRegister.style.opacity = "0";
//         this.cajaTraseraLogin.style.opacity = "1";
//       } else {
//         this.formularioRegister.style.display = "block";
//         this.contenedorLoginRegister.style.left = "0px";
//         this.formularioLogin.style.display = "none";
//         this.cajaTraseraRegister.style.display = "none";
//         this.cajaTraseraLogin.style.display = "block";
//         this.cajaTraseraLogin.style.opacity = "1";
//       }
//       },
//       iniciarSesion() {
//         if (window.innerWidth > 850) {
//         this.formularioRegister.style.display = "none";
//         this.contenedorLoginRegister.style.left = "10px";
//         this.formularioLogin.style.display = "block";
//         this.cajaTraseraRegister.style.opacity = "1";
//         this.cajaTraseraLogin.style.opacity = "0";
//       } else {
//         this.formularioRegister.style.display = "none";
//         this.contenedorLoginRegister.style.left = "0px";
//         this.formularioLogin.style.display = "block";
//         this.cajaTraseraRegister.style.display = "block";
//         this.cajaTraseraLogin.style.display = "none";
//       }
//       }
//     }
}
  </script>  