class Version {
  constructor(nombre, segmento, precio) {
    this.nombre = nombre;
    this.colores = [];
    this.segmento = segmento;
    this.precio = precio;
  }

  getNombre() {
    return this.nombre;
  }

  agregarColor(color, cant) {
    this.colores.push({
      color: color,
      cant: cant
    });
  }

  asignarSegmento(segmento) {
    this.segmento = segmento;
  }

  obtenerColores() {
    return this.colores;
  }

  obtenerSegmento() {
    return this.segmento;
  }
  asignarPrecio(precio) {
    this.precio = precio;
  }
  obtenerPrecio() {
    return this.precio;
  }
}

export default Version;