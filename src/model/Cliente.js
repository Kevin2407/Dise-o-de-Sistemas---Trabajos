import Persona from './Persona.js';

class Cliente extends Persona {
  constructor(dni, apellido, nombre, direccion, email, celular) {
    super(dni, apellido, nombre, direccion, email, celular);
  }
}

export default Cliente;