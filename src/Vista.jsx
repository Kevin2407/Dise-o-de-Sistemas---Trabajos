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
    const cliente1 = new Cliente(43710873, 'Martín', 'Kevin', 'ayacucho 685', 'kevmartin2001@gmail.com', 3816791746)
    const reserva1 = new Reserva(cliente1);
    const controller = new AgenciaController(reserva1);
    controller.handleVehiculoChange = controller.handleVehiculoChange.bind(this);



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






    // CONTROLLERS


    // tiene que quedar la solicitud de reserva, que no se borre
    // hacer grilla con info de reservas
    // grupo11TP01


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


    // RENDERIZADO

    return (
      <>
        <div className='w-3/4 lg:w-1/2 mx-auto mt-12 mb-2'>
          <span className={' text-xs p-1 text-white rounded-lg cursor-pointer' + (isAdmin ? ' bg-[#36732c]' : ' bg-[#6e6e6e]')} onClick={() => this.setState({ isAdmin: !isAdmin })}>
            Admin
          </span>
        </div>


        <div className='flex flex-col sm:flex-row mx-auto gap-2 w-3/4 lg:w-1/2'>

          <form onSubmit={(e) => controller.handleSubmit(e, reserva1, this.state, this.setState.bind(this))} className='bg-white container rounded-xl p-8 flex flex-col gap-y-5'>
            <label className=' text-black font-bold ' htmlFor="marca">Marca:</label>
            <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="marca" name="marca" value={marca?.nombre} onChange={(e) => controller.handleVehiculoChange(e, reserva1, this.state, this.setState.bind(this))} required disabled={isAdmin} >
              {avance < 1 && <option value="">Seleccionar Marca</option>}
              {reserva1.obtenerMarcas().map((_marca) => (
                <option key={_marca.nombre} value={_marca.nombre}>{_marca.nombre}</option>
              ))}
            </select>
            <label className=' text-black font-bold' htmlFor="modelo">Modelo:</label>
            <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="modelo" name="modelo" value={modelo?.nombre} onChange={(e)=>controller.handleVehiculoChange(e, marca ,this.state, this.setState.bind(this))} required disabled={!(avance > 0) || isAdmin} >
              {avance < 2 && <option value="">Seleccionar Modelo</option>}
              {marca?.obtenerModelos().map((_modelo) => (
                <option key={_modelo.nombre} value={_modelo.nombre}>{_modelo.nombre}</option>
              ))}
            </select>

            <label className=' text-black font-bold' htmlFor="version">Versión:</label>
            <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="version" name="version" value={version?.nombre} onChange={(e)=>controller.handleVehiculoChange(e, modelo ,this.state, this.setState.bind(this))} required disabled={!(avance > 1) || isAdmin}>
              {avance < 3 && <option value="">Seleccionar Version</option>}
              {modelo?.obtenerVersiones().map((_version) => (
                <option key={_version.nombre} value={_version.nombre}>{_version.nombre}</option>
              ))}
            </select>

            <label className=' text-black font-bold' htmlFor="color">Color:</label>
            <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="color" name="color" value={color?.nombre} onChange={(e)=>controller.handleVehiculoChange(e, version ,this.state, this.setState.bind(this))} required disabled={!(avance > 2) || isAdmin}>
              {avance < 4 && <option value="">Seleccionar Color</option>}
              {version?.obtenerColores().map((_color) => (
                <option key={_color.color.nombre} value={_color.color.nombre}>{_color.color.nombre}</option>
              ))}
            </select>
            <button type="submit" className={'py-3 rounded-lg text-white' + (avance > 3 && !isAdmin ? ' bg-slate-950 hover:bg-slate-600 hover:border-slate-600 ' : ' bg-zinc-400 ')} disabled={!(avance > 2) || isAdmin}>Siguiente</button>
          </form>

          <div className='bg-white h-3/4 text-black container rounded-xl px-8'>
            <h2 className=' text-3xl font-bold my-2'>Solicitud de Reserva</h2>
            <p><span className='font-bold'>Marca: </span>{marca?.getNombre() || ' - '}</p>
            <p><span className='font-bold'>Modelo: </span>{modelo?.getNombre() || ' - '}</p>
            <p><span className='font-bold'>Versión: </span>{version?.getNombre() || ' - '}</p>
            <p><span className='font-bold'>Color: </span>{color?.getNombre() || ' - '}</p>
            <p><span className='font-bold'>Fecha de Reserva: </span>{vehiculo?.getFechaReserva() || ' - '}</p>
            <p><span className='font-bold'>Fecha de Entrega: </span>{vehiculo?.getFechaEntrega() || ' - '}</p>
            <p><span className='font-bold'>Precio del auto: </span>${vehiculo?.getPrecioAuto().toLocaleString('de-DE') || ' - '}</p>
            <p><span className='font-bold'>Precio del flete: </span>${vehiculo?.getPrecioFlete().toLocaleString('de-DE') || ' - '}</p>
            <p><span className='font-bold'>Precio final: </span>${vehiculo?.getPrecioFinal().toLocaleString('de-DE') || ' - '}</p>
            <button className={' py-1 px-3 rounded-lg text-white my-2 mr-1' + (avance < 5 || isAdmin ? ' bg-zinc-400' : ' bg-slate-950 hover:bg-slate-600 hover:border-slate-600')} onClick={(e) => controller.handleSolicitud(this.state, this.setState.bind(this),'Pendiente')} disabled={avance < 5 || isAdmin} >Aceptar</button>
            <button className={' py-1 px-3 rounded-lg text-white my-2 mr-1' + (avance < 5 || isAdmin ? ' bg-zinc-400' : ' bg-slate-950 hover:bg-slate-600 hover:border-slate-600')} onClick={(e) => controller.handleSolicitud(this.state, this.setState.bind(this),'Rechazado')} >Rechazar</button>
          </div>

        </div>



        <div className='bg-white text-black w-full sm:w-3/4 rounded-xl p-8 overflow-x-scroll mx-auto my-4'>
          <table className='w-[1200px]'>
            <thead>
              <tr>
                <th className='text-ms text-left'>Status</th>
                <th className='text-ms text-left'>Marca</th>
                <th className='text-ms text-left'>Modelo</th>
                <th className='text-ms text-left'>Versión</th>
                <th className='text-ms text-left'>Color</th>
                <th className='text-ms text-left'>Fecha de Reserva</th>
                <th className='text-ms text-left'>Fecha de Entrega</th>
                <th className='text-ms text-left'>Precio del auto</th>
                <th className='text-ms text-left'>Precio del flete</th>
                <th className='text-ms text-left'>Precio final</th>
                <th className='text-ms text-left'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {vehiculos.map((vehicle, i) => (
                <tr className=' align-top border-y max-h-[10px] overflow-y-hidden py-0' key={i}>
                  <td><span className={' text-xs p-1 text-white rounded-lg ' + (vehicle?.getStatus() === 'Aceptado' ? ' bg-[#36732c]' : vehicle?.getStatus() === null ? ' bg-[#af4242]' : vehicle?.getStatus() === 'Rechazado' ? ' bg-[#0c0c0c]' : ' bg-[#6e6e6e]')}>{vehicle?.getStatus() || 'Nulo'}</span></td>
                  <td className=' text-sm '>{vehicle?.getMarcaSeleccionada()}</td>
                  <td className=' text-sm '>{vehicle?.getModeloSeleccionado()}</td>
                  <td className=' text-sm '>{vehicle?.getVersionSeleccionada()}</td>
                  <td className=' text-sm '>{vehicle?.getColorSeleccionado()}</td>
                  <td className=' text-sm '>{vehicle?.getFechaReserva()}</td>
                  <td className=' text-sm '>{vehicle?.getFechaEntrega()}</td>
                  <td className=' text-sm '>{vehicle?.getPrecioAuto().toLocaleString('de-DE')}</td>
                  <td className=' text-sm '>{vehicle?.getPrecioFlete().toLocaleString('de-DE')}</td>
                  <td className=' text-sm '>{vehicle?.getPrecioFinal().toLocaleString('de-DE')}</td>
                  <td className=' text-sm '>
                    <button className={' bg-[#36732c] py-1 px-3 rounded-lg text-white hover:bg-slate-600 hover:border-slate-600 my-2 mr-1' + (!isAdmin || vehicle?.getStatus() === 'Rechazado' ? ' hidden' : '')} onClick={() => controller.adminChange(vehicle, this.setState.bind(this) , 'Aceptado', i)} >Aceptar</button>
                    <button className={' bg-[#af4242] py-1 px-3 rounded-lg text-white hover:bg-slate-600 hover:border-slate-600 my-2' + (!isAdmin || vehicle?.getStatus() === 'Rechazado' ? ' hidden' : '')} onClick={() => controller.adminChange(vehicle, this.setState.bind(this), null, i)} >Rechazar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


      </>
    );
  }
}

export default Vista;