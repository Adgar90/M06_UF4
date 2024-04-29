// Token d'autorització

const token_auth = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMThhZmZjNTJhZTFmODZkNzZhOTUzMWZkZGNkNDc4YSIsInN1YiI6IjY2MWQ1ODFkNGNhNjc2MDEzMTFiYmFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dO_-pvV7vqs53u1bB4-ffG5Ik5gMAHdKQL1kOIj8_vQ';
// Variables globals
let total_pages = 0;
let current_page = 1;
let current_query = "";

let moviesResult = document.getElementById("moviesResult");

window.addEventListener('scroll', () => {
    const {scrollTop, scrollHeight,clientHeight} =
    document.documentElement;
    //Comprovem la posició en que ens trobem
    if (scrollTop + clientHeight >= scrollHeight - 1 &&
    current_page<total_pages) {
        //En cas d'arribar al final de l'scroll, actualizem la pàgina actual a +1 i tornem a executar la cerca
        current_page+=1;
        searchMovies(current_query);
    }
});

async function setFav(id, favBool){
    //Netejem innerHTML
    moviesResult.innerHTML="";
    //Configuració options
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: token_auth
        },
        body: JSON.stringify({media_type: 'movie', media_id: id, favorite: favBool})
    };
    let url = 'https://api.themoviedb.org/3/account/21215434/favorite';
    await fetch(url, options);
    //Cridem funció per mostrar favorits
    showFavs();
}

async function showFavs(){
    moviesResult.innerHTML="";
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: token_auth
        }
    };
    let url = 'https://api.themoviedb.org/3/account/21215434/favorite/movies';
    let response = await fetch(url, options);
    let data = await response.json();
    console.log(data.results);
    data.results.forEach(movie => printMovie(movie, true, false));
}

async function searchMovies(query){
    clearInput();
    removeActive();
    //Condicional que comprova si s'ha realitzat una cerca nova
    if (current_query != query) {
        current_page = 1;
        moviesResult.innerHTML="";
    }
    //Actualització variable global per mantindre la query en cas de fer scroll i voler accedir a la pàgina següent
    current_query = query;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: token_auth
        }
    };
    let url = `https://api.themoviedb.org/3/search/movie?query=${query}&page=${current_page}`;
    let response = await fetch(url, options);
    let data = await response.json();
    total_pages = data.total_pages;
    //Iteració amb funció asíncrona del resultat del fetch per la cerca de les pel·lícules el qual comprova l'estat de cada pel·lícula per saber si es troba en favorits
    data.results.forEach( async movie  => {
        let url = `https://api.themoviedb.org/3/movie/${movie.id}/account_states`;
        let response = await fetch(url, options);
        let data = await response.json();
        //Condicional per prevenir printejar les pel·lícules seleccionades com a favorits
        if (!data.favorite) printMovie(movie, false, false);
    });
}



/* FUNCIONS D'INTERACCIÓ AMB EL DOM */

// Click Favorites
document.getElementById("showFavs").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");
    showFavs();
})

// Click Watchlist
document.getElementById("showWatch").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");
    //showWatch();
})

/* Funcions per detectar la cerca d'una pel·lícula */
// Intro a l'input
document.getElementById("search").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchMovies(this.value);
    }
});

// Click a la lupa
document.querySelector(".searchBar i").addEventListener("click", ()=>searchMovies(document.getElementById("search").value));

// Netejar l'input
document.getElementById("search").addEventListener('click', ()=>clearInput()); 

function clearInput(){
    document.getElementById("search").value="";
}

// Elimina l'atribut active del menú
function removeActive(){
    document.querySelectorAll(".menu li a").forEach(el=>el.classList.remove("active"));
}

/* Funció per printar les pel·lícules */
function printMovie(movie, fav, watch){

    let favIcon = fav ? 'iconActive' : 'iconNoActive';
    let watchIcon = watch ? 'iconActive' : 'iconNoActive';

    moviesResult.innerHTML += `<div class="movie">
                                    <img src="https://image.tmdb.org/t/p/original${movie.poster_path}">
                                    <h3>${movie.original_title}</h3>
                                    <div class="buttons">
                                        <a id="fav" onClick="setFav(${movie.id}, ${!fav})"><i class="fa-solid fa-heart ${favIcon}"></i></a>
                                        <a id="watch" onClick="setWatch(${movie.id}, ${!watch})"><i class="fa-solid fa-eye ${watchIcon}"></i></a>
                                    </div>`;
}

