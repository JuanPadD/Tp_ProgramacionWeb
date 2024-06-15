const USUARIOS = [];
const CAMPO_NOMBRE = document.getElementById('name');
const CAMPO_APELLIDO = document.getElementById('lastname');
const CAMPO_USERNAME = document.getElementById('username');
const CAMPO_CLAVE = document.getElementById('pass');
const CAMPO_REP_CLAVE = document.getElementById('repass');
const CAMPO_MAIL = document.getElementById('mail');
const INPUT_TARJETA = document.getElementById('cbox1');
const INPUT_TARJETA_NUMERO = document.getElementById('card_number');
// INPUT_TARJETA_NUMERO.classList.add("ocultar");
const INPUT_TARJETA_CVV = document.getElementById('sec_code');
// INPUT_TARJETA_CVV.classList.add("ocultar");
const INPUT_PAGOFACIL = document.getElementById('cbox2');
const INPUT_RAPIPAGO = document.getElementById('cbox3');
const INPUT_CBU = document.getElementById('cbox4');
const BOTON_REGISTRAR = document.getElementById('registrarbutton');
let verify = false;
const REGEX_SOLO_LETRAS = /^[A-Za-z]+$/;
const REGEX_ALFANUMERICO = /^[A-Za-z0-9]+$/;
let nuevo_nombre_usuario; // VARIABLE PARA GENERAR EL NUEVO USUARIO Y PASARLA POR PARAMETRO AL CONSTRUCTOR
let nuevo_apellido_usuario; // VARIABLE PARA GENERAR EL NUEVO USUARIO Y PASARLA POR PARAMETRO AL CONSTRUCTOR
let nuevo_username_usuario; // VARIABLE PARA GENERAR EL NUEVO USUARIO Y PASARLA POR PARAMETRO AL CONSTRUCTOR
let nuevo_password_usuario; // VARIABLE PARA GENERAR EL NUEVO USUARIO Y PASARLA POR PARAMETRO AL CONSTRUCTOR
let nuevo_email_usuario; // VARIABLE PARA GENERAR EL NUEVO USUARIO Y PASARLA POR PARAMETRO AL CONSTRUCTOR


//*********************************************METODOS**************************************************************** 

class Usuario {
    constructor (nombre , apellido , username, password, email, metododepago){
        this.nombre = nombre;
        this.apellido = apellido;
        this.username = username;
        this.password = password;
        this.email = email;
        this.metododepago = null;
    }
} // fin de la class usuario

BOTON_REGISTRAR.addEventListener('click', function(event) {
    let usuariosGuardados = JSON.parse(localStorage.getItem('USUARIOS')) || [];
    verificarCondicionesNombre(this.nombre)
    verificarCondicionesApellido(this.apellido)
    verificarDisponibilidadDeNombreDeUsuario(this.username)






    // agregarNuevoUsuario(nombre,apellido,username,pass,email) --> la funcion pasa los parametros para ser asignados en el constructor una vez verificados por lo metodos especificos de cada campo
    USUARIOS.push(this);
    localStorage.setItem(this.username, JSON.stringify(USUARIOS));
});

function verificarCondicionesNombre(nombre){
    let nameValue = CAMPO_NOMBRE.value;
        if(nameValue === ""){
            CAMPO_NOMBRE.setCustomValidity("El campo no puede estar vacio")
            CAMPO_NOMBRE.reportValidity();
            verify = false;
        }else if(!REGEX_SOLO_LETRAS.test(nameValue)){
            CAMPO_NOMBRE.setCustomValidity("El campo solo debe contener letras")
            CAMPO_NOMBRE.reportValidity();
            verify = false;
        }else{
            CAMPO_NOMBRE.setCustomValidity("")
            CAMPO_NOMBRE.reportValidity();
            nuevo_nombre_usuario = nombre;
            verify = true;
            console.log("Campo nombre completado correctamente")
        }
}

function verificarCondicionesApellido(apellido){
    let lastnamenameValue = CAMPO_APELLIDO.value;
        if(lastnamenameValue === ""){
            CAMPO_APELLIDO.setCustomValidity("El campo no puede estar vacio")
            CAMPO_APELLIDO.reportValidity();
            verify = false;
        }else if(!REGEX_SOLO_LETRAS.test(lastnamenameValue)){
            CAMPO_APELLIDO.setCustomValidity("El campo solo debe contener letras")
            CAMPO_APELLIDO.reportValidity();
            verify = false;
        }else{
            CAMPO_APELLIDO.setCustomValidity("")
            CAMPO_APELLIDO.reportValidity();
            nuevo_apellido_usuario = apellido;
            verify = true;
            console.log("Campo apellido completado correctamente")
        }
}

function verificarDisponibilidadDeNombreDeUsuario(username){
    let usernameValue = CAMPO_USERNAME.value;
    let usuariosGuardados = JSON.parse(localStorage.getItem('USUARIOS')) || [];
    let usuarioEncontrado = usuariosGuardados.find(usuario => usuario.username === username);
    if(usernameValue === ""){
        CAMPO_USERNAME.setCustomValidity("El campo no puede estar vacio");
        CAMPO_USERNAME.reportValidity();
        verify = false;
    }else if(!REGEX_ALFANUMERICO.test(usernameValue)){
        CAMPO_USERNAME.setCustomValidity("El campo solo debe contener letras y numeros");
        CAMPO_USERNAME.reportValidity();
        verify = false;
    }else if(usuarioEncontrado){
        CAMPO_USERNAME.setCustomValidity("El nombre de usuario ya esta en uso, intente con otro"); // VALIDAR UNA VEZ CREADO UN USUARIO, QUE ESTA FUNCION SE CUMPLA.
        CAMPO_USERNAME.reportValidity();
        verify = false
    }else{
        CAMPO_USERNAME.setCustomValidity("");
        CAMPO_USERNAME.reportValidity();
        nuevo_nombre_usuario = username;
        verify = false
        console.log("Campo usuario completado correctamente")
    }
}



























function SetMetodoDePago(inputSeleccionado) { // POR ACA VA LA MANO, HAY QUE DETECTAR CUAL DE LOS 4 SELECCIONO
    this.metododepago = inputSeleccionado;
}