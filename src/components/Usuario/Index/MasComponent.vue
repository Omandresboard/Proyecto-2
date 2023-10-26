<template>
    <section class="container">
        <div class="accordion">
            <div class="">
                <div id="collapseOne" class="accordion-collapse collapse hidden" data-bs-parent="#accordionExample">
                    <h2 class="accordion-header text-center">
                        Computadores
                    </h2>
                    <hr>
                    <div class="accordion-body">
                        <div class="card">
                            <img src="../../../../public/img/productos/pc.webp" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">NOMBRE PC</h5>
                                <p class="card-text text-danger">PRECIO</p>
                                <router-link to="/detailsComponent" class="btn btn-dark">Más Detalles</router-link>
                            </div>
                        </div>
                        <hr>
                    </div>
                </div>
            </div>
            <div class="">
                <div id="collapseTwo" class="accordion-collapse collapse hidden" data-bs-parent="#accordionExample">
                    <h2 class="accordion-header text-center">
                        Accesorios
                    </h2>
                    <hr>
                    <div class="accordion-body">
                        <div class="card">
                            <img src="../../../../public/img/productos/accesorios.webp" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">NOMBRE ACCESORIOS</h5>
                                <p class="card-text text-danger">PRECIO </p>
                                <router-link to="/detailsComponent" class="btn btn-dark">Más Detalles</router-link>
                            </div>
                        </div>
                        <hr>
                    </div>
                </div>
            </div>
            <div class="">
                <div id="collapseThree" class="accordion-collapse collapse hidden" data-bs-parent="#accordionExample">
                    <h2 class="accordion-header text-center">
                        Monitores
                    </h2>
                    <hr>
                    <div class="accordion-body">
                        <div class="card">
                            <img src="../../../../public/img/productos/monitor.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">NOMBRE MONITOR</h5>
                                <p class="card-text text-danger">PRECIO </p>
                                <router-link to="/detailsComponent" class="btn btn-dark">Más Detalles</router-link>
                            </div>
                        </div>
                        <hr>
                    </div>
                </div>
            </div>
            <div class="">
                <div id="collapseFour" class="accordion-collapse collapse hidden" data-bs-parent="#accordionExample">
                    <h2 class="accordion-header text-center">
                        Portatiles
                    </h2>
                    <hr>
                    <div class="accordion-body">
                        <div class="card">
                            <img src="../../../../public/img/productos/portatil.webp" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">NOMBRE PORTATIL</h5>
                                <p class="card-text text-danger">PRECIO </p>
                                <router-link to="/detailsComponent" class="btn btn-dark">Más Detalles</router-link>
                            </div>
                        </div>
                        <hr>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <br>
</template>

<script>
    export default{
        name: 'MasComponent'
    }
</script>