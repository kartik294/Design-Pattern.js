// 4. Factory Pattern: Creating Objects Seamlessly
function Car(model, year) {
    this.model = model;
    this.year = year;
  }
  function CarFactory() {
    this.createCar = function (model, year) {
      return new Car(model, year);
    };
  }
  
  // Usage
  var factory = new CarFactory();
  var car1 = factory.createCar('Toyota', 2022);
  var car2 = factory.createCar('Honda', 2021);
//   Explanation:

// The Factory pattern provides an interface for creating objects. Here, CarFactory encapsulates the logic for creating Car instances, promoting loose coupling and code flexibility.