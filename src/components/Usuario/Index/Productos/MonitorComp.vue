<template>
    <body class="p-5">
      <h2 class="text-center">Productos relacionados con Monitores</h2>
      <hr>
      <div class="container-fluid">
        <div class="producto" v-for="(product, index) in products" :key="index">
          <div>
            <h5 class="card-title mb-3">{{ product.nombre }}</h5>
            <img :src="'img/productos/' + product.imagen" :alt="product.nombre">
          </div>
          <br><br>
          <div class="textos">
            <span class="text-danger h6">{{ product.precio.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }) }}</span>
            <router-link :to="{ name: 'productDetails', params: { productId: product.id }, query: { relatedProducts: JSON.stringify(products) } }" class="d-block btn btn-light">
              Más Detalles
            </router-link>
  
          </div>
        </div>
      </div>
      <br>
      <router-link to="/" class="d-block btn btn-outline-dark">Regresar</router-link>
    </body>
  </template>
  
    
  <script>
    export default {
      name: 'monitorComp',
    
      data() {
        return {
          products: [
            {
              id: 1,
              nombre: 'Macbook Pro',
              precio: 7000000,
              imagen: 'macbookPro.jpg',
            },
            {
              id: 2,
              nombre: 'Asus ROG',
              precio: 10000000,
              imagen: 'portatil.webp',
            },
            {
              id: 3,
              nombre: 'Acer Nitro 5',
              precio: 3000000,
              imagen: 'nitro5.jpg',
            },
            {
              id: 4,
              nombre: 'MSI Katana',
              precio: 6000000,
              imagen: 'msiKatana.jpg',
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
    };
  </script>
  