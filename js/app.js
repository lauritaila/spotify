canciones= [
    {
        codigo: 1,
        titulo:'Horns',
        artista: 'Bryce Fox',
        photo: 'bucket/photo album/horns.jpg',
        ubicacion: { lat: 33.90, lng: -118.39 },
        song: 'bucket/music/horns.mp3',
        comentarios: ['A mis vecinos les ha encantado tanto esta cancion que han invitado a la policia a mi casa para que la escuchen tambien.', 'Mi nueva fantasía sexual es garchar con este temazo de fondo ahre si']
        
    },
    {
        codigo: 2,
        titulo: 'Castle',
        artista: 'Halsey',
        photo: 'bucket/photo album/castle.jpg',
        ubicacion: { lat: 39.27, lng: -74.58 },
        song: 'bucket/music/castle.mp3',
        comentarios: ['Como pude vivir sin esta canción!!!?', 'Esta canción me hace sentir poderosa']
    },
    {
        codigo: 3,
        titulo: 'Dollhouse',
        artista: 'Melani Martinez',
        photo: 'bucket/photo album/dollhouse.jpg',
        ubicacion: { lat: 40.77, lng: -73.96 },
        song: 'bucket/music/dollhouse.mp3',
        comentarios: ['Yo poniendo está canción en el camino después de que mis padres no me quisieron comprar algo de mi grupo favorito de K-Pop.', 'La cante en medio de la escuela,pa que sepan la verdad.Hasta que me acorde que Nadie sabia inglés xd ']
    },
    {
        codigo: 4,
        titulo: 'God is a woman',
        artista: 'Arianna Grande',
        photo: 'bucket/photo album/god is a woman.jpg',
        ubicacion: { lat: 26.412, lng: -80.071},
        song: 'bucket/music/god is a woman.mp3',
        comentarios: ['Pensé que sería una canción católica, pero es un hit para putear, Ari nunca nos defrauda', 'Terrible, oremos (0:51)']
    }, 
    {
        codigo: 5,
        titulo: 'You should see me in a crown',
        artista: 'Billie Eilish',
        photo: 'bucket/photo album/you should see me in a crown.jpg',
        ubicacion: { lat: 33.90, lng: -118.39 },
        song: 'bucket/music/you should see me in a crown.mp3',
        comentarios: ['Como cuando todas se sienten unas divas escuchando esta canción y yo me siento la esclava de billie :v', 'Billie es la puta ama']
    },
    {
        codigo: 6,
        titulo: 'Lovely',
        artista: 'Billie Eilish ft. Khalid',
        photo: 'bucket/photo album/lovely.jpg',
        ubicacion: { lat: 33.90, lng: -118.39 },
        song: 'bucket/music/lovely.mp3',
        comentarios: ['Es curioso como está canción logra hacerme llorar y a la vez calmarme ✨', 'soy la única, que muere por tener la voz de Billie Eilish? :"(']
    },
    {
        codigo: 7,
        titulo: 'Señorita',
        artista: 'Camila Cabello, Shawn Mendes',
        photo: 'bucket/photo album/senorita.jpg',
        ubicacion: { lat: 25.783, lng: -80.133 },
        song: 'bucket/music/senorita.mp3',
        comentarios: ['Ufff Shawn se oye todo sensual diciendo "señorita"🔥', 'Definición de bisexualidad: cuando no sabes si quieres ser camila o shawn en el video']
    },
    {
        codigo: 8,
        titulo: 'Bellaquita (Remix)',
        artista: 'Dalex ft. Lenny Tavárez, Anitta, Natti Natasha, Farruko y J Quiles',
        photo: 'bucket/photo album/bellaquita.jpg',
        ubicacion: { lat: 18.39, lng: -66.08 },
        song: 'bucket/music/bellaquita.mp3',
        comentarios: ['Ponte encima de mi bellaquita :v 🔥🔥👌', 'Y mi unico delito fue comerme ese culito yo le Di nalgada porque no queria besito y por eso fueron los gritos la victima gritaba q ricooo']
    },
    {
        codigo: 9,
        titulo: 'Tutu',
        artista: 'Camilo, Pedro Capo',
        photo: 'bucket/photo album/tutu.jpg',
        ubicacion: { lat: 25.783, lng: -80.133 },
        song: 'bucket/music/tutu.mp3',
        comentarios: ['Por qué no me quiere ???😭🥺', 'Pa bailar pegaitos en la disco beibi con esta cancion de fondo']
    },
    {
        codigo: 10,
        titulo: 'Otro Trago (Remix)',
        artista: 'Sech, Anuel AA, Darell, Ozuna y Nicky Jam',
        photo: 'bucket/photo album/otro trago.jpg',
        ubicacion: { lat: 8.99, lng: -79.50 },
        song: 'bucket/music/otro trago.mp3',
        comentarios: ['A mi vecino le gusto tanto que me tiro un ladrillazo en la ventana para escucharla mejor.', 'Me encanta esta musica mis cantantes favoritos😀 me encanta cuando dise anuel que ella por un hombre no llora😈😊']
    }
]


