const recomend = document.getElementById (`recomend`)

const trend = document.getElementById (`trend`)

const content = document.getElementById (`content`)

//Recomended cards

let Strangerthings ={
    banner: `https://www.xtrafondos.com/descargar.php?id=10323&resolucion=3840x2160`,
    poster: `<img src="https://i.pinimg.com/originals/47/3d/cf/473dcf767da9da810461657853891702.png">`,
    name: "Stranger Things",
    description: "A raíz de la desaparición de un niño, un pueblo desvela un misterio relacionado con experimentos secretos, fuerzas sobrenaturales aterradoras y una niña muy extraña",
    rating: 5,
    edad: 12,
    fav: true,
}

let Lucifer={
    banner: `https://www.formulatv.com/images/articulos/107000/107777_YtEk73vBxg12YRsWJqeUz8L9FNioc5PHm-h2.jpg`,
    poster: `<img src="https://i.pinimg.com/originals/b7/c5/84/b7c58410e864aaf12715853637c3447c.png">`,
    name: "Lucifer",
    description: "Harto del infierno, Lucifer abandona su trono en el averno y se marcha a Los Ángeles, donde empieza a trabajar como detective de homicidios.",    
    rating: 4,
    edad: 18,
    fav: true,
}

let Dark ={
    banner: `https://wallpaperaccess.com/full/1510470.jpg`,
    poster: `<img src="https://pics.filmaffinity.com/The_Dark-229800038-large.jpg">`,
    name: "Dark",
    description: "Situada en la ficticia ciudad de Winden (Alemania), Dark sigue las secuelas de la desaparición de un niño que expone los secretos y las conexiones ocultas entre cuatro familias mientras desentrañan lentamente una siniestra conspiración de viaje en el tiempo que abarca tres generaciones.",
    rating: 5,
    edad: 18,
    fav: true,
}

let Formula1 ={
    banner: `https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-02/11aa%20%288%29_1.png?itok=rBC9xbIa`,
    poster: `<img src="https://i.pinimg.com/originals/f5/8f/0e/f58f0ea97f4c923933fa884b2a365416.jpg">`,
    name: "Formula 1 Drive To Survive",
    description: "Pilotos, directores y escuderías de la Fórmula 1 aceleran a fondo dentro y fuera de la pista. El podio tiene tres lugares, pero la meta es una: ganar. Ve todo lo que quieras.",
    rating: 5,
    edad: 12,
    fav: true,
}

let Casapapel ={
    banner: `https://fondosmil.com/fondo/10108.jpg`,
    poster: `<img src="https://www.entupantalla.com/wp-content/uploads/2021/08/ES-ES_Localised_LCDP_S5_Main_Vertical_RGB_PRE20210730-4607-1anz6ou.jpg">`,
    name: "La Casa De Papel",
    description: "Un grupo de asaltantes busca realizar el atraco del siglo al internarse en la Fábrica de Moneda y Timbre de España, guiados por el personaje conocido como El Profesor.",
    rating: 4,
    edad: 18,
    fav: false,
}

let Naruto ={
    banner: `https://gcdn.lanetaneta.com/wp-content/uploads/2020/07/Agarra-las-estaciones-de-Naruto-gratis-ahora-mismo.jpeg`,
    poster: `<img src="https://i.pinimg.com/736x/3f/7c/ca/3f7cca443d0c4756c4c76ab94b6e0131.jpg">`,
    name: "Naruto",
    description: "La obra narra la historia de un ninja huérfano adolescente llamado Naruto Uzumaki, cuyos padres murieron en el ataque del Zorro Demonio de Nueve Colas, y quien aspira a convertirse en Hokage (líder de su aldea) con el propósito de ser reconocido como alguien importante dentro de la aldea y entre sus compañeros.",
    rating: 4,
    edad: 6,
    fav: true,
}

