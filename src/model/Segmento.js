class Segmento {
  constructor(nombre, precioFlete) {
    this.nombre = nombre;
    this.precioFlete = precioFlete;
  }

  getNombre() {
    return this.nombre;
  }
  getPrecioFlete() {
    return this.precioFlete;
  }
}

export default Segmento;