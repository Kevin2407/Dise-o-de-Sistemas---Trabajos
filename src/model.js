export class Reserva {
  constructor(cliente) {
    this.cliente = cliente;
    this.fechaReserva = null;
    this.fechaEntrega = null;
    this.marcas = ['Toyota', 'Ford', 'Chevrolet']
    this.marca = null;
    this.modelo = null;
    this.version = null;
    this.color = null;
  }

  getFechaReserva() {
    return this.fechaReserva
  }
  setFechaReserva(fecha) {
    this.fechaReserva = fecha;
  }

  getFechaEntrega() {
    return this.fechaEntrega
  }
  setFechaEntrega(fecha) {
    this.fechaEntrega = fecha;
  }

  getMarcas() {
    return this.marcas
  }

  getMarca() {
    return this.marca
  }
  setMarca(marca) {
    this.marca = marca;
  }


}

export class Fecha {
  constructor(dia, mes, año) {
    this.dia = dia;
    this.mes = mes;
    this.año = año;
  }
}

export class Cliente {
  constructor(dni, apellido, nombre, direccion, email, celular) {
    this.dni = dni;
    this.apellido = apellido;
    this.nombre = nombre;
    this.direccion = direccion;
    this.email = email;
    this.celular = celular;
  }
}

export class Marca {
  constructor(nombre) {
    this.nombre = nombre;
    this.modelos = ['Corolla', 'Focus', 'Cruze'];
  }
}

export class Modelo {
  constructor(nombre) {
    this.nombre = nombre;
    this.versiones = ['SE', 'XLE', 'LT'];
  }
}

export class Version {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.colores = ['Blanco', 'Negro', 'Rojo']
    this.segmento = null;
  }
}

export class Color {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

export class Segmento {
  constructor(nombre, precioFlete) {
    this.nombre = nombre;
    this.precioFlete = precioFlete;
    this.precioPatentado = null; // Se calcula como un 2% sobre el precio final sin flete
  }
}
