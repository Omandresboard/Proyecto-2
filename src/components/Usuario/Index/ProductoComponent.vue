<template>
    <section>
            <div class="container-fluid products">
                <br>
                <h2 class="text-center">CATEGORIAS</h2>
                <div class="categories">
                    <div class="card">
                        <img src="../../../../public/img/productos/pc.webp" class="card-img-top" alt="..." height="180">
                        <div class="card-body">
                            <h5 class="card-title">Computadores</h5>
                            <p class="card-text">lorem impur dolor sit amet led emet </p>
                            <router-link to="/computadorComp" class="d-block btn btn-outline-dark text-center">
                                Ver más 
                            </router-link>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../../../../public/img/productos/accesorios.webp" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Accesorios (Teclado, Mouse)</h5>
                            <p class="card-text">lorem impur dolor sit amet led emet </p>
                            <router-link to="/accesoriosComp" class="d-block btn btn-outline-dark text-center">
                                Ver más 
                            </router-link>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../../../../public/img/productos/monitor.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Monitores</h5>
                            <p class="card-text">lorem impur dolor sit amet led emet </p>
                            <router-link to="/monitorComp" class="d-block btn btn-outline-dark text-center">
                                Ver más 
                            </router-link>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../../../../public/img/productos/portatil.webp" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Portatiles</h5>
                            <p class="card-text">lorem impur dolor sit amet led emet </p>
                            <router-link to="/portatilComp" class="d-block btn btn-outline-dark text-center">
                                Ver más 
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <router-view></router-view>
        <br>
</template>
    
<script>
    export default{
        name: 'ProductoComponent'
    }
</script>