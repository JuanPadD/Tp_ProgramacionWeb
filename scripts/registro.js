const USUARIOS = [];

class Usuario {
    constructor (nombre , apellido , username, password, email, metododepago){
        this.nombre = nombre;
        this.apellido = apellido;
        this.username = username;
        this.password = password;
        this.email = email;
        this.metododepago = metododepago;
    }

     agregarUsuario() {
        let lista_usuarios = localStorage.getItem(this.username, JSON.parse(USUARIOS));




        USUARIOS.push(this);
        localStorage.setItem(this.username, JSON.stringify(USUARIOS));
    }

} // fin de la class usuario