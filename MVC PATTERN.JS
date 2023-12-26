// MVC Pattern: Separation of Concerns

// Model
function UserModel() {
    this.data = [];
  this.addData = function (item) {
      this.data.push(item);
    };
  }
  // View
  function UserView(model) {
    this.render = function () {
      console.log('Rendered user data:', model.data);
    };
  }
  // Controller
  function UserController(model, view) {
    this.addUser = function (user) {
      model.addData(user);
      view.render();
    };
  }
  // Usage
  var userModel = new UserModel();
  var userView = new UserView(userModel);
  var userController = new UserController(userModel, userView);
  userController.addUser('John Doe');

//   Explanation:

// The MVC pattern separates concerns in an application. UserModel handles data, UserView renders the data, and UserController manages user interactions, ensuring a clean and organized structure.

