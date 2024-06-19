const QUERY_PARAMS_NOMBRE = 'indice';
const url_vista = document.location.href;
const url = new URL(url_vista)
const indice_de_la_pelicula = url.searchParams.get(QUERY_PARAMS_NOMBRE)

let PELICULAS = JSON.parse(localStorage.getItem('peliculas'))

const pelicula = new Pelicula(PELICULAS[indice_de_la_pelicula])

document.title = pelicula.nombre

const source = document.createElement("source")
source.src = `./video/${pelicula.nombre}.mp4`
source.type = "video/mp4"
const video = document.getElementById("video-pelicula")
video.appendChild(source)

function visitPage(){
    window.open(`${pelicula.linkParaMirar}`, '_blank');
}


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

const JSON_PELICULAS = localStorage.getItem(LOCALSTORAGE_PELICULAS)
const PELICULAS_VISTA_PELICULA = JSON.parse(JSON_PELICULAS)

function agregarCarouselPeliculas(){
    let nodo_contenedor = document.getElementById("carousel-pelicula")


        
            for(let i in PELICULAS_VISTA_PELICULA){
                let nombre_pelicula__actual = PELICULAS_VISTA_PELICULA[i]['nombre'];
                if(document.title != nombre_pelicula__actual){

                let nodo_div = document.createElement("div");
                nodo_div.classList.add('carousel-cell')
                let nodo_a = document.createElement("a")
                nodo_a.href = `detalle-pelicula.html?indice=${i}`
                let nodo_img = document.createElement("img");
                nodo_img.classList.add('carousel-cell-img')
                nodo_img.src = `./img/${PELICULAS_VISTA_PELICULA[i]['nombre']}.jpg`
                nodo_img.alt = `${PELICULAS_VISTA_PELICULA[i]['nombre']}`
                nodo_a.appendChild(nodo_img)
                nodo_div.appendChild(nodo_a)
                nodo_contenedor.appendChild(nodo_div)
        
    
        }
        }
        
    

}

agregarCarouselPeliculas()

const carousel = document.querySelector('.main-carousel');

const flkty = new Flickity( carousel, {
  cellAlign: 'left',
  contain: true
});