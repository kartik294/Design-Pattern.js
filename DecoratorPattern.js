// 5. Decorator Pattern: Adding Functionality Dynamically

function Coffee() {
    this.cost = function () {
      return 5;
    };
  }
  function MilkDecorator(coffee) {
    this.cost = function () {
      return coffee.cost() + 2;
    };
  }
  
  function SugarDecorator(coffee) {
    this.cost = function () {
      return coffee.cost() + 1;
    };
  }
  
  // Usage
  var myCoffee = new Coffee();
  myCoffee = new MilkDecorator(myCoffee);
  myCoffee = new SugarDecorator(myCoffee);
  
  console.log(myCoffee.cost()); // 8

//   Explanation:

// The Decorator pattern dynamically adds functionality to objects. In this example, MilkDecorator and SugarDecorator enhance the cost calculation of a Coffee object.