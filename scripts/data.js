const LOCALSTORAGE_SERIES = 'series'

/**
 * nombre
 * temporadas
 * capitulos
 * genero
 * actores
 * sinopsis
 */

if(localStorage.getItem('series') == null){

    const EL_VERANO_EN_QUE_ME_ENAMORE = {nombre: 'El Verano En Que Me Enamore', temporadas: 2, capitulos: '', generos: 'Romance', actorPrincipal: 'Lola Tung', wikipediaActorPrincial:'https://es.wikipedia.org/wiki/Lola_Tung', actorSecundario: '', wikipediaActorSecundario:'', linkParaMirar: '', sinopsis: 'El verano en que me enamoré es una serie de televisión de drama romántico estadounidense que se estrenó el 17 de junio de 2022 en Amazon Prime Video. Cuenta con siete episodios basados en la novela homónima de Jenny Han.',}
    const FALLOUT = {nombre: 'Fallout', temporadas: 1, capitulos: '', generos: 'Acción/ Drama/Ciencia Ficción', actorPrincipal: 'Ella Purnell', wikipediaActorPrincipal:'https://es.wikipedia.org/wiki/Ella_Purnell', actorSecundario: 'Aaron Moten', wikipediaActorSecundario:'https://en.wikipedia.org/wiki/Aaron_Moten', linkParaMirar: '', sinopsis: 'Fallout es una serie de televisión postapocalíptica desarrollada por Lisa Joy y Jonathan Nolan para el servicio de vídeo por demanda Amazon Prime Video. Está basada en la franquicia de videojuegos de rol del mismo nombre creada por Black Isle Studios y actualmente propiedad de Bethesda Softworks; los protagonistas principales son Ella Purnell, Aaron Moten, Kyle MacLachlan, Moisés Arias, Xelia Mendes-Jones y Walton Goggins.',}
    const ONE_TREE_HILL = {nombre: 'One Tree Hill', temporadas: 9, capitulos: '', generos: 'Drama', actorPrincipal: 'James Lafferty', wikipediaActorPrincipal:'https://es.wikipedia.org/wiki/James_Lafferty', actorSecundario: 'Hilarie Burton', wikipediaActorSecundario:'https://es.wikipedia.org/wiki/Hilarie_Burton', linkParaMirar: '', sinopsis: 'Los miembros de treinta y tantos años de edad de Tree Hill encuentran más preguntas que respuestas mientras tratan de mantener sus sueños vivos y sus relaciones de amistad intactas Nathan tiene conflictos con su vida pública como estrella de la NBA y Haley lidia con su papel de madre, con el hecho de estar casada con un hombre famoso y con su carrera que está prosperando. La nueva amistad de Millie con Alex amenaza la relación de ella con Mouth y Dan Scott enfrenta su propia mortalidad mientras busca el perdón durante el tiempo que le queda.',}
    const SHAMELESS = {nombre: 'Shameless', temporadas: 11, capitulos: '', generos: 'Comedia dramatica', actorPrincipal: 'William H. Macy', wikipediaActorPrincipal:'https://es.wikipedia.org/wiki/William_H._Macy', actorSecundario: 'Jeremy Allen White', wikipediaActorSecundario:'https://es.wikipedia.org/wiki/Jeremy_Allen_White', linkParaMirar: '', sinopsis: 'Shameless es una serie de televisión estadounidense de comedia dramática desarrollada por John Wells que debutó en Showtime el 9 de enero de 2011 y finalizó el 11 de abril de 2021. Es una adaptación de la serie británica del mismo nombre de Paul Abbott y cuenta con un elenco encabezado por William H. Macy y Emmy Rossum. El programa está ambientado en el Lado Sur de Chicago y se filma en toda la ciudad, así como en Los Ángeles.',}
    const SWAT = {nombre: 'SWAT', temporadas: 7, capitulos: '', generos: 'Drama', actorPrincipal: 'Shemar Moore', wikipediaActorPrincipal:'https://es.wikipedia.org/wiki/Shemar_Moore', actorSecundario: '', wikipediaActorSecundario:'', sinopsis: 'Un teniente de policía se debate entre la fidelidad al cuerpo y la vinculación que mantiene con los amigos junto a los que creció en las calles más duras de Los Ángeles, para quienes, a menudo, la policía es el enemigo.',}
    const THE_BOYS = {nombre: 'The Boys', temporadas: 4, capitulos: '', generos: 'Drama', actorPrincipal: 'Antony Starr', wikipediaActorPrincipal:'https://es.wikipedia.org/wiki/Antony_Starr', actorSecundario: 'Karl Urban', wikipediaActorSecundario:'https://es.wikipedia.org/wiki/Karl_Urban', linkParaMirar: '', sinopsis: 'Cuando los superhéroes abusan de sus superpoderes en lugar de usarlos para el bien, unos "muchachos" se embarcan en una búsqueda heroica para exponer sus secretos.',}
    const WD_THE_ONE_WHO_LIVE = {nombre: 'The Walking Dead - The One Who Live', temporadas: 1, capitulos: '', generos: 'Drama', actorPrincipal: 'Andrew Lincoln', wikipediaActorPrincial:'https://es.wikipedia.org/wiki/Andrew_Lincoln', actorSecundario: 'Danai Gurira', wikipediaActorSecundario:'https://es.wikipedia.org/wiki/Danai_Gurira', linkParaMirar: '', sinopsis: 'The Walking Dead: The Ones Who Live es una serie de televisión estadounidense postapocalíptica creada por Scott M. Gimple, Danai Gurira y Andrew Lincoln para AMC.​ Está ambientada tras la conclusión de la serie original The Walking Dead, con Lincoln, Gurira y Pollyanna McIntosh retomando sus papeles.',}
    const WD_WORLD_BEYOND = {nombre: 'The Walking Dead - World Beyond', temporadas: 2, capitulos: '', generos: 'Drama', actorPrincipal: 'Alexa Mansour', wikipediaActorPrincial:'https://thewalkingdead.fandom.com/es/wiki/Alexa_Mansour#:~:text=Alexa%20Mansour%20es%20una%20actriz,de%20origen%20mexicano%20y%20egipcio.', actorSecundario: 'Nico Tortorella', wikipediaActorSecundario:'https://es.wikipedia.org/wiki/Nico_Tortorella', linkParaMirar: '', sinopsis: 'Un grupo de adolescentes que se mantuvo aislado de los peligros del mundo postapocalíptico recibe un mensaje que lo inspira a dejar la seguridad de su hogar para rescatar a su padre.',}
    
    const SERIES_A_GUARDAR = [
        EL_VERANO_EN_QUE_ME_ENAMORE, FALLOUT, ONE_TREE_HILL, SHAMELESS, SWAT, THE_BOYS, WD_THE_ONE_WHO_LIVE, WD_WORLD_BEYOND
    ]
    
    localStorage.setItem(LOCALSTORAGE_SERIES, JSON.stringify(SERIES_A_GUARDAR))
}


