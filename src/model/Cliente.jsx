import Persona from './Persona';

class Cliente extends Persona {
  constructor(dni, apellido, nombre, direccion, email, celular) {
    super(dni, apellido, nombre, direccion, email, celular);
  }
}

export default Cliente;