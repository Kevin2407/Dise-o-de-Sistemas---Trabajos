import React from 'react'
import ReactDOM from 'react-dom/client'
import Vista from './Vista.jsx'
import './styles/index.css'
import Reserva from './model/Reserva.jsx';
import Cliente from './model/Cliente.jsx';
import Marca from './model/Marca.jsx';
import Modelo from './model/Modelo.jsx';
import Version from './model/Version.jsx';
import Color from './model/Color.jsx';
import Segmento from './model/Segmento.jsx';
import AgenciaController from './controllers.js'


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



const data = {
  reserva1: reserva1,
  controller: controller,
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-[#242424] m-0 flex flex-col min-h-[100vh] min-w-[320px]'>
      <Vista data={data}/>
    </div>
  </React.StrictMode>,
)
