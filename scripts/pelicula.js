const QUERY_PARAMS_NOMBRE = 'indice';
const url_vista = document.location.href;
const url = new URL(url_vista)
const indice_de_la_pelicula = url.searchParams.get(QUERY_PARAMS_NOMBRE)

const PELICULAS = JSON.parse(localStorage.getItem('peliculas'))

const pelicula = new Pelicula(PELICULAS[indice_de_la_pelicula])

document.title = pelicula.nombre

const source = document.createElement("source")
source.src = `./video/${pelicula.nombre}.mp4`
source.type = "video/mp4"
const video = document.getElementById("video-pelicula")
video.appendChild(source)


const nodo_texto_titulo = document.createTextNode(pelicula.nombre)
const nodo_h3_titulo = document.getElementById("titulo-pelicula")
nodo_h3_titulo.appendChild(nodo_texto_titulo)

const nodo_texto_generos = document.createTextNode(pelicula.generos)
const nodo_p_generos = document.getElementById("generos-pelicula")
nodo_p_generos.appendChild(nodo_texto_generos)

const nodo_texto_actorPrincipal = document.createTextNode(pelicula.actorPrincipal)
const nodo_a_actorPrincipal = document.createElement("a")
nodo_a_actorPrincipal.href = `${pelicula.wikipediaActorPrincipal}`
nodo_a_actorPrincipal.target = '_blank'
nodo_a_actorPrincipal.classList.add('name_actors')
const nodo_texto_actorSecundario = document.createTextNode(", " + pelicula.actorSecundario)
const nodo_a_actorSecundario = document.createElement("a")
nodo_a_actorSecundario.href = `${pelicula.wikipediaActorSecundario}`
nodo_a_actorSecundario.target = '_blank'
nodo_a_actorSecundario.classList.add('name_actors')
const nodo_p_actores = document.getElementById("actores-pelicula")
nodo_a_actorPrincipal.appendChild(nodo_texto_actorPrincipal)
nodo_a_actorSecundario.appendChild(nodo_texto_actorSecundario)
nodo_p_actores.appendChild(nodo_a_actorPrincipal)
nodo_p_actores.appendChild(nodo_a_actorSecundario)


const nodo_texto_sinopsis = document.createTextNode(pelicula.sinopsis)
const nodo_p_sinopsis = document.getElementById("sinopsis-pelicula")
nodo_p_sinopsis.appendChild(nodo_texto_sinopsis)

