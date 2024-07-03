const LOGGIN_BUTTON = document.getElementById('login_btn');
const CAMPO_MAIL = document.getElementById('loggin_mail');
const CAMPO_CLAVE = document.getElementById('loggin_password');
const REGEX_MAIL = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
let verify = false;
let usuarioIngresante = {};
const FORMULARIO_INGRESO = document.getElementById('logginform');

LOGGIN_BUTTON.addEventListener('click', function(event){
    event.preventDefault();
    let campo_mail_valor = CAMPO_MAIL.value;
    // validarMail(campo_mail_valor);
    let campo_clave_valor = CAMPO_CLAVE.value;
    // validarClave(campo_clave_valor);
    validarCredenciales(campo_mail_valor, campo_clave_valor);
    
    if (verify === true){
        FORMULARIO_INGRESO.submit();
        console.log("Form enviado.")
    }
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
        let usuariosGuardados = JSON.parse(localStorage.getItem('USUARIOS')) || [];
        let usuarioEncontrado = usuariosGuardados.find(usuario => usuario.email === campo);

        if(usuarioEncontrado){
            console.log("Usuario encontrado:", usuarioEncontrado);
            verify = true;
        } else {
            console.log("Correo no registrado");
        }
    }
}

function validarClave(campo){
        if(campo === ""){
            CAMPO_CLAVE.setCustomValidity("El campo no puede estar vacio.")
            CAMPO_CLAVE.reportValidity();
            console.log("clave vacia")
        }else{
            let usuariosGuardados = JSON.parse(localStorage.getItem('USUARIOS')) || [];
            let usuarioEncontrado = usuariosGuardados.find(usuario => usuario.password === campo);

            if(usuarioEncontrado){
                console.log("Usuario encontrado: ", usuarioEncontrado);
                verify = true;
            }else{
                console.log("Clave no registrada")
            }
        }
    }


    function validarCredenciales(correo, clave){
        if(correo === ""){
            CAMPO_MAIL.setCustomValidity("El campo no puede estar vacio.");
            CAMPO_MAIL.reportValidity();
            console.log("Correo vacio");
            verify = false;
            return;
        } else if(!REGEX_MAIL.test(correo)){
            CAMPO_MAIL.setCustomValidity("El campo no es un correo valido.");
            CAMPO_MAIL.reportValidity();
            console.log("Correo invalido");
            verify = false;
            return;
        }
    
        if(clave === ""){
            CAMPO_CLAVE.setCustomValidity("El campo no puede estar vacio.");
            CAMPO_CLAVE.reportValidity();
            console.log("Clave vacia");
            verify = false;
            return;
        }
    
        let usuariosGuardados = JSON.parse(localStorage.getItem('USUARIOS')) || [];
        let usuarioEncontrado = usuariosGuardados.find(usuario => usuario.email === correo && usuario.password === clave);
    
        if(usuarioEncontrado){
            console.log("Usuario encontrado:", usuarioEncontrado);
            localStorage.setItem('usuarioActual', JSON.stringify(usuarioEncontrado));
            verify = true;
        } else {
            console.log("Correo o clave no registrados");
            CAMPO_MAIL.setCustomValidity("Correo o clave incorrectos.");
            CAMPO_MAIL.reportValidity();
            CAMPO_CLAVE.setCustomValidity("Correo o clave incorrectos.");
            CAMPO_CLAVE.reportValidity();
            verify = false;
        }
    }