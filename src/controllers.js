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


  // Métodos de la clase Controller
  handleVehiculoChange = (e,selector , state, setState) => {
    const { name, value } = e.target;
    let updatedState;

    switch (name) {
      case "marca":
        updatedState = {
          ...state,
          [name]: selector.obtenerMarcas().find(_marca => _marca.nombre === value),
          avance: 1,
        };
        break;
      case "modelo":
        updatedState = {
          ...state,
          [name]: selector.obtenerModelos().find(_modelo => _modelo.nombre === value),
          avance: 2,
        };
        break;
      case "version":
        updatedState = {
          ...state,
          [name]: selector.obtenerVersiones().find(_version => _version.nombre === value),
          avance: 3,
        };
        break;
      case "color":
        updatedState = {
          ...state,
          [name]: selector.obtenerColores().find(_color => _color.color.nombre === value).color,
          avance: 4,
        };
        break;
      default:
        updatedState = {
          ...state,
          [name]: value,
          avance: 0,
        };
        break;
    }
    setState(updatedState);
  };


  // tiene que quedar la solicitud de reserva, que no se borre
  // hacer grilla con info de reservas
  // grupo11TP01


  handleSubmit = (e,reserva, state, setState) => {
    e.preventDefault();
    const { marca, modelo, version, color } = state;
    const _cant = version.colores.find(col => col.color === color).cant;
    console.log(color)
    console.log(version.colores.find(col => col.color === color).cant)
    if (_cant > 0) {
      reserva.seleccionarMarca(marca.getNombre());
      reserva.seleccionarModelo(modelo.getNombre());
      reserva.seleccionarVersion(version.getNombre());
      reserva.seleccionarColor(color.getNombre());
      reserva.setPrecioFlete(version.obtenerSegmento().getPrecioFlete());
      reserva.setFechaReserva(
        new Fecha(
          new Date().getDate(),
          new Date().getMonth() + 1,
          new Date().getFullYear()
        )
      )
      reserva.setFechaEntrega( // la entrega es en una semana 
        new Fecha(
          new Date().getDate() + 7,
          new Date().getMonth() + 1,
          new Date().getFullYear()
        )
      )
      reserva.setPrecioAuto(version.obtenerPrecio());
      reserva.setPrecioFlete(version.obtenerSegmento().getPrecioFlete());
      reserva.setPrecioFinal((reserva.getPrecioAuto() + reserva.getPrecioFlete()) * 0.02 + (reserva.getPrecioAuto() + reserva.getPrecioFlete()));

      setState({
        ...this.state,
        vehiculo: reserva,
        avance: 5,
      });


      console.log(reserva)

    } else {
      alert('No papu, no hay stock de este color. Buscate otro');
    }
  }

  handleAceptar = () => {
    this.setState({
      ...this.state,
      vehiculos: [vehiculo, ...vehiculos],
      avance: 0,
      marca: null,
      modelo: null,
      version: null,
      color: null,
      vehiculo: null,
    });
  }

  handleRechazar = () => {
    vehiculo.setStatus('Rechazado');
    this.setState({
      ...this.state,
      vehiculos: [vehiculo, ...vehiculos],
      avance: 0,
      marca: null,
      modelo: null,
      version: null,
      color: null,
      vehiculo: null,
    });
  }

  adminAccept = (vehiculo, index) => {
    const v = vehiculo;
    v.setStatus('Aceptado');
    this.setState(prevState => ({
      ...prevState,
      vehiculos: prevState.vehiculos.map((v, i) => i === index ? vehiculo : v)
    }));
  }

  adminReject = (vehiculo, index) => {
    const v = vehiculo;
    v.setStatus(null);
    this.setState(prevState => ({
      ...prevState,
      vehiculos: prevState.vehiculos.map((v, i) => i === index ? vehiculo : v)
    }));
  }





}

export default Controller;