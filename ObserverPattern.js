// Observer Pattern: Responding to Changes Efficiently

function Subject() {
    this.observers = [];
  this.addObserver = function (observer) {
      this.observers.push(observer);
    };
    this.notifyObservers = function () {
      this.observers.forEach(function (observer) {
        observer.update();
      });
    };
  }
  function Observer() {
    this.update = function () {
      console.log('State updated');
    };
  }
  // Usage
  var subject = new Subject();
  var observer1 = new Observer();
  var observer2 = new Observer();
  subject.addObserver(observer1);
  subject.addObserver(observer2);
  subject.notifyObservers(); // 'State updated' (logged for bothobservers)

//   Explanation:

// The Observer pattern establishes a dependency between objects. In this example, the Subject maintains a list of observers and notifies them when its state changes. Observers, like observer1 and observer2, respond to the update.