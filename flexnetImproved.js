const APIURL = 'https://flexnet-backend-nboddrddha-uc.a.run.app/movies/?skip=1';

getMovies(APIURL);

async function getMovies(url) {
    const response = await fetch(url);
    const movies = await response.json();
    let data1 = "";
    
    movies.forEach((movie) => {
        const fullImagePath = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
        
        data1 += `
            <div class="movie-container">
                <div class="box">
                    <h2>${movie.original_title}</h2>
                    <div class="box-img">
                        <img src="${fullImagePath}" alt="img" class="images">
                    </div>
                    <h3><p>${movie.overview}</p></h3>
                    <span>${movie.genre_ids}</span>
                </div>
            </div>
        `;
    });
    
    document.getElementById("get-api").innerHTML = data1;
}

