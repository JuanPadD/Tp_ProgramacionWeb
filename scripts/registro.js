const USUARIOS = [];
const CAMPO_NOMBRE = document.getElementById('name');
const CAMPO_APELLIDO = document.getElementById('lastname');
const CAMPO_USERNAME = document.getElementById('username');
const CAMPO_CLAVE = document.getElementById('pass');
const CAMPO_REP_CLAVE = document.getElementById('repass');
const CAMPO_MAIL = document.getElementById('mail');
const INPUT_TARJETA = document.getElementById('cbox1');
const INPUT_TARJETA_NUMERO = document.getElementById('card_number');
INPUT_TARJETA_NUMERO.classList.add("ocultar");
const INPUT_TARJETA_CVV = document.getElementById('sec_code');
INPUT_TARJETA_CVV.classList.add("ocultar");
const INPUT_PAGOFACIL = document.getElementById('cbox2');
const INPUT_RAPIPAGO = document.getElementById('cbox3');
const INPUT_CBU = document.getElementById('cbox4');
const BOTON_REGISTRAR = document.getElementById('registrarbutton');
const RADIOBUTTON_TARJETA = document.getElementById('cbox1');
const RADIOBUTTON_PAGOFACIL = document.getElementById('cbox2');
const RADIOBUTTON_RAPIPAGO = document.getElementById('cbox3');
const RADIOBUTTON_CBU = document.getElementById('cbox4');
let verify = false;
let verify_tarjeta = false;
let verify_pagofacil = false;
let verify_rapipago = false;
let verify_cbu = false;
const REGEX_SOLO_LETRAS = /^[A-Za-z]+$/;
const REGEX_ALFANUMERICO = /^[A-Za-z0-9]+$/;
const REGEX_CLAVE = /^(?=(.*[A-Za-z]){2})(?=(.*[0-9]){2})(?=(.*[!@#$%^&*(),.?":{}|<>]){2}).{8}$/
const REGEX_MAIL = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
const REGEX_TARJETA = /^[0-9]{16,19}$/;
const REGEX_CVV = /^[0-9]{3}$/;;
let nuevo_nombre_usuario; // VARIABLE PARA GENERAR EL NUEVO USUARIO Y PASARLA POR PARAMETRO AL CONSTRUCTOR
let nuevo_apellido_usuario; // VARIABLE PARA GENERAR EL NUEVO USUARIO Y PASARLA POR PARAMETRO AL CONSTRUCTOR
let nuevo_username_usuario; // VARIABLE PARA GENERAR EL NUEVO USUARIO Y PASARLA POR PARAMETRO AL CONSTRUCTOR
let nuevo_password_usuario; // VARIABLE PARA GENERAR EL NUEVO USUARIO Y PASARLA POR PARAMETRO AL CONSTRUCTOR
let nuevo_email_usuario; // VARIABLE PARA GENERAR EL NUEVO USUARIO Y PASARLA POR PARAMETRO AL CONSTRUCTOR


//*********************************************METODOS**************************************************************** 

class Usuario {
    constructor (nombre , apellido , username, password, repass, email, metododepago){
        this.nombre = nombre;
        this.apellido = apellido;
        this.username = username;
        this.password = password;
        this.repass = repass;
        this.email = email;
        this.metododepago = null;
    }
} // fin de la class usuario

BOTON_REGISTRAR.addEventListener('click', function(event) {
    event.preventDefault();
    let usuariosGuardados = JSON.parse(localStorage.getItem('USUARIOS')) || [];
    verificarCondicionesNombre()
    verificarCondicionesApellido()
    verificarDisponibilidadDeNombreDeUsuario()
    verificarCondicionesPassword()
    verificarCondicionesPassword()
    verificarIgualdadEnClaves()
    validarMail();

    if (verify_tarjeta === true){
        validarNroDeTarjeta()
        validarNroCvv()
    }

    if(verify){
        SetMetodoDePago();
        let nuevoUsuario = new Usuario(nuevo_nombre_usuario, nuevo_apellido_usuario, nuevo_username_usuario, nuevo_password_usuario, nuevo_email_usuario);
        USUARIOS.push(nuevoUsuario);
        localStorage.setItem('USUARIOS', JSON.stringify(USUARIOS));
        console.log("Usuario registrado correctamente");
        event.submit;
    }

    USUARIOS.push(this);
    localStorage.setItem(this.username, JSON.stringify(USUARIOS));
});

RADIOBUTTON_TARJETA.addEventListener('click', function(event){
INPUT_TARJETA_NUMERO.classList.remove("ocultar");
INPUT_TARJETA_CVV.classList.remove("ocultar");
verify_tarjeta = true;
});

RADIOBUTTON_PAGOFACIL.addEventListener('click', function(event){
INPUT_TARJETA_NUMERO.classList.add("ocultar");
INPUT_TARJETA_CVV.classList.add("ocultar");
verify_pagofacil = true;
});

RADIOBUTTON_RAPIPAGO.addEventListener('click', function(event){
INPUT_TARJETA_NUMERO.classList.add("ocultar");
INPUT_TARJETA_CVV.classList.add("ocultar");
verify_rapipago = true;
});

RADIOBUTTON_CBU.addEventListener('click', function(event){
INPUT_TARJETA_NUMERO.classList.add("ocultar");
INPUT_TARJETA_CVV.classList.add("ocultar");
verify_cbu = true;
});














// **************************************FUNCIONES*********************************************************************************************

function verificarCondicionesNombre(){
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
            nuevo_nombre_usuario = nameValue;
            verify = true;
            console.log("Campo nombre completado correctamente")
        }
}

function verificarCondicionesApellido(){
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
            nuevo_apellido_usuario = lastnamenameValue;
            verify = true;
            console.log("Campo apellido completado correctamente")
        }
}

function verificarDisponibilidadDeNombreDeUsuario(){
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
        nuevo_nombre_usuario = usernameValue;
        verify = false
        console.log("Campo usuario completado correctamente")
    }
}

