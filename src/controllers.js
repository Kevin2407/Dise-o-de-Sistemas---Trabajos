import {
  Reserva,
  Cliente,
  Fecha,
  Marca,
  Modelo,
  Version,
  Color,
  Segmento
} from './model.js'


// Componente de Controlador
class AgenciaController {

  handleSubmit = (e) => {
    e.preventDefault();
    const { realizarReserva } = this.props;

  };

  handleVehiculoChange = (e, setMarca) => {
    const { name, value } = e.target;
    setMarca(value);
  };


}

export default AgenciaController;