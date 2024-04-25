# Sistema de Reserva de Vehículos - Trabajo Práctico Número 1


Este repositorio contiene el código fuente y la documentación del Trabajo Práctico Número 1 de Diseño de Sistemas. El objetivo de este proyecto es desarrollar un sistema de reserva de vehículos.

## Link a la página
  ```
  https://master--tpdiseniosistemas.netlify.app/
  ```

## Grupo 11

- Martín, Kevin (53315)
- Agostini, Antonio Amado (50611)
- Flores, Lucas (52557)
- Cabrera, Tomas (50428)

## Estructura del repositorio

- `/src`: Carpeta que contiene el código fuente del sistema.
- `/src/styles`: Carpeta que contiene archivos CSS con estilos necesarios 
- `/src/model`: Carpeta que contiene archivos JS con las clases necesarias 
- `/src/controllers.js`: Archivo .js que contiene una clase con los metodos necesarios para manejar las reservas
- `/src/main.jsx`: Archivo.jsx que inicializa la app, declarando los objetos necesarios y llamando a la funcion que renderiza la vista
- `/src/ModeloDeDominio.jpeg`: Imagen con el modelo de dominio realizado en clase
- `/src/Vista.jsx`: Archivo .jsx que retorna un jsx (tipo de HTML) con la vista de la app

- El resto de archivos son necesarios para la configuracion del repositorio





## Instalación

1. Clona este repositorio en tu máquina local ejecutando el siguiente comando en tu terminal:

  ```
  git clone https://github.com/Kevin2407/Dise-o-de-Sistemas---Trabajos.git
  ```

2. Accede al directorio del proyecto:

  ```
  cd Sistema-de-Reserva-de-Vehiculos
  ```

3. Instala las dependencias del proyecto ejecutando el siguiente comando:

  ```
  npm install
  ```

4. Inicia la aplicación ejecutando el siguiente comando:

  ```
  npm start
  ```

  Esto iniciará la aplicación y podrás acceder a ella en tu navegador en la dirección `http://localhost:3000`.

¡Listo! Ahora has clonado el proyecto y lo has ejecutado en tu máquina local.

## Uso

1. Puedes seleccionar la marca, modelo, version y color de un vehiculo
2. Al presionar siguiente, se crea una solicitud de reserva esperando a ser aceptada
   1. En caso de ser rechazada, esta solicitud se guarda como reserva con estado Rechazado
   2. En caso de ser aprobada, esta solicitud se guarda como reserva con estado pendiente, esperando a que el administrador de la pagina (algun vendedor) confirme la reserva luego de hablar con el cliente
3. Para ingresar a modo admin solo basta con presionar el boton que dice admin arriba a la izquierda
4. Mientras esta en verde, aparecen unos botones de aceptar y confirmar a la derecha de las grillas que estan en estado pendiente
5. El admin puede cambiar el estado de una solicitud de aceptada a null y viceversa, pero no puede volverla a pendiente.


## Licencia

MIT License

Copyright (c) 2024 Kevin Martin
