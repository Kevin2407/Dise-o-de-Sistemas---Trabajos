// Modelo
class UserModel {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    save() {
        // Lógica para guardar el usuario en la base de datos
        console.log('Usuario guardado:', this.name, this.email);
    }
}

// Vista
class UserView {
    displayUserDetails(name, email) {
        // Mostrar detalles del usuario en la interfaz
        console.log('Nombre:', name);
        console.log('Correo electrónico:', email);
    }
}

// Controlador
class UserController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    addUser(name, email) {
        const newUser = new this.model(name, email);
        newUser.save();
        this.view.displayUserDetails(newUser.name, newUser.email);
    }
}

// Uso
const userModel = new UserModel();
const userView = new UserView();
const userController = new UserController(userModel, userView);

userController.addUser('Juan', 'juan@example.com');
