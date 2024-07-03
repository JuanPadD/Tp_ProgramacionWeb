let usuariosGuardados = JSON.parse(localStorage.getItem('USUARIOS')) || [];
let usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
const CAMPO_CLAVE = document.getElementById('pass');
const CAMPO_REP_CLAVE = document.getElementById('repass');
const GUARDARCAMBIOS = document.getElementById('guardarbutton');
const REGEX_CLAVE = /^(?=(?:[^A-Za-z]*[A-Za-z]){2})(?=(?:[^0-9]*[0-9]){2})(?=(?:[^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]){2}).{8,}$/;
let verify = true;
let usuarioEncontrado = usuariosGuardados.find(usuario => usuario.username === usuarioActual.username);
const NOMBREUSUARIO = document.getElementById('nombre_usuario');
const MAILUSUARIO = document.getElementById('email_usuario');
const CANCELARSUSCRIPBUTON = document.getElementById('cancelarbutton');

if (usuarioEncontrado) {
    let nombreDeUsuario = usuarioEncontrado.username;
    NOMBREUSUARIO.textContent = nombreDeUsuario;
    let emailUsuario = usuarioEncontrado.email;
    MAILUSUARIO.textContent = emailUsuario;
}

CANCELARSUSCRIPBUTON.addEventListener('click', function(){
    let index = usuariosGuardados.findIndex(usuario => usuario.username === usuarioEncontrado.username);
    if (index !== -1) {
        usuariosGuardados.splice(index, 1); 
        localStorage.setItem('USUARIOS', JSON.stringify(usuariosGuardados));
        console.log("Usuario cancelado correctamente");
    }
});

GUARDARCAMBIOS.addEventListener('click', function(){
    verify = true;
    verificarCondicionesPassword();
    verificarIgualdadEnClaves();
    if (verify) { 
        usuarioEncontrado.password = CAMPO_CLAVE.value;
        usuarioActual.clave = CAMPO_CLAVE.value;
        localStorage.setItem('USUARIOS', JSON.stringify(usuariosGuardados));
        console.log("Clave actualizada correctamente");
    }
});

function verificarCondicionesPassword(){
    let passwordValue = CAMPO_CLAVE.value;
    if (passwordValue === "" || !REGEX_CLAVE.test(passwordValue)) {
        CAMPO_CLAVE.setCustomValidity("La contraseña debe contener al menos 2 letras, 2 números, 2 caracteres especiales y tener 8 dígitos");
        CAMPO_CLAVE.reportValidity();
        verify = false;
    } else {
        CAMPO_CLAVE.setCustomValidity("");
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