let Ragnarok ={
    banner: `https://images2.alphacoders.com/115/1154072.jpg`,
    poster: `<img src="https://es.web.img2.acsta.net/pictures/21/03/29/15/05/1599153.jpg">`,
    name: "Record Of Ragnarok",
    description: "Antes de erradicar a los humanos de la faz de la Tierra, los dioses les dan una última oportunidad para demostrar su valía. ¡Que empiecen las batallas de Ragnarok! Ve todo lo que quieras.",
    rating: 4,
    edad: 12,
    fav: false,
}

let Edenszero ={
    banner: `https://occ.a.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeBavh0kAaF8VHxTramD6wVDEwH2C_9_R7SdYB6mTr_sG31glObFzq2fYGqnx6bN4y1A1wGFngVaG6QTyfoImCOmsjOmzMpRx-7Hepq7g26nFc23HFSzq7ckQANFmEv1R3YFBg.jpg?r=d32`,
    poster: `<img src="https://es.web.img2.acsta.net/r_1280_720/pictures/21/04/06/17/53/4868127.jpg">`,
    name: "Edens Zero",
    description: "A bordo del Edens Zero, un niño solitario con la capacidad de controlar la gravedad se embarca en una aventura para conocer a la legendaria diosa del espacio conocida como Madre.",
    rating: 4,
    edad: 8,
    fav: false,
}

function Showrecomendcard(movie){
    let html=movie.poster;
    return(html)
}

let recomended = [Strangerthings, Lucifer, Dark, Formula1, Casapapel, Naruto, Ragnarok, Edenszero];
    for(let i=0; i<recomended.length; i++)
    {
        recomend.innerHTML += `<div class="big">`+Showrecomendcard(recomended[i]) + `<div class="rating">` +Showstars(recomended[i]) + `</div>` + `</div>`
    }
    
//Trending cards

let Figo ={
    banner: `https://img2.tokyvideo.com/videos/165/165000/previews/previews_0012_custom_1661416323.8336.jpg`,
    poster: `<img src="https://i.blogs.es/9982ac/202281815593216_2/450_1000.jpeg">`,
    name: "El Caso Figo",
    description: "Este documental analiza uno de los contratos más controvertidos de la historia del fútbol y al fabuloso jugador en el ojo de la tormenta: Luís Figo.",
    rating: 2,
    edad: 12,
}

let Onepiece ={
    banner: `https://www.justwatch.com/images/backdrop/249137539/s640/one-piece-1999`,
    poster: `<img src="https://www.themoviedb.org/t/p/original/nvAPotUDNcKStSOv2ojGZBNOX8A.jpg">`,
    name: "One Piece",
    description: "Una serie que narra las aventuras de Monkey D. Luffy, un joven con cuerpo de goma que hará todo lo posible para convertirse en el rey de los piratas.",
    rating: 5,
    edad: 8,
}

let Boruto ={
    banner: `https://depor.com/resizer/LlquiXLyBS9U218Tp6p4IfHtNu4=/1200x675/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/O27QN42RSRGBHMC4JQBXUJCV4U.jpg`,
    poster: `<img src="https://es.web.img3.acsta.net/r_1280_720/pictures/18/03/06/12/24/2664528.jpg">`,
    name: "Boruto",
    description: "Boruto, hijo del séptimo Hokage Naruto Uzumaki, sigue los pasos de su legendario padre y comienza su entrenamiento en la academia de ninjas.",
    rating: 1,
    edad: 6,
}

let Breakingbad ={
    banner: `https://i.blogs.es/ae7ce7/328257/1366_2000.jpg`,
    poster: `<img src="https://cdn.shopify.com/s/files/1/0482/3452/8936/products/Breaking-Bad-Posters-Films-Vibez-1628641107.jpg?v=1628641142">`,
    name: "Breaking Bad",
    description: "Un profesor de Química de secundaria con cáncer terminal se asocia a un exestudiante para asegurar el futuro de su familia al fabricar y vender metanfetamina.",
    rating: 5,
    edad: 18,
}

