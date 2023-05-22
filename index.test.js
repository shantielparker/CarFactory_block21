// index.test.js

const { Car, ElectricCar } = require('./index');

describe('Car', () => {
  test('getDescription should return the correct string', () => {
    const car = new Car('Toyota', 'Camry', 2022);
    expect(car.getDescription()).toBe('2022 Toyota Camry');
  });
});

describe('ElectricCar', () => {
  test('getDescription should return the correct string with range', () => {
    const electricCar = new ElectricCar('Tesla', 'Model S', 2019, 300);
    expect(electricCar.getDescription()).toBe('2019 Tesla Model S - Range: 300 miles');
  });
});




  