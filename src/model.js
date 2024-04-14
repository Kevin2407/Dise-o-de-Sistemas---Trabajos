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

  getNombre() {
    return this.nombre;
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

  getNombre() {
    return this.nombre;
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

  getNombre() {
    return this.nombre;
  }
  getPrecioFlete() {
    return this.precioFlete;
  }
}

class Version {
  constructor(nombre, segmento,precio) {
    this.nombre = nombre;
    this.colores = [];
    this.segmento = segmento;
    this.precio = precio;
  }

  getNombre() {
    return this.nombre;
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
  asignarPrecio(precio) {
    this.precio = precio;
  }
  obtenerPrecio() { 
    return this.precio;
  }
}

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
    this.precioFlete = null;
    this.precioAuto = null;
    this.precioFinal = null;
  }

  getNombre() {
    return this.nombre;
  }

  agregarMarca(marca) {
    this.marcas.push(marca);
  }

  seleccionarMarca(nombre) {
    this.marcaSeleccionada = nombre;
  }
  getMarcaSeleccionada() {
    return this.marcaSeleccionada;
  }

  seleccionarModelo(nombre) {
    this.modeloSeleccionado = nombre;
  }
  getModeloSeleccionado() {
    return this.modeloSeleccionado;
  }

  seleccionarVersion(nombre) {
    this.versionSeleccionada = nombre;
  }
  getVersionSeleccionada() {
    return this.versionSeleccionada;
  }

  seleccionarColor(nombre) {
    this.colorSeleccionado = nombre;
  }
  getColorSeleccionado() {
    return this.colorSeleccionado;
  }
  
  setPrecioFlete(precio) {
    this.precioFlete = precio;
  }
  getPrecioFlete() {
    return this.precioFlete;
  }
  setPrecioAuto(precioAuto) {
    this.precioAuto = precioAuto;
  }
  getPrecioAuto() {
    return this.precioAuto;
  }
  setPrecioFinal(precioFinal) {
    this.precioFinal = precioFinal;
  }
  getPrecioFinal() {
    return this.precioFinal;
  }

  setFechaReserva(fecha) {
    this.fechaReserva = `${fecha.dia}/${fecha.mes}/${fecha.año}`;
  }
  getFechaReserva() {
    return this.fechaReserva;
  }

  setFechaEntrega(fecha) {
    this.fechaEntrega = `${fecha.dia}/${fecha.mes}/${fecha.año}`;
  }
  getFechaEntrega() {
    return this.fechaEntrega;
  }
  obtenerMarcas() {
    return this.marcas;
  }


}

export { Color, Version, Modelo, Marca, Reserva, Segmento, Cliente, Fecha };