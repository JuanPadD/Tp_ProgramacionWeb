const JSON_SERIES = localStorage.getItem(LOCALSTORAGE_SERIES)
const SERIES_NUEVO = JSON.parse(JSON_SERIES)

function agregarSeries(){
    let nodo_contenedor = document.getElementById("dinamico")

        for(let i in SERIES_NUEVO){

            let nodo_div = document.createElement("div");
            nodo_div.classList.add('img_item')
            nodo_div.id = `${SERIES_NUEVO[i]['nombre']}`
            nodo_div.classList.add('elemento')
            nodo_div.alt = `${SERIES_NUEVO[i]['generos']}`
            let nodo_a = document.createElement("a")
            nodo_a.href = `detalle-serie.html?indice=${i}`
            let nodo_img = document.createElement("img");
            nodo_img.src = `./img/${SERIES_NUEVO[i]['nombre']}.jpg`
            nodo_img.alt = `${SERIES_NUEVO[i]['nombre']}`
            nodo_a.appendChild(nodo_img)
            nodo_div.appendChild(nodo_a)
            nodo_contenedor.appendChild(nodo_div)
    

    }
    

}



const JSON_PELICULAS = localStorage.getItem(LOCALSTORAGE_PELICULAS)
const PELICULAS_NUEVO = JSON.parse(JSON_PELICULAS)

function agregarPeliculas(){
    let nodo_contenedor = document.getElementById("dinamico")

    for(let i in PELICULAS_NUEVO){

            let nodo_div = document.createElement("div");
            nodo_div.classList.add('img_item')
            nodo_div.id = `${PELICULAS_NUEVO[i]['nombre']}`
            nodo_div.classList.add('elemento')
            nodo_div.alt = `${PELICULAS_NUEVO[i]['generos']}`
            let nodo_a = document.createElement("a")
            nodo_a.href = `detalle-pelicula.html?indice=${i}`
            let nodo_img = document.createElement("img");
            nodo_img.src = `./img/${PELICULAS_NUEVO[i]['nombre']}.jpg`
            nodo_img.alt = `${PELICULAS_NUEVO[i]['nombre']}`
            nodo_a.appendChild(nodo_img)
            nodo_div.appendChild(nodo_a)
            nodo_contenedor.appendChild(nodo_div)

        

    }

}
if(document.title != "Flimpop Peliculas"){
    agregarSeries()
}
if(document.title != "Flimpop Series"){

    agregarPeliculas()
}

const buscador  = document.getElementById("search-input")
buscador.addEventListener('input', filtroBuscador)


function filtroBuscador(){
    const buscador = document.getElementById("search-input")
    const filtro = buscador.value.toLowerCase()
    const listaImagenes = document.querySelectorAll(".elemento")

    listaImagenes.forEach((item) =>{
        let texto = item.id
        if(texto.toLowerCase().includes(filtro.toLowerCase())){
            item.style.display = '';
        }
        else{
            item.style.display = 'none';
        }
    })

}

const selector  = document.getElementById("select_category_home")
selector.addEventListener('change', filtroSelector)


function filtroSelector(){
    const selector = document.getElementById("select_category_home")
    const filtro = selector.value.toLowerCase()
    const listaImagenes = document.querySelectorAll(".elemento")

    listaImagenes.forEach((item) =>{
        let texto = item.alt
        if(texto.toLowerCase().includes(filtro.toLowerCase())){
            item.style.display = '';
        }
        else{
            item.style.display = 'none';
        }
    })

}