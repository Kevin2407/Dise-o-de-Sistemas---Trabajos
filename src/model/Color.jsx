class Color {
  constructor(nombre) {
    this.nombre = nombre;
    this.cantidad = 0;
  }

  getNombre() {
    return this.nombre;
  }

  verificarDisponibilidad() {
    return this.cantidad > 0;
  }

  sumarCantidad(cant) {
    this.cantidad = this.cantidad + cant;
  }
}

export default Color;