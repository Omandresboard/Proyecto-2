<template>
    <body>
        <div class="container-fluid p-5 AdminContainer">
          <h2>Administrar Categorías</h2>
            <div class="table-container">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th class="text-center">Nombre</th>
                        <th class="text-center">Correo</th>
                        <th class="text-center">Nombre del Producto</th>
                        <th class="text-center">Cantidad</th>
                        <th class="text-center">Precio Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <!-- Utiliza v-for para iterar a través de las categorías y mostrar los datos en filas de la tabla -->
                    <tr v-for="categoria in categorias" :key="categoria.id">
                        <td class="text-center">{{ categoria.nombre }}</td>
                        <td class="text-center">{{ categoria.correo }}</td>
                        <td class="text-center">{{ categoria.nombreProducto }}</td>
                        <td class="text-center">{{ categoria.cantidad }}</td>
                        <td class="text-center">{{ categoria.precioTotal }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <main class="container-fluid">
                <router-link to="/CotizacionComponent" class="btn btn-outline-dark w-100 center">Cotizacion de Importaciones de Productos</router-link>
                <router-view></router-view> 
                </main>
            </div>
        </div>
    </body>
</template>

<script>
export default {
    name: 'AdminPanel',
  data() {
    return {
      categorias: [
        {
            nombre: 'Administrador',
            correo: 'omarandres943@gmail.com',
            nombreProducto: 'Acer',
            cantidad: 2,
            precioTotal: 49.99,
        },
      ]
    };
  },
  mounted() {
    // Realiza una solicitud HTTP (por ejemplo, utilizando Axios) para obtener los datos de categorías desde tu backend y asignarlos a this.categorias
  }
};
</script>