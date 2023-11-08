<template>
  <body>
    <div class="container mt-5">
      <h1>Calculadora de Precio de Venta</h1>
      <br>
      <br>
      <form @submit.prevent="calcularPrecioVenta">
        <div class="form-group">
          <label for="nombre">Nombre del Producto:</label>
          <input type="text" class="form-control" id="nombre" v-model="producto.nombre" required>
        </div>
        <div class="form-group">
          <label for="costoInicialXProducto">Costo Inicial por Producto:</label>
          <input type="number" step="0.01" class="form-control" id="costoInicialXProducto" v-model="costoInicialXProducto" required>
        </div>
        <div class="form-group">
          <label for="peso">Peso (kg):</label>
          <input type="number" step="0.01" class="form-control" id="peso" v-model="producto.peso" required>
        </div>
        <div class="form-group">
          <label for="volumen"> Volumen ( m ^ 3 ) : </label >
          <input type="number" step="0.00001" class="form-control" id="volumen" v-model="producto.volumen" required>
        </div>
        <div class="form-group">
          <label for="cantidadProducto">Cantidad de Productos:</label>
          <input type="number" class="form-control" id="cantidadProducto" v-model="producto.cantidadProducto" required>
        </div>
        <br>
        <button type="submit" class="btn btn-primary w-100">Calcular Precio de Venta</button>
      </form>
      <br>
      <hr>
      <br>
      <div v-if="precioVenta !== null">
        <h2>Resultado:</h2>
        <br>
        <div>
          <p>Producto Calculado: {{ producto.nombre }}</p>
          <p>Costo de Importación Total: {{ formatoNumerico(costoImportacionTotal) }}</p>
          <p>Arancel: {{ formatoNumerico(costoArancel) }}</p>
          <p>Costo de Flete: {{ formatoNumerico(costoFleteTotal) }}</p>
          <p>Impuesto IVA: {{ formatoNumerico(costoIVA) }}</p>
          <p>Costo Total de Importación: {{ formatoNumerico(costoTotalImportacion) }}</p>
          <p>Precio de Costo Unitario: {{ formatoNumerico(costoPorUnidad) }}</p>
          <p>Precio de Venta Total: {{ formatoNumerico(precioVentaTotal) }}</p>
        </div>
      </div>
      <br>
    </div>
  </body>
</template>

<script>
  export default {
    data() {
    return {
      producto: {
        nombre: '',
        cantidadProducto: 0,
        trm: 4127,
        peso: 0,
        volumen: 0
      },
      precioVenta: null,
      costoInicialXProducto: ''
    };
  },
    computed: {
      costoImportacionTotal() {
        const costoM3Importacion = 1850000;
        const cantidadProducto = this.producto.cantidadProducto;
        const volumen = this.producto.volumen;
        return costoM3Importacion * volumen * cantidadProducto;
      },
      costoArancel() {
    const costoInicialXProducto = this.costoInicialXProducto;
    const cantidadProducto = this.producto.cantidadProducto;
    const trm = this.producto.trm;
    const costo = costoInicialXProducto * cantidadProducto * trm;
    if (cantidadProducto <= 100) {
      return costo * 0.08;
    } else {
      return costo * 0.06;
    }
  },

      costoFleteTotal() {
        const pesoUnidad = 1.5;
        const cantidadProducto = this.producto.cantidadProducto;
        return (pesoUnidad * cantidadProducto * 600000) / 1000;
      },
      costoIVA() {
        return (this.costoImportacionTotal + this.costoArancel + this.costoFleteTotal) * 0.19;
      },
      costoTotalImportacion() {
        return this.costoImportacionTotal + this.costoArancel + this.costoFleteTotal + this.costoIVA;
      },
      costoPorUnidad() {
        return this.costoTotalImportacion / this.producto.cantidadProducto;
      },
      precioVentaTotal() {
        if (this.precioVenta !== null) {
          const precioVenta = parseFloat(this.precioVenta);
          const cantidadProducto = this.producto.cantidadProducto;
          return precioVenta * cantidadProducto;
        }
        return null;
      }
    },
    methods: {
      calcularPrecioVenta() {
        const costoVenta = 1.35;
        this.precioVenta = (this.costoPorUnidad * costoVenta).toFixed(2);
      },
      formatoNumerico(numero) {
        return numero.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
      }
    }
  };
</script>
