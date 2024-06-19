const QUERY_PARAMS_NOMBRE = 'indice';
const url_vista = document.location.href;
const url = new URL(url_vista)
const indice_de_la_serie = url.searchParams.get(QUERY_PARAMS_NOMBRE)

const SERIES = JSON.parse(localStorage.getItem('series'))

const serie = new Serie(SERIES[indice_de_la_serie])

document.title = serie.nombre

const source = document.createElement("source")
source.src = `./video/${serie.nombre}.mp4`
source.type = "video/mp4"
const video = document.getElementById("video-serie")
video.appendChild(source)


const nodo_texto_titulo = document.createTextNode(serie.nombre)
const nodo_h3_titulo = document.getElementById("titulo-serie")
nodo_h3_titulo.appendChild(nodo_texto_titulo)

for(let i=1; i<=serie.temporadas; i++ ){

    const nodo_option_temporada = document.createElement("option")
    nodo_option_temporada.value = `${i}`
    const nodo_texto_option_temporada = document.createTextNode(`Temporada ${i}`)
    const nodo_select_temporada = document.getElementById("select-temporada-serie")
    nodo_option_temporada.appendChild(nodo_texto_option_temporada)
    nodo_select_temporada.appendChild(nodo_option_temporada)
}


const nodo_texto_generos = document.createTextNode(serie.generos)
const nodo_p_generos = document.getElementById("generos-serie")
nodo_p_generos.appendChild(nodo_texto_generos)

const nodo_texto_actorPrincipal = document.createTextNode(serie.actorPrincipal)
const nodo_a_actorPrincipal = document.createElement("a")
nodo_a_actorPrincipal.href = `${serie.wikipediaActorPrincipal}`
nodo_a_actorPrincipal.target = '_blank'
nodo_a_actorPrincipal.classList.add('name_actors')
const nodo_texto_actorSecundario = document.createTextNode(", " + serie.actorSecundario)
const nodo_a_actorSecundario = document.createElement("a")
nodo_a_actorSecundario.href = `${serie.wikipediaActorSecundario}`
nodo_a_actorSecundario.target = '_blank'
nodo_a_actorSecundario.classList.add('name_actors')
const nodo_p_actores = document.getElementById("actores-serie")
nodo_a_actorPrincipal.appendChild(nodo_texto_actorPrincipal)
nodo_a_actorSecundario.appendChild(nodo_texto_actorSecundario)
nodo_p_actores.appendChild(nodo_a_actorPrincipal)
nodo_p_actores.appendChild(nodo_a_actorSecundario)


const nodo_texto_sinopsis = document.createTextNode(serie.sinopsis)
const nodo_p_sinopsis = document.getElementById("sinopsis-serie")
nodo_p_sinopsis.appendChild(nodo_texto_sinopsis)