const LOCALSTORAGE_PELICULAS = 'peliculas'

/**
 * nombre
 * genero
 * actores
 * sinopsis
*/

if(localStorage.getItem('peliculas') == null){

    const AGENTE_X = {nombre: 'Agente X', generos: 'Acción/ Thriller/ Suspenso/ Misterio', actorPrincipal: 'Aaron Eckhart', wikipediaActorPrincipal:'https://es.wikipedia.org/wiki/Aaron_Eckhart', actorSecundario: 'Nina Dobrev', wikipediaActorSecundario:'https://es.wikipedia.org/wiki/Nina_Dobrev', linkParaMirar: '', sinopsis: 'Un asesino de periodistas extranjeros hace que la CIA parezca responsable de los crímenes. Cuando el mundo empieza a unir sus fuerzas contra Estados Unidos, la CIA decide recuperar a su agente retirado más brillante y rebelde.',}
    const HABLAME = {nombre: 'Hablame', generos: 'Terror/ Terror sobrenatural', actorPrincipal: 'Sophie Wilde', wikipediaActorPrincipal:'https://es.wikipedia.org/wiki/Sophie_Wilde', actorSecundario: 'Zoe Terakes', wikipediaActorSecundario:'https://es.wikipedia.org/wiki/Zoe_Terakes', linkParaMirar: '', sinopsis: 'Mia piensa cada día en la muerte de su madre, fallecida en circunstancias poco claras. Un día, ella y su grupo de amigos encuentran una mano embalsamada que permite invocar a los espíritus, pero hay puertas que, una vez abiertas, no se pueden cerrar.',}
    const JURASSIC_WORLD = {nombre: 'Jurassic World', generos: 'Acción/ Ciencia ficción', actorPrincipal: 'Chris Pratt', wikipediaActorPrincipal:'https://es.wikipedia.org/wiki/Chris_Pratt', actorSecundario: 'Bryce Dallas Howard', wikipediaActorSecundario:'https://es.wikipedia.org/wiki/Bryce_Dallas_Howard', linkParaMirar: '', sinopsis: 'La isla Nublar y su parque han sido destruidos, pero el problema no se terminó. Con los dinosaurios dispersos por todo el mundo, la convivencia entre el presente y el pasado alcanza un nuevo nivel de tensión.',}
    const ONE_DAY = {nombre: 'One Day', generos: 'Romance/ Drama', actorPrincipal: 'Jim Sturgess', wikipediaActorPrincipal:'https://es.wikipedia.org/wiki/Jim_Sturgess', actorSecundario: 'Anne Hathaway', wikipediaActorSecundario:'https://es.wikipedia.org/wiki/Anne_Hathaway', linkParaMirar: '', sinopsis: 'A pesar de ser muy diferentes, un mujer idealista y un mujeriego rico llevan veinte años reuniéndose en la fecha del aniversario de graduación de su universidad.',}
    const SICK = {nombre: 'Sick', generos: 'Terror/ Crimen', actorPrincipal: 'Gideon Adlon', wikipediaActorPrincipal:'https://es.wikipedia.org/wiki/Gideon_Adlon', actorSecundario: 'Joel Courtney', wikipediaActorSecundario:'https://es.wikipedia.org/wiki/Joel_Courtney', linkParaMirar: '', sinopsis: 'Mientras están en cuarentena en la casa del lago de su familia durante la pandemia, Parker y su mejor amiga se ven amenazadas por un visitante inesperado.',}
    const TED = {nombre: 'Ted', generos: 'Comedia/ Fantasía', actorPrincipal: 'Mark Wahlberg', wikipediaActorPrincipal:'https://es.wikipedia.org/wiki/Mark_Wahlberg', actorSecundario: 'Mila Kunis', wikipediaActorSecundario:'https://es.wikipedia.org/wiki/Mila_Kunis', linkParaMirar: '', sinopsis: 'Cuando John Bennett era un niño pequeño, pidió el deseo de que Ted, su querido oso de peluche, cobrara vida. Treinta años más tarde, Ted continúa siendo el compañero de John, ante el disgusto de Lori, la novia de John. Aunque el disgusto de Lori se ve agravado por el constante consumo de la pareja de cerveza y marihuana, ella no es quien está más decepcionada con John; ya que puede necesitar la intervención del juguete de John para hacerlo madurar.',}
    const UNA_ESPOSA_DE_MENTIRA = {nombre: 'Una Esposa De Mentira', generos: 'Comedia/ Romance', actorPrincipal: 'Adam Sandler', wikipediaActorPrincipal:'https://es.wikipedia.org/wiki/Adam_Sandler', actorSecundario: 'Jennifer Aniston', wikipediaActorSecundario:'https://es.wikipedia.org/wiki/Jennifer_Aniston', linkParaMirar: '', sinopsis: 'El cirujano Danny decide contratar a su ayudante Katherine, una madre soltera con hijos, para que finjan ser su familia. Su intención es demostrarle a Palmer que su amor por ella es tan grande que está a punto de divorciarse de su mujer.',}
    const VENOM = {nombre: 'Venom', generos: 'Acción/ Ciencia ficción', actorPrincipal: 'Tom Hardy', wikipediaActorPrincipal:'https://es.wikipedia.org/wiki/Tom_Hardy', actorSecundario: 'Michelle Williams', wikipediaActorSecundario:'https://es.wikipedia.org/wiki/Michelle_Williams_(actriz)', linkParaMirar: '', sinopsis: 'El periodista Eddie Brock está investigando a Carlton Drake, el célebre fundador de Life Foundation. Brock establece una simbiosis con un ente alienígena que le ofrece superpoderes, pero el ser se apodera de su personalidad y lo vuelve perverso.',}
    
    const PELICULAS_A_GUARDAR = [
        AGENTE_X, HABLAME, JURASSIC_WORLD, ONE_DAY, SICK, TED, UNA_ESPOSA_DE_MENTIRA, VENOM
    ]
    
    localStorage.setItem(LOCALSTORAGE_PELICULAS, JSON.stringify(PELICULAS_A_GUARDAR))
}