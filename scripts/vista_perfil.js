let usuariosGuardados = JSON.parse(localStorage.getItem('USUARIOS')) || [];
let usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
console.log(usuarioActual)

let usuarioEncontrado = usuariosGuardados.find(usuario => usuario.username === usuarioActual.username);
const NOMBREUSUARIO = document.getElementById('nombre_usuario')
const MAILUSUARIO = document.getElementById('email_usuario')
const CANCELARSUSCRIPBUTON = document.getElementById('cancelarbutton')



let nombreDeUsuario = usuarioEncontrado.username;
NOMBREUSUARIO.textContent = nombreDeUsuario;
let emailUsuario = usuarioEncontrado.email;
MAILUSUARIO.textContent = emailUsuario;

CANCELARSUSCRIPBUTON.addEventListener('click', function(){
    let index = usuariosGuardados.findIndex(usuario => usuario.username === usuarioEncontrado.username);
    if (index !== -1) {
        usuariosGuardados.splice(index, 1); 
        localStorage.setItem('USUARIOS', JSON.stringify(usuariosGuardados));
    }
});