
const state = {
    currentPage: window.location.pathname,
};

//linku aktiv
function highlightActiveLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === state.currentPage) {
            link.classList.add('active');
        }
    })
}

//me i qit popular movies
//fetch data prej  API
async function fetchAPIData(endpoint) {
    const API_KEY = '0051e0d8c6fdd225acf8de23a5f98a8c';
    const API_URL = 'https://api.themoviedb.org/3/';
    const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();
    return data;
}

async function displayPopularMovies() {
    const result = await fetchAPIData('movie/popular');
    console.log(result?.results);
    result.results.forEach(movie => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
            <a href="movie-details.html?id=${movie.id}">
            ${movie.poster_path ? `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="Movie Title" />
            `
                :
                `<img src="../images/no-image.jpg" class="card-img-top" alt="Movie Title" />`
            }  
            </a>
            <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="card-text">
                    <small class="text-muted">Release: ${movie.release_date}</small>
                </p>
            </div>
        `;

        document.querySelector('#popular-movies').appendChild(div)
    })

}

function init() {
    switch (state.currentPage) {
        case '/':
        case '/index.html':
            displayPopularMovies();
            break;
        case '/shows.html':
            console.log('shows');
            break;
        case '/movie-details.html':
            console.log('details');
            break;
        case '/search.html':
            console.log('search element');
            break;
        case '/tv-details.html':
            console.log('tv det');
            break;
    }
    highlightActiveLink()
}

document.addEventListener('DOMContentLoaded', init)