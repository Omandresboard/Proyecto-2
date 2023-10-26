<template>
    <body>
        <section class="cont">
                <h2 class="text-center">Editar Informacion</h2>
            <br>
            <form class="formulario" autocomplete="off">
                <div class="form-group">
                    <div class="form-content text-center">
                        <label for="Perfil">Foto de Perfil</label>
                        <img src="../../../../public/img/usuario.png" alt="" class="img-fluid" width="200"><br>
                        <input type="file" id="imagen" name="imagen" accept="jpeg, jpg, png" enctype="">
                    </div>                
                    
                    <div>
                        <div class="form-content">
                            <label for="usuario">Usuario</label>
                            <input type="text" id="usuario" name="usua" placeholder="">
                        </div>
        
                        <br>

                        <div class="form-content">
                            <label for="nombre">Nombre</label>
                            <input type="text" id="nombre" name="nombre" placeholder="">
                        </div>
                        
                        <br>

                        <div class="form-content">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="">
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <!-- <a href="./user.html" type="submit" class="d-block btn btn-outline-success" name="save"></a> -->
                    <router-link to="./userProfile" class="d-block btn btn-outline-success w-100" name="save">Guardar</router-link>
                </div>
            </form>
        </section>
        <router-view></router-view>
        <br>
    </body>
</template>

<script>
    export default{
        name: 'editProfile'
    }
</script>