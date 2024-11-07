// Problem-7

class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Get the car age
  getCarAge(): number {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}

// Sample Input:
const car = new Car("Honda", "Civic", 2018);
car.getCarAge();