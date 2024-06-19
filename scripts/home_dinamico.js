const JSON_SERIES = localStorage.getItem(LOCALSTORAGE_SERIES)
const SERIES = JSON.parse(JSON_SERIES)

function agregarSeries(){
    let nodo_contenedor = document.getElementById("dinamico")

    for(let i in SERIES){

        let nodo_div = document.createElement("div");
        nodo_div.classList.add('img_item')
        let nodo_a = document.createElement("a")
        nodo_a.href = `detalle-serie.html?indice=${i}`
        let nodo_img = document.createElement("img");
        nodo_img.src = `./img/${SERIES[i]['nombre']}.jpg`
        nodo_img.alt = `${SERIES[i]['nombre']}`
        nodo_a.appendChild(nodo_img)
        nodo_div.appendChild(nodo_a)
        nodo_contenedor.appendChild(nodo_div)

    }

}

agregarSeries()

const JSON_PELICULAS = localStorage.getItem(LOCALSTORAGE_PELICULAS)
const PELICULAS = JSON.parse(JSON_PELICULAS)

function agregarPeliculas(){
    let nodo_contenedor = document.getElementById("dinamico")

    for(let i in PELICULAS){

        let nodo_div = document.createElement("div");
        nodo_div.classList.add('img_item')
        let nodo_a = document.createElement("a")
        nodo_a.href = `detalle-pelicula.html?indice=${i}`
        let nodo_img = document.createElement("img");
        nodo_img.src = `./img/${PELICULAS[i]['nombre']}.jpg`
        nodo_img.alt = `${PELICULAS[i]['nombre']}`
        nodo_a.appendChild(nodo_img)
        nodo_div.appendChild(nodo_a)
        nodo_contenedor.appendChild(nodo_div)

    }

}

agregarPeliculas()