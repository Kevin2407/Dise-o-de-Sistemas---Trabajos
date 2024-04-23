class Fecha {
  constructor(dia, mes, año) {
    this.dia = dia;
    this.mes = mes;
    this.año = año;
  }

  formatearFecha() {
    return `${this.dia}/${this.mes}/${this.año}`;
  }
}

export default Fecha;