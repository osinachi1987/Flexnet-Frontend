const APIURL = 'https://flexnet-backend-nboddrddha-uc.a.run.app/movies/?skip=1&limit=10';
const main = document.getElementById("movies");

getMovies(APIURL);

async function getMovies(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = "";
    movies.forEach(movie => {
        const { poster_path, title, overview, id} = movie;
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        movieEl.innerHTML = '
        <img src="${IMGPATH}&{poster_path}" alt="${title}"
        <div class="movie_data">
            <h3>${movie_title}</h3>
            <span class="movie_Rating">${getClassByRate(movie_rating)}</span>
        </div>
        <div class="overview">
            <h3>overview</h3>
        </div>
        ';
        main.appendChild(movieEl);
    }); 
}


function getClassByRate(movie_rating){
    if(movie_rating >= 8){
        return "green";
    }else if(movie_rating >= 5){
        return "orange";
    }else{
        return "red";
    }
}

FormData.addEventListener("submit", e => {
    e.preventDefault();
    const searchTerm = search.value;
    if(searchTerm){
        getMovies(SEARCHAPI + searchTerm);
    search.value = "";
    }
});