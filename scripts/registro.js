const USUARIOS = [];
const FORMULARIO = document.getElementById('formularioRegistro');
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
const REGEX_CLAVE = /^(?=(?:[^A-Za-z]*[A-Za-z]){2})(?=(?:[^0-9]*[0-9]){2})(?=(?:[^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]){2}).{8,}$/
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
    constructor (nombre, apellido, username, password, email, metododepago){
        this.nombre = nombre;
        this.apellido = apellido;
        this.username = username;
        this.password = password;
        this.email = email;
        this.metododepago = metododepago;
    }
}

BOTON_REGISTRAR.addEventListener('click', function(event) {
    event.preventDefault();
    verify = true;

    verificarCondicionesNombre();
    verificarCondicionesApellido();
    verificarDisponibilidadDeNombreDeUsuario();
    verificarCondicionesPassword();
    verificarIgualdadEnClaves();
    validarMail();
    validarUsuarioExistente();

    if (verify_tarjeta) {
        validarNroDeTarjeta();
        validarNroCvv();
    }

    if (verify) {
        SetMetodoDePago();
        let nuevoUsuario = new Usuario(nuevo_nombre_usuario, nuevo_apellido_usuario, nuevo_username_usuario, nuevo_password_usuario, nuevo_email_usuario);
        USUARIOS.push(nuevoUsuario);
        localStorage.setItem('USUARIOS', JSON.stringify(USUARIOS));
        console.log("Usuario registrado correctamente");
        FORMULARIO.submit();
    } else {
        console.log("Error en el registro. Por favor, verifica los campos.");
    }
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

function verificarCondicionesNombre(){
    let nameValue = CAMPO_NOMBRE.value;
    if (nameValue === "" || !REGEX_SOLO_LETRAS.test(nameValue)) {
        CAMPO_NOMBRE.setCustomValidity("El campo debe contener solo letras y no puede estar vacío");
        CAMPO_NOMBRE.reportValidity();
        verify = false;
    } else {
        CAMPO_NOMBRE.setCustomValidity("");
        nuevo_nombre_usuario = nameValue;
        console.log("Campo nombre completado correctamente");
    }
}

function verificarCondicionesApellido(){
    let lastnameValue = CAMPO_APELLIDO.value;
    if (lastnameValue === "" || !REGEX_SOLO_LETRAS.test(lastnameValue)) {
        CAMPO_APELLIDO.setCustomValidity("El campo debe contener solo letras y no puede estar vacío");
        CAMPO_APELLIDO.reportValidity();
        verify = false;
    } else {
        CAMPO_APELLIDO.setCustomValidity("");
        nuevo_apellido_usuario = lastnameValue;
        console.log("Campo apellido completado correctamente");
    }
}

function verificarDisponibilidadDeNombreDeUsuario(){
    let usernameValue = CAMPO_USERNAME.value;
    let usuariosGuardados = JSON.parse(localStorage.getItem('USUARIOS')) || [];
    let usuarioEncontrado = usuariosGuardados.find(usuario => usuario.username === usernameValue);
    if (usernameValue === "" || !REGEX_ALFANUMERICO.test(usernameValue) || usuarioEncontrado) {
        CAMPO_USERNAME.setCustomValidity("El campo debe contener solo letras y números, no puede estar vacío, o el nombre de usuario ya está en uso");
        CAMPO_USERNAME.reportValidity();
        verify = false;
    } else {
        CAMPO_USERNAME.setCustomValidity("");
        nuevo_username_usuario = usernameValue;
        console.log("Campo usuario completado correctamente");
    }
}

function verificarCondicionesPassword(){
    let passwordValue = CAMPO_CLAVE.value;
    if (passwordValue === "" || !REGEX_CLAVE.test(passwordValue)) {
        CAMPO_CLAVE.setCustomValidity("La contraseña debe contener al menos 2 letras, 2 números, 2 caracteres especiales y tener 8 dígitos");
        CAMPO_CLAVE.reportValidity();
        verify = false;
    } else {
        CAMPO_CLAVE.setCustomValidity("");
        nuevo_password_usuario = passwordValue;
        console.log("Clave generada correctamente");
    }
}

function verificarIgualdadEnClaves(){
    let passwordValue = CAMPO_CLAVE.value;
    let repasswordValue = CAMPO_REP_CLAVE.value;
    if (passwordValue === "" || repasswordValue === "" || passwordValue !== repasswordValue) {
        CAMPO_REP_CLAVE.setCustomValidity("Las contraseñas no coinciden o el campo está vacío");
        CAMPO_REP_CLAVE.reportValidity();
        verify = false;
    } else {
        CAMPO_REP_CLAVE.setCustomValidity("");
        console.log("Claves coinciden");
    }
}

function validarMail(){
    let mailValue = CAMPO_MAIL.value;
    if (mailValue === "" || !REGEX_MAIL.test(mailValue)) {
        CAMPO_MAIL.setCustomValidity("El campo no puede estar vacío y debe ser un correo válido");
        CAMPO_MAIL.reportValidity();
        verify = false;
    } else {
        let usuariosGuardados = JSON.parse(localStorage.getItem('USUARIOS')) || [];
        let usuarioEncontrado = usuariosGuardados.find(usuario => usuario.email === mailValue);
        if (usuarioEncontrado) {
            CAMPO_MAIL.setCustomValidity("El correo ya está en uso");
            CAMPO_MAIL.reportValidity();
            verify = false;
        } else {
            CAMPO_MAIL.setCustomValidity("");
            nuevo_email_usuario = mailValue;
            console.log("Correo nuevo registrado");
        }
    }
}

function validarNroDeTarjeta(){
    let nroTarjetaValue = INPUT_TARJETA_NUMERO.value;
    if (!REGEX_TARJETA.test(nroTarjetaValue)) {
        INPUT_TARJETA_NUMERO.setCustomValidity("Tarjeta incorrecta, debe tener entre 16 y 19 dígitos");
        INPUT_TARJETA_NUMERO.reportValidity();
        verify_tarjeta = false;
    } else {
        INPUT_TARJETA_NUMERO.setCustomValidity("");
        INPUT_TARJETA_NUMERO.reportValidity();
        let nros = Array.from(nroTarjetaValue).map(Number);
        let sumaDeNros = nros.slice(0, -1).reduce((acc, num) => acc + num, 0);
        const ultimoNro = nros[nros.length - 1];
        if ((sumaDeNros % 2 === 0 && ultimoNro % 2 !== 0) || (sumaDeNros % 2 !== 0 && ultimoNro % 2 === 0)) {
            verify_tarjeta = true;
            console.log("Número de tarjeta válido");
        } else {
            INPUT_TARJETA_NUMERO.setCustomValidity("Número de tarjeta inválido según la validación");
            INPUT_TARJETA_NUMERO.reportValidity();
            verify_tarjeta = false;
        }
    }
}

function validarNroCvv(){
    let cvvValue = INPUT_TARJETA_CVV.value;
    if (!REGEX_CVV.test(cvvValue) || cvvValue === "000") {
        INPUT_TARJETA_CVV.setCustomValidity("Código de seguridad incorrecto");
        INPUT_TARJETA_CVV.reportValidity();
        verify_tarjeta = false;
    } else {
        INPUT_TARJETA_CVV.setCustomValidity("");
        console.log("CVV correcto");
        verify_tarjeta = true;
    }
}

function SetMetodoDePago() {
    if (verify_tarjeta) {
        this.metododepago = "tarjeta";
    } else if (verify_pagofacil) {
        this.metododepago = "pago facil";
    } else if (verify_rapipago) {
        this.metododepago = "rapipago";
    } else if (verify_cbu) {
        this.metododepago = "cbu";
    }
}

function validarUsuarioExistente(){
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userExistente = users.some(user => user.email === email || user.username === username);

    if (userExistente) {
        console.log("El usuario con ese correo electrónico o nombre de usuario ya existe.")
    }


}