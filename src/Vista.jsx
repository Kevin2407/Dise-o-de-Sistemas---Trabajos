import React, { Component } from 'react';
import Reserva from './model/Reserva.jsx';
import Cliente from './model/Cliente.jsx';
import Fecha from './model/Fecha.jsx';
import Marca from './model/Marca.jsx';
import Modelo from './model/Modelo.jsx';
import Version from './model/Version.jsx';
import Color from './model/Color.jsx';
import Segmento from './model/Segmento.jsx';
import AgenciaController from './controllers.js'

class Vista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marca: null,
      modelo: null,
      version: null,
      color: null,
      vehiculo: null,
      vehiculos: [],
      avance: 0,
      isAdmin: false,
    };
  }


  render() {
    const { marca, modelo, version, color, vehiculo, vehiculos, avance, isAdmin } = this.state;
    console.log(this.state)
    const cliente1 = new Cliente(43710873, 'Martín', 'Kevin', 'ayacucho 685', 'kevmartin2001@gmail.com', 3816791746)
    const reserva1 = new Reserva(cliente1);
    const controller = new AgenciaController(reserva1);



    // Creación de instancias de segmentos
    const Compacto = new Segmento('Compacto', 20000);
    const Mediano = new Segmento('Mediano', 30000);
    const Grande = new Segmento('Grande', 50000);
    const SUV = new Segmento('SUV', 60000);




    // Creación de instancias de colores
    const Blanco = new Color('Blanco');
    const Negro = new Color('Negro');
    const Rojo = new Color('Rojo');
    const Azul = new Color('Azul');
    const Gris = new Color('Gris');
    const Verde = new Color('Verde');

    // Creación de instancias de versiones y asignación de segmentos y colores
    const SR = new Version('SR', Compacto, 30000000);
    SR.agregarColor(Blanco, 1);
    SR.agregarColor(Negro, 2);

    const SRV = new Version('SRV', Grande, 50000000);
    SRV.agregarColor(Rojo, 5);
    SRV.agregarColor(Negro, 3);

    const SE = new Version('SE', Compacto, 30000000);
    SE.agregarColor(Azul, 0);
    SE.agregarColor(Gris, 4);

    const XLE = new Version('XLE', Compacto, 30000000);
    XLE.agregarColor(Verde, 0);
    XLE.agregarColor(Negro, 0);

    const Freedom = new Version('Freedom', SUV, 70000000);
    Freedom.agregarColor(Blanco, 3);
    Freedom.agregarColor(Rojo, 2);

    const Attractive = new Version('Attractive', SUV, 70000000);
    Attractive.agregarColor(Negro, 0);
    Attractive.agregarColor(Azul, 8);

    const GT = new Version('GT', SUV, 70000000);
    GT.agregarColor(Rojo, 6);
    GT.agregarColor(Blanco, 3);

    const S = new Version('S', Grande, 50000000);
    S.agregarColor(Gris, 1);
    S.agregarColor(Verde, 0);

    const ZL1 = new Version('ZL1', SUV, 70000000);
    ZL1.agregarColor(Negro, 8);
    ZL1.agregarColor(Rojo, 5);

    const LT = new Version('LT', Compacto, 30000000);
    LT.agregarColor(Azul, 3);
    LT.agregarColor(Blanco, 0);


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


    console.log(Fiat)







    const handleVehiculoChange = (e) => {
      const { name, value } = e.target;
      let updatedState;

      switch (name) {
        case "marca":
          updatedState = {
            ...this.state,
            [name]: reserva1.obtenerMarcas().find(_marca => _marca.nombre === value),
            avance: 1,
          };
          break;
        case "modelo":
          updatedState = {
            ...this.state,
            [name]: marca.obtenerModelos().find(_modelo => _modelo.nombre === value),
            avance: 2,
          };
          break;
        case "version":
          updatedState = {
            ...this.state,
            [name]: modelo.obtenerVersiones().find(_version => _version.nombre === value),
            avance: 3,
          };
          break;
        case "color":
          updatedState = {
            ...this.state,
            [name]: version.obtenerColores().find(_color => _color.color.nombre === value).color,
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
      const _cant = version.colores.find(col => col.color === color).cant;
      console.log(color)
      console.log(version.colores.find(col => col.color === color).cant)
      if (_cant > 0) {
        reserva1.seleccionarMarca(marca.getNombre());
        reserva1.seleccionarModelo(modelo.getNombre());
        reserva1.seleccionarVersion(version.getNombre());
        reserva1.seleccionarColor(color.getNombre());
        reserva1.setPrecioFlete(version.obtenerSegmento().getPrecioFlete());
        reserva1.setFechaReserva(
          new Fecha(
            new Date().getDate(),
            new Date().getMonth() + 1,
            new Date().getFullYear()
          )
        )
        reserva1.setFechaEntrega( // la entrega es en una semana 
          new Fecha(
            new Date().getDate() + 7,
            new Date().getMonth() + 1,
            new Date().getFullYear()
          )
        )
        reserva1.setPrecioAuto(version.obtenerPrecio());
        reserva1.setPrecioFlete(version.obtenerSegmento().getPrecioFlete());
        reserva1.setPrecioFinal((reserva1.getPrecioAuto() + reserva1.getPrecioFlete()) * 0.02 + (reserva1.getPrecioAuto() + reserva1.getPrecioFlete()));

        this.setState({
          ...this.state,
          vehiculo: reserva1,
          avance: 5,
        });


        console.log(reserva1)

      } else {
        alert('No capo, no hay stock de este color');
      }
    }

    const handleAceptar = () => {
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
    const handleRechazar = () => {
      this.setState({
        ...this.state,
        avance: 0,
        marca: null,
        modelo: null,
        version: null,
        color: null,
        vehiculo: null,
      });
    }

    const adminAccept = (vehiculo, index) => {
      const v = vehiculo;
      v.setStatus('Aceptado');
      this.setState(prevState => ({
        ...prevState,
        vehiculos: prevState.vehiculos.map((v, i) => i === index ? vehiculo : v)
      })); 
    }

    const adminReject = (vehiculo, index) => {
      const v = vehiculo;
      v.setStatus(null);
      this.setState(prevState => ({
        ...prevState,
        vehiculos: prevState.vehiculos.map((v, i) => i === index ? vehiculo : v)
      }));
    }

    console.log(JSON.stringify(vehiculos))

    return (
      <>
        <div className='w-3/4 sm:w-1/2 mx-auto mt-12'>
          <span className={' text-xs p-1 text-white rounded-lg cursor-pointer' + ( isAdmin ? ' bg-[#36732c]' : ' bg-[#6e6e6e]')} onClick={() => this.setState({ isAdmin: !isAdmin })}>
            Admin
          </span>
        </div>
        <form onSubmit={handleSubmit} className='bg-white w-3/4 sm:w-1/2 container mx-auto mt-2 rounded-xl p-8 flex flex-col gap-y-5'>
          <label className=' text-black font-bold ' htmlFor="marca">Marca:</label>
          <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="marca" name="marca" value={marca?.nombre} onChange={handleVehiculoChange} required disabled={isAdmin} >
            {avance < 1 && <option value="">Seleccionar Marca</option>}
            {reserva1.obtenerMarcas().map((_marca) => (
              <option key={_marca.nombre} value={_marca.nombre}>{_marca.nombre}</option>
            ))}
          </select>
          <label className=' text-black font-bold' htmlFor="modelo">Modelo:</label>
          <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="modelo" name="modelo" value={modelo?.nombre} onChange={handleVehiculoChange} required disabled={!(avance > 0) || isAdmin} >
            {avance < 2 && <option value="">Seleccionar Modelo</option>}
            {marca?.obtenerModelos().map((_modelo) => (
              <option key={_modelo.nombre} value={_modelo.nombre}>{_modelo.nombre}</option>
            ))}
          </select>

          <label className=' text-black font-bold' htmlFor="version">Versión:</label>
          <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="version" name="version" value={version?.nombre} onChange={handleVehiculoChange} required disabled={!(avance > 1) || isAdmin}>
            {avance < 3 && <option value="">Seleccionar Version</option>}
            {modelo?.obtenerVersiones().map((_version) => (
              <option key={_version.nombre} value={_version.nombre}>{_version.nombre}</option>
            ))}
          </select>

          <label className=' text-black font-bold' htmlFor="color">Color:</label>
          <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="color" name="color" value={color?.nombre} onChange={handleVehiculoChange} required disabled={!(avance > 2) || isAdmin}>
            {avance < 4 && <option value="">Seleccionar Color</option>}
            {version?.obtenerColores().map((_color) => (
              <option key={_color.color.nombre} value={_color.color.nombre}>{_color.color.nombre}</option>
            ))}
          </select>
          <button type="submit" className={'py-3 rounded-lg text-white' + (avance > 3 && !isAdmin ? ' bg-slate-950 hover:bg-slate-600 hover:border-slate-600 ' : ' bg-zinc-400 ')} disabled={!(avance > 2) || isAdmin}>Siguiente</button>
        </form>

        <div className='overflow-x-scroll h-[385px] w-3/4 sm:w-1/2 container mx-auto my-16 rounded-xl border border-white py-2 px-8 flex gap-x-5'>
          {
            avance > 4 && (
              <div className='bg-white  text-black min-w-[345px] rounded-xl px-8'>
                <h2 className=' text-3xl font-bold my-2'>Solicitud de Reserva</h2>
                <p><span className='font-bold'>Marca: </span>{vehiculo?.getMarcaSeleccionada()}</p>
                <p><span className='font-bold'>Modelo: </span>{vehiculo?.getModeloSeleccionado()}</p>
                <p><span className='font-bold'>Versión: </span>{vehiculo?.getVersionSeleccionada()}</p>
                <p><span className='font-bold'>Color: </span>{vehiculo?.getColorSeleccionado()}</p>
                <p><span className='font-bold'>Fecha de Reserva: </span>{vehiculo?.getFechaReserva()}</p>
                <p><span className='font-bold'>Fecha de Entrega: </span>{vehiculo?.getFechaEntrega()}</p>
                <p><span className='font-bold'>Precio del auto: </span>{vehiculo?.getPrecioAuto().toLocaleString('de-DE')}</p>
                <p><span className='font-bold'>Precio del flete: </span>{vehiculo?.getPrecioFlete().toLocaleString('de-DE')}</p>
                <p><span className='font-bold'>Precio final: </span>{vehiculo?.getPrecioFinal().toLocaleString('de-DE')}</p>
                <button className=' bg-slate-950 py-1 px-3 rounded-lg text-white hover:bg-slate-600 hover:border-slate-600 my-2 mr-1' onClick={handleAceptar} >Aceptar</button>
                <button className=' bg-slate-950 py-1 px-3 rounded-lg text-white hover:bg-slate-600 hover:border-slate-600 my-2' onClick={handleRechazar} >Rechazar</button>
              </div>
            )
          }

          {
            vehiculos.map((vehicle, i) => {
              return (
                <div className='bg-white text-black min-w-[345px] rounded-xl px-8 ' key={i}>
                  <h2 className=' text-3xl font-bold my-2'>Reserva pendiente</h2>
                  <span className={' text-xs p-1 text-white rounded-lg ' + (vehicle?.getStatus() === 'Aceptado' ? ' bg-[#36732c]' : vehicle?.getStatus() === null ? ' bg-[#af4242]' : ' bg-[#6e6e6e]')}>{vehicle?.getStatus() || 'Nulo'}</span>
                  <p><span className='font-bold'>Marca: </span>{vehicle?.getMarcaSeleccionada()}</p>
                  <p><span className='font-bold'>Modelo: </span>{vehicle?.getModeloSeleccionado()}</p>
                  <p><span className='font-bold'>Versión: </span>{vehicle?.getVersionSeleccionada()}</p>
                  <p><span className='font-bold'>Color: </span>{vehicle?.getColorSeleccionado()}</p>
                  <p><span className='font-bold'>Fecha de Reserva: </span>{vehicle?.getFechaReserva()}</p>
                  <p><span className='font-bold'>Fecha de Entrega: </span>{vehicle?.getFechaEntrega()}</p>
                  <p><span className='font-bold'>Precio del auto: </span>{vehicle?.getPrecioAuto().toLocaleString('de-DE')}</p>
                  <p><span className='font-bold'>Precio del flete: </span>{vehicle?.getPrecioFlete().toLocaleString('de-DE')}</p>
                  <p><span className='font-bold'>Precio final: </span>{vehicle?.getPrecioFinal().toLocaleString('de-DE')}</p>
                  <button className={' bg-[#36732c] py-1 px-3 rounded-lg text-white hover:bg-slate-600 hover:border-slate-600 my-2 mr-1' + (!isAdmin ? ' hidden' : '')} onClick={() => adminAccept(vehicle,i) } >Aceptar</button>
                  <button className={' bg-[#af4242] py-1 px-3 rounded-lg text-white hover:bg-slate-600 hover:border-slate-600 my-2' + (!isAdmin ? ' hidden' : '')} onClick={() => adminReject(vehicle, i)} >Rechazar</button>
                </div>
              );
            })
          }

          {
            avance <= 4 && vehiculos.length === 0 &&
            <h1 className='m-auto text-white font-bold'>No hay reservas</h1>
            // RESERVAS DE PRUEBA
            // Array.from({ length: 7 }, (_, i) => (
            //   <div className='bg-white text-black min-w-[345px] rounded-xl px-8' key={i}>
            //     <h2 className=' text-3xl font-bold my-2'>Reserva pendiente</h2>
            //     <p><span className='font-bold'>Marca: </span>hola</p>
            //     <p><span className='font-bold'>Modelo: </span>holaa</p>
            //     <p><span className='font-bold'>Versión: </span>holaa</p>
            //     <p><span className='font-bold'>Color: </span>holaa</p>
            //     <p><span className='font-bold'>Fecha de Reserva: </span></p>
            //     <p><span className='font-bold'>Fecha de Entrega: </span></p>
            //     <p><span className='font-bold'>Precio del auto: </span>holaaa</p>
            //     <p><span className='font-bold'>Precio del flete: </span>holaaa</p>
            //     <p><span className='font-bold'>Precio final: </span>holaaa</p>
            //   </div>
            // ))
          }

        </div>

      </>
    );
  }
}

export default Vista;