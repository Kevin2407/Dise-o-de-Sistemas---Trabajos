class Modelo {
  constructor(nombre) {
    this.nombre = nombre;
    this.versiones = [];
  }
  getNombre() {
    return this.nombre;
  }

  agregarVersion(version) {
    this.versiones.push(version);
  }

  obtenerVersiones() {
    return this.versiones;
  }
}

export default Modelo;