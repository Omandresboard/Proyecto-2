<template>
    <div class="container mt-5">
      <h1>Calculadora de Precio de Venta</h1>
      <br>
      <form @submit.prevent="calcularPrecioVenta">
        <div class="form-group">
          <label for="nombre">Nombre del Producto:</label>
          <input type="text" class="form-control" id="nombre" v-model="producto.nombre" required>
        </div>
        <div class="form-group">
            <label for="peso">Peso (kg):</label>
            <input type="number" step="0.01" class="form-control" id="peso" v-model="producto.peso" required>
        </div>
        <div class="form-group">
            <label for="volumen">Volumen (m^3):</label>
            <input type="number" step="0.001" class="form-control" id="volumen" v-model="producto.volumen" required>
        </div>
        <div class="form-group">
          <label for="cantidad">Cantidad:</label>
          <input type="number" class="form-control" id="cantidad" v-model="producto.cantidad" required>
        </div>
        <!-- <div class="form-group">
          <label for="costoImportacion">Costo de Importación por m^3:</label>
          <input type="number" class="form-control" id="costoImportacion" v-model="costoImportacion" required>
        </div>
        <div class="form-group">
          <label for="arancel">Arancel (%):</label>
          <input type="number" step="0.00001" class="form-control" id="arancel" v-model="arancel" required>
        </div>
        <div class="form-group">
          <label for="costoFlete">Costo de Flete Interno por tonelada:</label>
          <input type="number" class="form-control" id="costoFlete" v-model="costoFlete" required>
        </div>
        <div class="form-group">
          <label for="impuestoIVA">Impuesto IVA (%):</label>
          <input type="number" step="0.00001" class="form-control" id="impuestoIVA" v-model="impuestoIVA" required>
        </div> -->
        <button type="submit" class="btn btn-primary">Calcular Precio de Venta</button>
      </form>
      <br>
      <hr>
      <br>
      <div v-if="precioVenta !== null">
        <h2>Resultado:</h2>
        <p>El precio de venta calculado es: {{ precioVenta }}</p>
      </div>
    </div>
    <br>
  </template>
  
  <script>
  export default {
    data() {
        return {
            producto: {
            nombre: '',
            peso: 0,
            volumen: 0,
            cantidad: 0
            },
            costoImportacion: 1850000,
            arancel: 0.06, // 6%
            costoFlete: 600.000,
            impuestoIVA: 0.19, // 19%
            precioVenta: null,
            incrementoPrecioVenta: 0.35, // Agrega el valor del incremento
            descuentoMayorA10Unidades: 0.05 // Agrega el valor del descuento
        };
    },
    methods: {
      calcularPrecioVenta() {
        const costoImportacionTotal = this.costoImportacion * this.producto.volumen;
        const arancelTotal = this.producto.cantidad > 100 ? costoImportacionTotal * this.arancel : costoImportacionTotal * 0.08;
        const costoFleteTotal = this.producto.peso * this.costoFlete;
        const iva = (costoImportacionTotal + arancelTotal + costoFleteTotal) * this.impuestoIVA;
  
        const costoTotal = costoImportacionTotal + arancelTotal + costoFleteTotal + iva;
        const costoPorUnidad = costoTotal / this.producto.cantidad;
  
        // Calcular precio de venta con incremento y descuento
        let precioVenta = costoPorUnidad * (1 + this.incrementoPrecioVenta);
        if (this.producto.cantidad > 10) {
          precioVenta *= (1 - this.descuentoMayorA10Unidades);
        }
  
        this.precioVenta = precioVenta.toFixed(2);
      }
    }
  };
  </script>
  