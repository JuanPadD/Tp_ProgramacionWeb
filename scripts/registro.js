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
    // verificarDisponibilidadDeNombreDeUsuario(this.username)






    // agregarNuevoUsuario(nombre,apellido,username,pass,email) --> la funcion pasa los parametros para ser asignados en el constructor una vez verificados por lo metodos especificos de cada campo
    USUARIOS.push(this);
    localStorage.setItem(this.username, JSON.stringify(USUARIOS));
});

function verificarCondicionesNombre(nombre){
    let nameValue = CAMPO_NOMBRE.value;
        if(nameValue === ""){
            CAMPO_NOMBRE.setCustomValidity("El campo no puede estar vacio")
            verify = false;
        }else if(!REGEX_SOLO_LETRAS.test(nameValue)){
            CAMPO_NOMBRE.setCustomValidity("El campo solo debe contener letras")
            verify = false;
        }else{
            nuevo_nombre_usuario = nombre;
            verify = true;
        }
}


function SetMetodoDePago(inputSeleccionado) { // POR ACA VA LA MANO, HAY QUE DETECTAR CUAL DE LOS 4 SELECCIONO
    this.metododepago = inputSeleccionado;
}