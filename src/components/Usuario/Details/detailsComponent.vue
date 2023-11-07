<template>
  <body>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <!-- <img class="img-fluid" :src="product.image" :alt="product.name"> -->
          <img class="img-fluid" src="../../../../public/img/productos/accesorios.webp" alt="">
        </div>
        <div class="col-md-6">
          <h2 class="mb-3">{{ product.name }}</h2>
          <h3 class="text-success mb-4">{{ product.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }) }}</h3>
          <h6 class="mb-2">Descripción:</h6>
          <p class="mb-4">{{ product.description }}</p>

          <div class="d-flex justify-content-between align-items-center flex-column">
            <button class="btn btn-outline-primary btn-block mb-3 w-100" @click="addToCart(product)">Agregar al Carrito</button>
            <router-link to="/" class="btn btn-secondary btn-block w-100">Regresar al Inicio</router-link>
          </div>
        </div>
      </div>
    </div>
    <br><br>
    <div class="container-fluid conts">
      <br>
        <h3>Productos Relacionados</h3>
        <div class="pro">
          <div v-for="(relatedProduct, index) in relatedProducts" :key="index" class="col-md-4 mb-4" style="flex: 0 0 20rem;">
            <div class="card">
              <img :src="relatedProduct.image" class="card-img-top" :alt="relatedProduct.name">
              <!-- <img class="card-img-top" src="../../../../public/img/productos/accesorios.webp" alt=""> -->
              <div class="card-body">
                <h5 class="card-title">{{ relatedProduct.name }}</h5>
                <p class="card-text">{{ relatedProduct.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }) }}</p>
                <!-- <router-link :to="'/details/' + relatedProduct.id" class="btn btn-outline-primary w-100">Ver Más Detalles</router-link> -->
                <router-link :to="'/details/' + relatedProduct.id">Ver Más Detalles</router-link>
              </div>
            </div>
          </div>
        </div>
    </div>
  </body>
</template>

<script>
  export default {
    name: 'DetailsComponent',
    data() {
      return {
        product: {
          name: 'Nombre del Producto',
          price: 129900,
          image: 'path/to/product-image.jpg',
          description: 'Descripción detallada del producto...',
        },
        relatedProducts: [
          {
            id: 1,
            name: 'Producto Relacionado 1',
            price: 98500,
            image: '../../../../public/img/productos/accesorios.webp',
          },
          {
            id: 2,
            name: 'Producto Relacionado 2',
            price: 90500,
            image: '../../../../public/img/productos/monitor.jpg',
          },
          {
            id: 3,
            name: 'Producto Relacionado 3',
            price: 59900,
            image: '../../../../public/img/productos/monitor.jpg',
          },
          {
            id: 4,
            name: 'Producto Relacionado 4',
            price: 80000,
            image: '../../../../public/img/productos/monitor.jpg',
          },
          {
            id: 5,
            name: 'Producto Relacionado 5',
            price: 136500,
            image: '../../../../public/img/productos/monitor.jpg',
          },
          {
            id: 6,
            name: 'Producto Relacionado 6',
            price: 98000,
            image: '../../../../public/img/productos/monitor.jpg',
          },
          // Agrega más productos relacionados según sea necesario
        ],
      };
    },
    created() {
      const productId = this.$route.params.productId;
      const selectedProduct = this.relatedProducts.find(product => product.id === parseInt(productId));
      if (selectedProduct) {
        this.product = selectedProduct;
      }
    },
    methods: {
      addToCart(product) {
        // Emitir un evento para agregar el producto al carrito
        this.$emit('add-to-cart', product);
      },
    },
  };
</script>