let Witcher ={
    banner: `https://occ-0-769-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVWS9pqT4D1VP8vlUp4tpjXcO0T2xb7QHYJAZgmwalMcwqgHKJNUEZdbgwOrydpkKgTrgA-hRPGQh5XYsNydSOMvYCsV1Vnm808M.jpg?r=93a`,
    poster: `<img src="https://es.web.img3.acsta.net/pictures/19/12/06/09/32/5219906.jpg">`,
    name: "The Witcher",
    description: "Geralt de Rivia, un cazador de monstruos mutante, viaja en pos de su destino por un mundo turbulento en el que, a menudo, los humanos son peores que las bestias.",
    rating: 5,
    edad: 18,
}

let Murder ={
    banner: `https://wallpaperaccess.com/full/1918781.jpg`,
    poster: `<img src="https://arcadiareads.files.wordpress.com/2021/12/1poster.png?w=982">`,
    name: "How To Get Away With Murder",
    description: "Annalise Keating, una brillante abogada penalista y profesora de leyes, se involucra en un retorcido caso de homicidio con cinco de sus estudiantes.",
    rating: 4,
    edad: 18,
}

let Peakyblinders ={
    banner: `https://occ.a.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcsNRTCR_xEGk0JKJnrf-zVc7eZYzLh3sojYa1Rude8R_3jboyMRsOysg_b5r0zg69rO15TU_T7aI0lKTy-XVda4em0FsaNpkTcL.jpg?r=15c`,
    poster: `<img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/d7590f135861167.61ef6fb49f8e4.jpg">`,
    name: "Peaky Blinders",
    description: "Chester Campbell, un detective de Belfast, llega a Birmingham con una misión: acabar con las violentas pandillas callejeras que campan a sus anchas por la ciudad.",
    rating: 5,
    edad: 18,
}

let Highrise ={
    banner: `https://occ-0-2794-1348.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABf1LR9frVd7FPFqZ2HHRCxQZpd8LDyGDg-n7immQ9XEt3Cig2ELSR3e6_kFceqZ4BgIKdajFJmxiL012WF29b4ndwhCByk888Abt.jpg?r=e94`,
    poster: `<img src="https://pics.filmaffinity.com/tenku_shinpan-513734500-large.jpg">`,
    name: "High Rise Invasion",
    description: "La estudiante de secundaria Yuri se encuentra en lo alto de un rascacielos en un mundo extraño, donde debe sobrevivir contra asaltantes enmascarados empeñados en matar a sus presas.",
    rating: 4,
    edad: 12,
}

function Showtrendcard(movie){
    let html=movie.poster;
    return(html)
}

let trending = [Figo,Onepiece,Boruto,Breakingbad,Witcher,Murder,Peakyblinders,Highrise];
    for(let i=0; i<trending.length; i++)
    {
        trend.innerHTML += `<div class="trend">`+Showtrendcard(trending[i]) + `</div>`
    }

//Banner

function Showbanner(movie){
    let html = `<div class="banner">

        <img src=${movie.banner} class="image">

        <div class="tittle">
            <h1 class="text">${movie.name}</h1>
            <h3 class="text">(${movie.rating} Rating)</h3>
        </div>

        <div class="infoserie">
            <h4 class="text">${movie.description}</h4>
        </div>

        <div class="button">
            <button class="bannav">
                <img src="baseline_play_arrow_white_48dp.png">
                <h2 class="text">Play</h2>
            </button>
            <button class="bannav">
                <h2 class="text">Save</h2>
                <img src="baseline_bookmark_border_white_48dp.png">
            </button>
            <h3 class="text">${movie.edad} +</h3>
        </div>
    </div>`;
    return(html);
}

content.innerHTML += Showbanner(Dark)

//Rating Stars and Fav

function Showstars(movie){
    lleno = "";
    vacio = "";
    
    for(let i=0; i<(5-movie.rating); i++){
        vacio += `<img src="yellow_outline_star.png"`
    } 

    for(let i=0; i<movie.rating; i++){
        lleno += `<img src="yellow_fill_star.png">`
    } 

    rate = lleno + vacio

    return(rate)
}

