import Reserva from './model/Reserva.jsx';
import Cliente from './model/Cliente.jsx';
import Fecha from './model/Fecha.jsx';
import Marca from './model/Marca.jsx';
import Modelo from './model/Modelo.jsx';
import Version from './model/Version.jsx';
import Color from './model/Color.jsx';
import Segmento from './model/Segmento.jsx';

class Controller {
  constructor(reserva) {
    this.reserva = reserva;
  }

  agregarMarca(nombre) {
    const marca = new Marca(nombre);
    this.reserva.agregarMarca(marca);
  }

  seleccionarMarca(nombre) {
    this.reserva.seleccionarMarca(nombre);
  }

  agregarModelo(nombreMarca, nombreModelo) {
    const modelo = new Modelo(nombreModelo);
    const marca = this.reserva.obtenerMarca(nombreMarca);
    marca.agregarModelo(modelo);
  }

  seleccionarModelo(nombre) {
    this.reserva.seleccionarModelo(nombre);
  }

  agregarVersion(nombreModelo, nombreVersion) {
    const version = new Version(nombreVersion);
    const modelo = this.reserva.marcaSeleccionada.obtenerModelo(nombreModelo);
    modelo.agregarVersion(version);
  }

  seleccionarVersion(nombre) {
    this.reserva.seleccionarVersion(nombre);
  }

  agregarColor(nombreVersion, nombreColor, cantidad) {
    const color = new Color(nombreColor, cantidad);
    const version = this.reserva.modeloSeleccionado.obtenerVersion(nombreVersion);
    version.agregarColor(color);
  }

  seleccionarColor(nombre) {
    this.reserva.seleccionarColor(nombre);
  }

  asignarSegmento(nombreVersion, nombreSegmento, precioFlete) {
    const segmento = new Segmento(nombreSegmento, precioFlete);
    const version = this.reserva.modeloSeleccionado.obtenerVersion(nombreVersion);
    version.asignarSegmento(segmento);
  }
}

export default Controller;