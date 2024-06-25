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

function visitPage() {
    window.open(`${serie.linkParaMirar}`, '_blank');
}

const nodo_texto_titulo = document.createTextNode(serie.nombre)
const nodo_h3_titulo = document.getElementById("titulo-serie")
nodo_h3_titulo.appendChild(nodo_texto_titulo)
//**************************************************************CODIGO NUEVO*************************************************************** */

const nodo_select_temporada = document.getElementById("select-temporada-serie");
const nodo_select_capitulo = document.getElementById("select-capitulo-serie");

for (let i = 0; i < serie.temporadas.length; i++) {
    const nodo_option_temporada = document.createElement("option");
    nodo_option_temporada.value = `${i + 1}`;
    const nodo_texto_option_temporada = document.createTextNode(`Temporada ${i + 1}`);
    nodo_option_temporada.appendChild(nodo_texto_option_temporada);
    nodo_select_temporada.appendChild(nodo_option_temporada);
}

nodo_select_temporada.addEventListener('change', function() {
    const temporadaSeleccionada = parseInt(this.value) - 1;
    actualizarCapitulos(temporadaSeleccionada);
});

function actualizarCapitulos(temporadaIndex) {
    nodo_select_capitulo.innerHTML = '<option value="0">Capítulo</option>';
    if (temporadaIndex >= 0) {
        const cantidadCapitulos = serie.temporadas[temporadaIndex];
        for (let j = 1; j <= cantidadCapitulos; j++) {
            const nodo_option_capitulo = document.createElement("option");
            nodo_option_capitulo.value = `${j}`;
            const nodo_texto_option_capitulo = document.createTextNode(`Capítulo ${j}`);
            nodo_option_capitulo.appendChild(nodo_texto_option_capitulo);
            nodo_select_capitulo.appendChild(nodo_option_capitulo);
        }
    }
}






//***************************************RESTO DEL CODIGO QUE NO TENDRIA QUE TOCAR******************************************** */
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


const JSON_SERIES = localStorage.getItem(LOCALSTORAGE_SERIES)
const SERIES_VISTA_SERIE = JSON.parse(JSON_SERIES)

function agregarCarouselSeries() {
    let nodo_contenedor = document.getElementById("carousel-serie")



    for (let i in SERIES_VISTA_SERIE) {
        let nombre_pelicula__actual = SERIES_VISTA_SERIE[i]['nombre'];
        if (document.title != nombre_pelicula__actual) {

            let nodo_div = document.createElement("div");
            nodo_div.classList.add('carousel-cell')
            let nodo_a = document.createElement("a")
            nodo_a.href = `detalle-serie.html?indice=${i}`
            let nodo_img = document.createElement("img");
            nodo_img.classList.add('carousel-cell-img')
            nodo_img.src = `./img/${SERIES_VISTA_SERIE[i]['nombre']}.jpg`
            nodo_img.alt = `${SERIES_VISTA_SERIE[i]['nombre']}`
            nodo_a.appendChild(nodo_img)
            nodo_div.appendChild(nodo_a)
            nodo_contenedor.appendChild(nodo_div)


        }
    }



}

agregarCarouselSeries()

const carousel = document.querySelector('.main-carousel');

const flkty = new Flickity(carousel, {
    cellAlign: 'left',
    contain: true
});