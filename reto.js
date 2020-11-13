class Car {
  //atributos
  constructor(color,marca,deportivo) {
    this.color = color
    this.marca = marca
    this.deportivo = deportivo
  }

  cambiarColor(nuevoColor) {
      this.color = nuevoColor;
  }

  prender() {
    console.log('El auto esta encendido')
  }
}

const tsuru = new Car('rojo', 'Nissan', false);
const r8 = new Car('negro', 'Audi', true);

console.log(tsuru);
console.log(tsuru.cambiarColor('Azul'));
console.log(tsuru);