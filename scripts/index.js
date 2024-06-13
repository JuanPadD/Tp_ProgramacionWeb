const LOGGIN_BUTTON = document.getElementById('login_btn');
const CAMPO_MAIL = document.getElementById('loggin_mail');
const REGEX_MAIL = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
let verify = false;
let usuarioIngresante = {};

LOGGIN_BUTTON.addEventListener('click', function(event){
    event.preventDefault();
    let campo_mail_valor = CAMPO_MAIL.value;
    validarMail(campo_mail_valor);




    console.log("boton");
});


function validarMail(campo){
    if(campo === ""){
        CAMPO_MAIL.setCustomValidity("El campo no puede estar vacio.");
        CAMPO_MAIL.reportValidity();
        console.log("correo vacio")
    }else if(!REGEX_MAIL.test(campo)){
        CAMPO_MAIL.setCustomValidity("El campo no es un correo valido.");
        CAMPO_MAIL.reportValidity();
        console.log("correo invalido")
    }else{
        // HABRIA QUE CARGAR EL JSON DE USUARIOS PARA VERIFICAR QUE EL MAIL SEA CORRESPONDIENTE A UN USUARIO 
        // CREADO, LO MISMO CON LA CLAVE.

        let usuariosGuardados = JSON.parse(localStorage.getItem('USUARIOS')) || [];
        let usuarioEncontrado = usuariosGuardados.find(usuario => usuario.email === campo);

        if(usuarioEncontrado){
            console.log("Usuario encontrado:", usuarioEncontrado);
        } else {
            console.log("Correo no registrado");
        }

        verify = true;
    }
}