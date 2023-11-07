<template>
    <br>
    <div class="presentacion">
        <div>
            <h1 class="text-center">¡Observa Nuestras Variedad de Productos Aqui!</h1>
        </div>
        <br>
        <div>
            <div id="bannerCarousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <!-- Primera imagen del banner -->
                    <div class="carousel-item active">
                        <img src="../../../../public/img/banner/imagen1.jpeg" class="d-block w-100" alt="Imagen 1">
                    </div>
                    <!-- Segunda imagen del banner -->
                    <div class="carousel-item">
                        <img src="../../../../public/img/banner/imagen2.jpg" class="d-block w-100" alt="Imagen 2">
                    </div>
                    <!-- Tercera imagen del banner -->
                    <div class="carousel-item">
                        <img src="../../../../public/img/banner/imagen3.jpg" class="d-block w-100" alt="Imagen 3">
                    </div>
                    <!-- Agrega más imágenes según sea necesario -->
                </div>
            </div>
        </div>
    </div>
    <br><br>
    <ProductoComponent/>
    <MasComponent />
</template>


<script>

    import MasComponent from './MasComponent.vue';
    import ProductoComponent from './ProductoComponent.vue';

    export default{
    components: { ProductoComponent, MasComponent },
        name: 'ProducsComponent'
    }
</script>