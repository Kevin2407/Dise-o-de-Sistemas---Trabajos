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
    this.status = 'Pendiente';
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

  getStatus() {
    return this.status;
  }
  setStatus(status) {
    this.status = status;
  }


}

export default Reserva;