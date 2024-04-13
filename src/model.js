class Fecha {
  constructor(dia, mes, año) {
    this.dia = dia;
    this.mes = mes;
    this.año = año;
  }

  formatearFecha() {
    return `${this.dia}/${this.mes}/${this.año}`;
  }
}


class Persona {
  constructor(dni, apellido, nombre, direccion, email, celular) {
    this.dni = dni;
    this.apellido = apellido;
    this.nombre = nombre;
    this.direccion = direccion;
    this.email = email;
    this.celular = celular;
  }

  obtenerNombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  }
}

class Cliente extends Persona {
  constructor(dni, apellido, nombre, direccion, email, celular) {
    super(dni, apellido, nombre, direccion, email, celular);
  }
}


class Color {
  constructor(nombre, cantidad) {
    this.nombre = nombre;
    this.cantidad = cantidad;
  }

  verificarDisponibilidad() {
    return this.cantidad > 0;
  }
}

class Segmento {
  constructor(nombre, precioFlete) {
    this.nombre = nombre;
    this.precioFlete = precioFlete;
  }
}

class Version {
  constructor(nombre) {
    this.nombre = nombre;
    this.colores = [];
    this.segmento = null;
  }

  agregarColor(color) {
    this.colores.push(color);
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
}

class Modelo {
  constructor(nombre) {
    this.nombre = nombre;
    this.versiones = [];
  }

  agregarVersion(version) {
    this.versiones.push(version);
  }

  obtenerVersiones() {
    return this.versiones;
  }
}

class Marca {
  constructor(nombre) {
    this.nombre = nombre;
    this.modelos = [];
  }

  agregarModelo(modelo) {
    this.modelos.push(modelo);
  }

  obtenerModelos() {
    return this.modelos;
  }
}

class Reserva {
  constructor(cliente) {
    this.cliente = cliente;
    this.fechaReserva = null;
    this.fechaEntrega = null;
    this.marcas = [];
    this.marcaSeleccionada = null;
    this.modeloSeleccionado = null;
    this.versionSeleccionada = null;
    this.colorSeleccionado = null;
  }

  agregarMarca(marca) {
    this.marcas.push(marca);
  }

  seleccionarMarca(nombre) {
    this.marcaSeleccionada = this.marcas.find(marca => marca.nombre === nombre);
  }

  seleccionarModelo(nombre) {
    this.modeloSeleccionado = this.marcaSeleccionada.obtenerModelos().find(modelo => modelo.nombre === nombre);
  }

  seleccionarVersion(nombre) {
    this.versionSeleccionada = this.modeloSeleccionado.obtenerVersiones().find(version => version.nombre === nombre);
  }

  seleccionarColor(nombre) {
    this.colorSeleccionado = this.versionSeleccionada.obtenerColores().find(color => color.nombre === nombre);
  }
}

export { Color, Version, Modelo, Marca, Reserva, Segmento, Cliente, Fecha };