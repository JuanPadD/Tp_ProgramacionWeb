const CAMPO_MAIL = document.getElementById('recoveremail');
const BOTON_RECUPERAR_CLAVE = document.getElementById('recoverSubmit')
const REGEX_MAIL = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
let verify = false;
const RECOVER_FORM = document.getElementById('recoverForm');

BOTON_RECUPERAR_CLAVE.addEventListener('click', function(event){
    event.preventDefault();
    let campo_mail_valor = CAMPO_MAIL.value;
    validarMail(campo_mail_valor);
    if (verify === true){
        console.log("Form enviado.")
        RECOVER_FORM.submit();
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
            CAMPO_MAIL.setCustomValidity("El correo no esta registrado.");
            CAMPO_MAIL.reportValidity();
            console.log("Correo no registrado");
            verify = false;
        }
    }
}