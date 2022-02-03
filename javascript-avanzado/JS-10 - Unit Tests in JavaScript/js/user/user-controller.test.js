const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user); 
    console.log(userController.getUsers());   
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test ('FindByEmail userController', () => {
    let email = 'alexis@gmail.com';
    let user = new User(12454, 'Alexis Glez',email);
      userController.add(user);
      expect(userController.findByEmail(email)).toEqual(user);
    });

    test ('FindById userController', () => {
      let id = 12343;
      let user = new User(id, 'Alexis Glez', 'alexis@gmail.com');
      userController.add(user);
      expect(userController.findById(id)).toEqual(user);

    })