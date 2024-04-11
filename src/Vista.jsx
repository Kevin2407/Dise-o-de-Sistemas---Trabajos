import React, { Component } from 'react';

class Vista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehiculo: {
        marca: '',
        modelo: '',
        version: '',
        color: '',
      },
      cliente: {
        dni: '',
        apellido: '',
        nombre: '',
        direccion: '',
        email: '',
        celular: '',
        telefono: '',
      },
    };
  }

  marcas = ['Toyota', 'Ford', 'Chevrolet']; // Ejemplo de marcas de vehículos
  modelos = ['Corolla', 'Focus', 'Cruze']; // Ejemplo de modelos de vehículos
  versiones = ['SE', 'XLE', 'LT']; // Ejemplo de versiones de vehículos
  colores = ['Blanco', 'Negro', 'Rojo']; // Ejemplo de colores de vehículos

  handleSubmit = (e) => {
    e.preventDefault();
    const { realizarReserva } = this.props;
    realizarReserva(this.state.vehiculo, this.state.cliente);
    // Aquí podrías hacer alguna acción adicional, como limpiar los campos del formulario
  };

  handleVehiculoChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      vehiculo: {
        ...prevState.vehiculo,
        [name]: value,
      },
    }));
  };

  handleClienteChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      cliente: {
        ...prevState.cliente,
        [name]: value,
      },
    }));
  };

  render() {
    const { vehiculo, cliente } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className='flex flex-col gap-y-5'>
        <label className=' text-black font-bold ' htmlFor="marca">Marca:</label>
        <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="marca" name="marca" value={vehiculo.marca} onChange={this.handleVehiculoChange} required>
          <option value="">Seleccionar Marca</option>
          {this.marcas.map((marca) => (
            <option key={marca} value={marca}>{marca}</option>
          ))}
        </select>

        <label className=' text-black font-bold' htmlFor="modelo">Modelo:</label>
        <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="modelo" name="modelo" value={vehiculo.modelo} onChange={this.handleVehiculoChange} required>
          <option value="">Seleccionar Modelo</option>
          {this.modelos.map((modelo) => (
            <option key={modelo} value={modelo}>{modelo}</option>
          ))}
        </select>

        <label className=' text-black font-bold' htmlFor="version">Versión:</label>
        <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="version" name="version" value={vehiculo.version} onChange={this.handleVehiculoChange} required>
          <option value="">Seleccionar Versión</option>
          {this.versiones.map((version) => (
            <option key={version} value={version}>{version}</option>
          ))}
        </select>

        <label className=' text-black font-bold' htmlFor="color">Color:</label>
        <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="color" name="color" value={vehiculo.color} onChange={this.handleVehiculoChange} required>
          <option value="">Seleccionar Color</option>
          {this.colores.map((color) => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>

        {/* Otros campos del cliente */}
        {/* ... */}

        <button type="submit">Realizar Reserva</button>
      </form>
    );
  }
}

export default Vista;
