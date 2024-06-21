class Pelicula{

    constructor(pelicula){
        this.pelicula = pelicula;
    }

    get nombre() {
        return this.pelicula['nombre']
    }

    get linkParaMirar() {
        return this.pelicula['linkParaMirar']
    }

    get generos() {
        return this.pelicula['generos']
    }

    get actorPrincipal() {
        return this.pelicula['actorPrincipal']
    }

    get wikipediaActorPrincipal() {
        return this.pelicula['wikipediaActorPrincipal']
    }

    get actorSecundario() {
        return this.pelicula['actorSecundario']
    }

    get wikipediaActorSecundario() {
        return this.pelicula['wikipediaActorSecundario']
    }

    get sinopsis(){
        return this.pelicula['sinopsis']
    }
}