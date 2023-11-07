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
                            <button class="d-block accordion-button text-center" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Ver más
                            </button>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../../../../public/img/productos/accesorios.webp" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Accesorios (Teclado, Mouse)</h5>
                            <p class="card-text">lorem impur dolor sit amet led emet </p>
                            <button class="d-block accordion-button text-center" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo#collapseTwo">
                                Ver más
                            </button>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../../../../public/img/productos/monitor.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Monitores</h5>
                            <p class="card-text">lorem impur dolor sit amet led emet </p>
                            <button class="d-block accordion-button text-center" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="true" aria-controls="#collapseThree">
                                Ver más
                            </button>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../../../../public/img/productos/portatil.webp" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Portatiles</h5>
                            <p class="card-text">lorem impur dolor sit amet led emet </p>
                            <button class="d-block accordion-button text-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                Ver más
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <br>
</template>
    
<script>
    export default{
        name: 'ProductoComponent'
    }
</script>