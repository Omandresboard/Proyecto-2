<template>
    <section class="cart">
      <h2>CARRO DE COMPRAS</h2>
      <div class="cart-items">
        <div class="item-details">
          <div class="product-actions">
            <lead>Añade productos adicionales</lead>
            <router-link to="/" class="btn btn-danger btn-md">Añadir</router-link>
          </div>
  
          <div v-for="(producto, indice) in carrito" :key="indice" class="product-info">
            <div class="info_1">
              <div class="product-image">
                <img :src="producto.IMAGEN" alt="Imagen del Producto" width="250">
              </div>
              <div class="product-name">
                <div>
                  <h4>{{ producto.NOMBRE }}</h4>
                </div>
                <div class="product-details">
                  <div class="price">
                    <h3>$ {{ formatoPrecio(producto.PRECIO) }}</h3>
                  </div>
                  <div class="product-count">
                    <div class="c_cont">
                      <span class="count">{{ producto.CANTIDAD }}</span>
                      <button @click="eliminarDelCarrito(producto.ID)" class="btn btn-danger">🗑️</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="order-summary">
          <div class="summary-details">
            <h3>Resumen del pedido</h3>
            <br>
            <div class="total">
              <p>Total</p>
              <div class="total-price" id="totalPrice">$ {{ calcularTotal() }}</div>
            </div>
            <form method="post" action="chekout.php">
              <button @click="procederAlPago" class="checkout-button">¡CONTINUAR CON EL PAGO!</button>
            </form>
          </div>
          <div class="payment-methods">
            <h4>MEDIOS DE PAGO</h4>
            <div class="payment-icons">
              <img src="https://mindlabs.media/wp-content/uploads/2017/08/Paypal-Logo.png" alt="PayPal">
              <img src="https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Symbol.jpg" alt="Mastercard">
              <img src="https://registro.pse.com.co/PSEUserRegister/assets/logo-pse.png" alt="PSE">
              <img src="https://th.bing.com/th/id/R.7e250120b66451e7bc0c836e841c4eb7?rik=JawYw1pB%2bg93RA&riu=http%3a%2f%2fwww.100franquicias.com.co%2fimagenes%2flogo_grande-Efectyjpg&ehk=QhidigFl9aqKq%2bfjLysbx0PKjz7rvrk%2bjWHCZdX0sUk%3d&risl=&pid=ImgRaw&r=0" alt="Efecty">
            </div>
            <br>
            <div class="security-info">
              <div class="security-icon">Seguridad de pago</div>
              
              <p class="payment-paragraph">
                Tienda se compromete a proteger su información de pago y solo compartiremos la información de su tarjeta con nuestros proveedores de servicios de pago que han acordado proteger su información.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br>
      <div v-if="carrito.length === 0" class="alertas" role="alert">
        No hay productos dentro del carrito...
        <router-link to="/" class="btn btn-outline-success btn-lg w-100 btn-block"> Volver al Inicio</router-link>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'CartComponent',
    data() {
      return {
        carrito: [], // Agrega aquí tus productos en el carrito
      };
    },
    methods: {
      formatoPrecio(precio) {
        return parseFloat(precio).toFixed(2);
      },
      calcularTotal() {
        return this.carrito.reduce((total, producto) => total + producto.PRECIO, 0);
      },
    //   eliminarDelCarrito(id) {
        // Implementa la lógica para eliminar un producto del carrito
    //   },
      procederAlPago() {
        // Implementa la lógica para proceder al pago
      },
    },
  };
</script>
  