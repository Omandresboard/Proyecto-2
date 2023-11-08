<template>
  <body>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <img class="img-fluid" :src="'img/productos/' + product.imagen" alt="">
        </div>
        <div class="col-md-6">
          <h2 class="mb-3">{{ product.nombre }}</h2>
          <h3 class="text-success mb-4">{{ product.precio.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }) }}</h3>
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
      <h3 class="text-center">Productos Relacionados</h3>
      <div class="pro">
        <div v-for="(product, index) in products" :key="index" class="producto">
          <div>
            <h5 class="card-title mb-3">{{ product.nombre }}</h5>
            <img :src="'img/productos/' + product.imagen" :alt="product.nombre">
          </div>
          <br><br>
          <div class="textos">
            <span class="text-danger h6">{{ product.precio.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }) }}</span>
            <router-link :to="'/details/' + product.id" class="d-block btn btn-light">Más Detalles</router-link>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  nombre: 'DetailsComponent',
  data() {
    return {
      product: {
        nombre: '',
        precio: 0,
        imagen: '',
        description: '',
      },
      products: [
        {
          id: 9,
          nombre: 'Teclado',
          precio: 98500,
          imagen: 'accesorios.webp',
        },
        {
          id: 2,
          nombre: 'Asus ROG',
          precio: 10000000,
          imagen: 'portatil.webp',
        },
        {
          id: 11,
          nombre: 'Monitor Asus',
          precio: 5990000,
          imagen: 'monitor.jpg',
        },
        {
          id: 1,
          nombre: 'Macbook Pro',
          precio: 7000000,
          imagen: 'macbookPro.jpg',
        },
        {
          id: 4,
          nombre: 'MSI Katana',
          precio: 6000000,
          imagen: 'msiKatana.jpg',
        },
        {
          id: 10,
          nombre: 'Teclado Mecanico',
          precio: 98000,
          imagen: 'teclado.webp',
        },
        {
          id: 3,
          nombre: 'Acer Nitro 5',
          precio: 3000000,
          imagen: 'nitro5.jpg',
        },
        {
          id: 5,
          nombre: 'HP Victus',
          precio: 4000000,
          imagen: 'victus.jpg',
        },
        {
          id: 6,
          nombre: 'Asus Tuf Gaming F15',
          precio: 4600000,
          imagen: 'Tufgaming.jpg',
        },
        {
          id: 7,
          nombre: 'Alienware MR 15',
          precio: 8000000,
          imagen: 'alienware.webp',
        },
        {
          id: 8,
          nombre: 'Razer Blade 14',
          precio: 6000000,
          imagen: 'Razer14.png',
        },
        
      ],
    };
  },
  created() {
    const productId = this.$route.params.productId;
    const selectedProduct = this.products.find(product => product.id === parseInt(productId));
    if (selectedProduct) {
      this.product = selectedProduct;
    }
  },
  methods: {
    addToCart(product) {
    
      this.$emit('add-to-cart', product);
    },
  },
};
</script>
