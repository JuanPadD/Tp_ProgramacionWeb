class Serie{

    constructor(serie){
        this.serie = serie;
    }

    get nombre() {
        return this.serie['nombre']
    }

    get temporadas() {
        return this.serie['temporadas']
    }

    get capitulos() {
        return this.serie['capitulos']
    }

    get generos() {
        return this.serie['generos']
    }

    get actorPrincipal() {
        return this.serie['actorPrincipal']
    }

    get wikipediaActorPrincipal() {
        return this.serie['wikipediaActorPrincipal']
    }

    get actorSecundario() {
        return this.serie['actorSecundario']
    }

    get wikipediaActorSecundario() {
        return this.serie['wikipediaActorSecundario']
    }

    get sinopsis(){
        return this.serie['sinopsis']
    }
}