class Persona {
  constructor(dni, apellido, nombre, direccion, email, celular) {
    this.dni = dni;
    this.apellido = apellido;
    this.nombre = nombre;
    this.direccion = direccion;
    this.email = email;
    this.celular = celular;
  }

  getNombre() {
    return this.nombre;
  }

  obtenerNombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  }
}

export default Persona;