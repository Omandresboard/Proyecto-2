<template>
    <body>
        <section class="cont">
            <h2 class="text-center">Tu Información</h2>
        <br>
        <form class="formulario" autocomplete="off">
            <div class="form-group">
                <div class="form-content text-center">
                    <label for="Perfil">Foto de Perfil</label>
                    <img src="../../../../public/img/usuario.png" alt="" class="img-fluid" width="200"><br>
                    <input type="hidden" id="imagen" name="imagen" accept="jpeg, jpg, png" enctype="">
                </div>                
                
                <div>
                    <div class="form-content">
                        <label for="usuario">Usuario</label>
                        <span class="" id="usuario" name="usuario"></span>
                    </div>
    
                    <br>

                    <div class="form-content">
                        <label for="nombre">Nombre</label>
                        <span id="nombre" name="nombre"></span>
                    </div>
                    
                    <br>

                    <div class="form-content">
                        <label for="email">Email</label>
                        <span id="email" name="email"></span>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <router-link to="./editProfile" class="d-block btn btn-outline-success w-100" name="edit">Editar</router-link><br>
                <router-link to="./" class="d-block btn btn-outline-success w-100" name="inicio">Inicio</router-link>
            </div>
        </form>
    </section>
    <router-view></router-view>
    <br>
    </body>
</template>

<script>
    export default{
        name: 'userProfile'
    }
</script>