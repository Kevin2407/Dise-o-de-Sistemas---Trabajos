import React, { Component } from 'react';
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
import AgenciaController from './controllers.js'

class Vista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marca: '',
      modelo: '',
      version: '',
      color: '',
      vehiculos: [],
      avance: 0,
    };
  }

  handleVehiculoChange = (e) => {
    const { name, value } = e.target;
    console.log(name)
    this.setState((prevState) => ({
        ...prevState,
        [name]: value,
      avance: name === "marca" ? 1 : name === "modelo" ? 2 : name === "version" ? 3 : name === "color" ? 4 : name === "" ? 0 : 0 ,
    }));
  };

  marcas = ['Toyota', 'Ford', 'Chevrolet']; // Ejemplo de marcas de vehículos
  modelos = ['Corolla', 'Focus', 'Cruze']; // Ejemplo de modelos de vehículos
  versiones = ['SE', 'XLE', 'LT']; // Ejemplo de versiones de vehículos
  colores = ['Blanco', 'Negro', 'Rojo']; // Ejemplo de colores de vehículos



  render() {
    const { marca, modelo, version, color, avance } = this.state;
    const { realizarReserva } = this.props;
    const controller = new AgenciaController();
    console.log(this.state)
    const cliente1 = new Cliente(43710873, 'Martín', 'Kevin', 'ayacucho 685', 'kevmartin2001@gmail.com', 3816791746)
    const reserva1 = new Reserva(cliente1);
    console.log(avance)


    return (
      <>
        <form onSubmit={this.handleSubmit} className='flex flex-col gap-y-5'>
          <label className=' text-black font-bold ' htmlFor="marca">Marca:</label>
          <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="marca" name="marca" value={marca} onChange={this.handleVehiculoChange} required >
            {  avance<1 && <option value="">Seleccionar Marca</option>  }
            {this.marcas.map((_marca) => (
              <option key={_marca} value={_marca}>{_marca}</option>
            ))}
          </select>
          <label className=' text-black font-bold' htmlFor="modelo">Modelo:</label>
          <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="modelo" name="modelo" value={modelo} onChange={this.handleVehiculoChange} required disabled={!(avance>0)} >
            {avance < 2 && <option value="">Seleccionar Modelo</option>}
            {this.modelos.map((_modelo) => (
              <option key={_modelo} value={_modelo}>{_modelo}</option>
            ))}
          </select>

          <label className=' text-black font-bold' htmlFor="version">Versión:</label>
          <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="version" name="version" value={version} onChange={this.handleVehiculoChange} required disabled={!(avance > 1)}>
            {avance < 3 && <option value="">Seleccionar Version</option>}
            {this.versiones.map((_version) => (
              <option key={_version} value={_version}>{_version}</option>
            ))}
          </select>

          <label className=' text-black font-bold' htmlFor="color">Color:</label>
          <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="color" name="color" value={color} onChange={this.handleVehiculoChange} required disabled={!(avance > 2)}>
            {avance < 4 && <option value="">Seleccionar Color</option>}
            {this.colores.map((_color) => (
              <option key={_color} value={_color}>{_color}</option>
            ))}
          </select>
          <button type="submit">Realizar Reserva</button>
        </form>

      </>
    );
  }
}

export default Vista;