function verificarCondicionesPassword(){
    let passwordValue = CAMPO_CLAVE.value;
    if(passwordValue === ""){
        CAMPO_CLAVE.setCustomValidity("El campo no puede estar vacio");
        CAMPO_CLAVE.reportValidity();
        verify = false;
    }else if(!REGEX_CLAVE.test(passwordValue)){
        CAMPO_CLAVE.setCustomValidity("El campo debe contener al menos 2 Letras, 2 números y 2 caracteres especiales. Y debe ser de 8 digitos.");
        CAMPO_CLAVE.reportValidity();
        verify = false;
    }else{
        CAMPO_CLAVE.setCustomValidity("");
        CAMPO_CLAVE.reportValidity();
        nuevo_password_usuario = passwordValue;
        verify = true; 
        console.log("clave generada correctamente.")
    }
}

function verificarIgualdadEnClaves(){
    let passwordValue = CAMPO_CLAVE.value;
    let repasswordValue = CAMPO_REP_CLAVE.value;
    if(passwordValue === ""){
        CAMPO_CLAVE.setCustomValidity("El campo no puede estar vacio.")
        CAMPO_CLAVE.reportValidity()
        verify = false;
    } else if(repasswordValue === ""){
        CAMPO_REP_CLAVE.setCustomValidity("El campo no puede estar vacio.")
        CAMPO_REP_CLAVE.reportValidity()
        verify = false;
    } else if(passwordValue !== repasswordValue){
        CAMPO_REP_CLAVE.setCustomValidity("Las contraseñas no coinciden.")
        CAMPO_REP_CLAVE.reportValidity();
        verify = false;
    }else if(passwordValue === repasswordValue){
        console.log("clave y reclave coinciden.")
        CAMPO_REP_CLAVE.setCustomValidity("")
        CAMPO_REP_CLAVE.reportValidity();
        verify = true;
    }
}

function validarMail(){
    let campo = CAMPO_MAIL.value;
    if(campo === ""){
        CAMPO_MAIL.setCustomValidity("El campo no puede estar vacio.");
        CAMPO_MAIL.reportValidity();
        console.log("correo vacio")
    }else if(!REGEX_MAIL.test(campo)){
        CAMPO_MAIL.setCustomValidity("El campo no es un correo valido.");
        CAMPO_MAIL.reportValidity();
        console.log("correo invalido")
    }else{
        let usuariosGuardados = JSON.parse(localStorage.getItem('USUARIOS')) || [];
        let usuarioEncontrado = usuariosGuardados.find(usuario => usuario.email === campo);
        if(usuarioEncontrado){
            console.log("Usuario encontrado:", usuarioEncontrado);
            verify = false;
        } else {
            console.log("Correo nuevo registrado");
            CAMPO_MAIL.setCustomValidity("");
        CAMPO_MAIL.reportValidity();
            nuevo_email_usuario = campo;
        }
    }
}

function validarNroDeTarjeta(){
let nroTarjetaValue = INPUT_TARJETA_NUMERO.value
if (!REGEX_TARJETA.test(nroTarjetaValue)){
    INPUT_TARJETA_NUMERO.setCustomValidity("Tarjeta incorrecta, debe tener entre 16 y 19 digitos para ser valida");
    INPUT_TARJETA_NUMERO.reportValidity();
    verify_tarjeta = false;
}else{
    INPUT_TARJETA_NUMERO.setCustomValidity("");
    INPUT_TARJETA_NUMERO.reportValidity();
    let nros = Array.from(nroTarjetaValue).map(Number);
    let sumaDeNros = 0;
    const ultimoNro = nros[nros.length - 1];

    nros.slice(0, -1).forEach(digito => {
        sumaDeNros += digito;
    });

        if (sumaDeNros % 2 !== 0){
            return ultimoNro % 2 === 0;
            console.log("La suma es impar, el último dígito debe ser par")
            verify_tarjeta = true;
        }else{
            return ultimoNro % 2 !== 0;
            console.log("La suma es par, el último dígito debe ser impar")
            verify_tarjeta = true;
        }
}
}

function validarNroCvv(){
let cvvValue = INPUT_TARJETA_CVV.value
if(!REGEX_CVV.test(cvvValue)){
    INPUT_TARJETA_CVV.setCustomValidity("CODIGO DE AUTENTICIDAD INCORRECTO");
    INPUT_TARJETA_CVV.reportValidity();
    verify_tarjeta = false;
}else if(cvvValue === "000"){
    INPUT_TARJETA_CVV.setCustomValidity("CODIGO DE AUTENTICIDAD INCORRECTO, NO PUEDE CONTENER 000");
    INPUT_TARJETA_CVV.reportValidity();
    verify_tarjeta = false;
}else{
    INPUT_TARJETA_CVV.setCustomValidity("");
    INPUT_TARJETA_CVV.reportValidity();
    console.log("CVV CORRECTO")
    verify_tarjeta = true;
}
}

function SetMetodoDePago() { 
    if(verify_tarjeta === true){
        this.metododepago = "tarjeta"
    }else if(verify_pagofacil === true){
        this.metododepago = "pago facil"
    }else if(verify_rapipago === true){
        this.metododepago = "rapipago"
    }else if (verify_cbu === true){
        this.metododepago = "cbu"
    }
}