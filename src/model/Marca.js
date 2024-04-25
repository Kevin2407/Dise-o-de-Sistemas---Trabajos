class Marca {
  constructor(nombre) {
    this.nombre = nombre;
    this.modelos = [];
  }

  getNombre() {
    return this.nombre;
  }

  agregarModelo(modelo) {
    this.modelos.push(modelo);
  }

  obtenerModelos() {
    return this.modelos;
  }
}

export default Marca; 