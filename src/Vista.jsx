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
      marca: null,
      modelo: null,
      version: null,
      color: null,
      vehiculos: [],
      avance: 0,
    };
  }



  marcas = ['Toyota', 'Ford', 'Chevrolet']; // Ejemplo de marcas de vehículos
  modelos = ['Corolla', 'Focus', 'Cruze']; // Ejemplo de modelos de vehículos
  versiones = ['SE', 'XLE', 'LT']; // Ejemplo de versiones de vehículos
  colores = ['Blanco', 'Negro', 'Rojo']; // Ejemplo de colores de vehículos



  render() {
    const { marca, modelo, version, color, avance } = this.state;
    console.log(this.state)
    const cliente1 = new Cliente(43710873, 'Martín', 'Kevin', 'ayacucho 685', 'kevmartin2001@gmail.com', 3816791746)
    const reserva1 = new Reserva(cliente1);
    const controller = new AgenciaController(reserva1);



    // creacion de instancias de objetos



    // Creación de instancias de colores
    const Blanco = new Color('Blanco', 3);
    const Negro = new Color('Negro', 2);
    const Rojo = new Color('Rojo', 0);
    const Azul = new Color('Azul', 2);
    const Gris = new Color('Gris', 5);
    const Verde = new Color('Verde', 10);

    // Creación de instancias de versiones y asignación de colores
    const SR = new Version('SR');
    SR.agregarColor(Blanco);
    SR.agregarColor(Negro);

    const SRV = new Version('SRV');
    SRV.agregarColor(Rojo);
    SRV.agregarColor(Negro);

    const SE = new Version('SE');
    SE.agregarColor(Azul);
    SE.agregarColor(Gris);

    const XLE = new Version('XLE');
    XLE.agregarColor(Verde);
    XLE.agregarColor(Negro);

    const Freedom = new Version('Freedom');
    Freedom.agregarColor(Blanco);
    Freedom.agregarColor(Rojo);

    const Attractive = new Version('Attractive');
    Attractive.agregarColor(Negro);
    Attractive.agregarColor(Azul);

    const GT = new Version('GT');
    GT.agregarColor(Rojo);
    GT.agregarColor(Blanco);

    const S = new Version('S');
    S.agregarColor(Gris);
    S.agregarColor(Verde);

    const ZL1 = new Version('ZL1');
    ZL1.agregarColor(Negro);
    ZL1.agregarColor(Rojo);

    const LT = new Version('LT');
    LT.agregarColor(Azul);
    LT.agregarColor(Blanco);



    //modelos
    const Hilux = new Modelo('Hilux');
    Hilux.agregarVersion(SR);
    Hilux.agregarVersion(SRV);

    const Corolla = new Modelo('Corolla');
    Corolla.agregarVersion(SE);
    Corolla.agregarVersion(XLE);

    const Toro = new Modelo('Toro');
    Toro.agregarVersion(Freedom);

    const Punto = new Modelo('Punto');
    Punto.agregarVersion(Attractive);

    const Mustang = new Modelo('Mustang');
    Mustang.agregarVersion(GT);

    const Fiesta = new Modelo('Fiesta');
    Fiesta.agregarVersion(S);

    const Camaro = new Modelo('Camaro');
    Camaro.agregarVersion(ZL1);

    const Malibu = new Modelo('Malibu');
    Malibu.agregarVersion(LT);


    //Marcas
    const Toyota = new Marca('Toyota');
    Toyota.agregarModelo(Hilux);
    Toyota.agregarModelo(Corolla);

    const Fiat = new Marca('Fiat');
    Fiat.agregarModelo(Toro);
    Fiat.agregarModelo(Punto);

    const Ford = new Marca('Ford');
    Ford.agregarModelo(Mustang);
    Ford.agregarModelo(Fiesta);

    const Chevrolet = new Marca('Chevrolet');
    Chevrolet.agregarModelo(Camaro);
    Chevrolet.agregarModelo(Malibu);


    // reserva
    reserva1.agregarMarca(Toyota);
    reserva1.agregarMarca(Fiat);
    reserva1.agregarMarca(Ford);
    reserva1.agregarMarca(Chevrolet);










    const handleVehiculoChange = (e) => {
      const { name, value } = e.target;
      let updatedState;

      switch (name) {
        case "marca":
          updatedState = {
            ...this.state,
            [name]: reserva1.marcas.find(_marca => _marca.nombre === value),
            avance: 1,
          };
          break;
        case "modelo":
          updatedState = {
            ...this.state,
            [name]: marca.modelos.find(_modelo => _modelo.nombre === value),
            avance: 2,
          };
          break;
        case "version":
          updatedState = {
            ...this.state,
            [name]: modelo.versiones.find(_version => _version.nombre === value),
            avance: 3,
          };
          break;
        case "color":
          updatedState = {
            ...this.state,
            [name]: version.colores.find(_color => _color.nombre === value),
            avance: 4,
          };
          break;
        default:
          updatedState = {
            ...this.state,
            [name]: value,
            avance: 0,
          };
          break;
      }

      this.setState(updatedState);
    };

    const handleSubmit = (e) => {
      e.preventDefault();

    }



    return (
      <>
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-5'>
          <label className=' text-black font-bold ' htmlFor="marca">Marca:</label>
          <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="marca" name="marca" value={marca?.nombre} onChange={handleVehiculoChange} required >
            {avance < 1 && <option value="">Seleccionar Marca</option>}
            {reserva1.marcas.map((_marca) => (
              <option key={_marca.nombre} value={_marca.nombre}>{_marca.nombre}</option>
            ))}
          </select>
          <label className=' text-black font-bold' htmlFor="modelo">Modelo:</label>
          <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="modelo" name="modelo" value={modelo?.nombre} onChange={handleVehiculoChange} required disabled={!(avance > 0)} >
            {avance < 2 && <option value="">Seleccionar Modelo</option>}
            {marca?.modelos.map((_modelo) => (
              <option key={_modelo.nombre} value={_modelo.nombre}>{_modelo.nombre}</option>
            ))}
          </select>

          <label className=' text-black font-bold' htmlFor="version">Versión:</label>
          <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="version" name="version" value={version?.nombre} onChange={handleVehiculoChange} required disabled={!(avance > 1)}>
            {avance < 3 && <option value="">Seleccionar Version</option>}
            {modelo?.versiones.map((_version) => (
              <option key={_version.nombre} value={_version.nombre}>{_version.nombre}</option>
            ))}
          </select>

          <label className=' text-black font-bold' htmlFor="color">Color:</label>
          <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="color" name="color" value={color?.nombre} onChange={handleVehiculoChange} required disabled={!(avance > 2)}>
            {avance < 4 && <option value="">Seleccionar Color</option>}
            {version?.colores.map((_color) => (
              <option key={_color.nombre} value={_color.nombre}>{_color.nombre}</option>
            ))}
          </select>
          <button type="submit" className={avance > 3 ? ' hover:bg-slate-600 ' : ' bg-zinc-400 text-white'} disabled={!(avance > 2)}>Realizar Reserva</button>
        </form>

      </>
    );
  }
}

export default Vista;