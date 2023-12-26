//ModulePattern.js
var Module = (function () {
    var privateVariable = 'I am private';
  function privateMethod() {
      console.log('This is private');
    }
    return {
      publicVariable: 'I am public',
      publicMethod: function () {
        console.log('This is public');
      }
    };
  })();
  // Usage
  console.log(Module.publicVariable); // 'I am public'
  Module.publicMethod(); // 'This is public'
  console.log(Module.privateVariable); // undefined (cannot access private variable)
  Module.privateMethod(); // Error (cannot call private method)
//   Explanation:

// The Module pattern encapsulates private variables and functions, exposing only the necessary parts publicly. This enhances code organization and prevents pollution of the global namespace.