//icons  play
// fas fa-play  //im im-play  //fas fa-play-circle // far fa-play-circle

//pinta las canciones

function getList() {
    var output = "";
    var data = canciones;

    for (var i in data) {
        //console.log(data[i])
        let cancion = JSON.stringify(data[i]);

        output += "<tr>" +
            "<td> <img class='song_photo' src=' " + data[i].photo + "'></td>" +
            "<td><span class='name' >" + data[i].titulo + "</span></br><span class='per' >" +
            data[i].artista + "</span></td>" +
            "<td>" +
            "<i class='fas fa-play plays'onclick='playMusic(" + cancion + ")'></i>" +
            "</td>" +
            "</tr>";
    }

    document.getElementById("_table").innerHTML = output;

}

// hace que funcione la musica
var cod;
function playMusic(app) {

    let [cancion] = canciones.filter(cancion => cancion.codigo === app.codigo);
    cod = cancion.codigo;

    document.querySelector(".det").innerHTML = "<a class='detalles' href='#ventana1' data-toggle='modal' onclick='initMap(" + cod + ")'>Detalles</a>";
    document.querySelector(".imp").innerHTML = "<audio id ='player' class='au' onended='load(cod)' controls ></audio >";
    var player = document.getElementById("player");
    var photo = document.querySelector(".album_play");


    document.querySelector("#ti").innerHTML = cancion.titulo;
    document.querySelector("#ar").innerHTML = cancion.artista;

    player.src = cancion.song;
    photo.src = cancion.photo;
    player.play();

    //comentarios
    document.getElementById("com").innerHTML = 'Comentarios';
    document.getElementById("text").innerHTML = "<textarea id='idk' placeholder='Escriba Aqui' row='2'></textarea>";

   //console.log(cod);
    
    
    document.getElementById("sent").innerHTML = "<i class='fas fa-paper-plane sentt' onclick='comentario(" + cod + ")'></i>";
    
    //esto es para que se muestren los comentarios existentes
    
    var output = "";

    for (var i in cancion.comentarios) {
        
        output += "<p class='come'>" + cancion.comentarios[i] + "</p>";
    }

    document.getElementById("escritos").innerHTML = output

    //para que pase a la otra cancion

    player.onended = function () {
        canci = cancion.codigo
        jkl = canciones[canci]
        playMusic(jkl)

    };

    //para que abra la ubicacion adecuada
    //AIzaSyBvGqN7unJLeuLA3-hkvD6CwovvMLOVabs

}


//ingreso de comentarios al json

function comentario(cod) {
    txt = document.getElementById("idk").value;

    if (document.getElementById("idk").value.trim() === ""){
        return false;  
    }


    let [ cancion ] = canciones.filter(cancion => cancion.codigo === cod);
    let indice = canciones.indexOf(cancion);
    
    canciones[indice].comentarios.unshift(txt);

    console.log(canciones[indice]);

    document.getElementById('escritos').innerHTML = "<p class='come'>" + txt + "</p>" + document.getElementById('escritos').innerHTML;



    // canciones[(cod-1)].comentarios.push(txt);
    document.getElementById('idk').value = "";
}


//el buscador

function search_song() {

    var input, filter, table, tr, td, i, txtValue;

    input = document.getElementById("bus");
    filter = input.value.toUpperCase();
    table = document.getElementById("_table");
    tr = table.getElementsByTagName("tr");

//esto es para identificar cual es la cancion

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


function initMap(cod) {
    console.log('hasta aqui');


    let [cancion] = canciones.filter(cancion => cancion.codigo === cod);
    let indice = canciones.indexOf(cancion);

    map = new google.maps.Map(document.getElementById('maps'), {
        center: canciones[indice].ubicacion,
        zoom: 8
        
    });

}