class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDescription() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, range) {
    super(make, model, year);
    this.range = range;
  }

  getDescription() {
    return `${super.getDescription()} - Range: ${this.range} miles`;
  }
}

class SUV extends Car {
  constructor(make, model, year, seatingCapacity) {
    super(make, model, year);
    this.seatingCapacity = seatingCapacity;
  }

  getDescription() {
    return `${super.getDescription()} - Seating Capacity: ${
      this.seatingCapacity
    }`;
  }
}

// Define more vehicle types and classes here, e.g., Motorcycle, Truck, etc.

// Create an assembly line function
function assemblyLine() {
  const vehicles = [];

  // Add different types of vehicles to the assembly line
  vehicles.push(new ElectricCar("Tesla", "Model S", 2019, 300));
  vehicles.push(new SUV("Ford", "Explorer", 2021, 7));
  // Add more vehicles to the assembly line

  return vehicles;
}

// Test the assembly line
const assemblyLineVehicles = assemblyLine();
assemblyLineVehicles.forEach((vehicle) => {
  console.log(vehicle.getDescription());
});
