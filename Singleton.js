function Singleton() {
    var instance;
  
    function createInstance() {
      // Private constructor logic here
      return { 
        // Singleton instance properties/methods 
        message: "I am a Singleton instance"
      };
    }
  
    Singleton.getInstance = function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    };
  }
  
  // Usage
  var instance1 = Singleton.getInstance();
  var instance2 = Singleton.getInstance();
  
  console.log(instance1 === instance2); // true
  console.log(instance1.message); // "I am a Singleton instance"
  console.log(instance2.message); // "I am a Singleton instance"
  
  

//   Explanation:

// The Singleton pattern restricts instantiation to a single instance and provides a global access point. In this example, createInstance is a private function that constructs the Singleton object. The getInstance method ensures only one instance is created and returned.

