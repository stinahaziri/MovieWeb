const api_key = "api_key=0051e0d8c6fdd225acf8de23a5f98a8c";
const baseUrl = "https://api.themoviedb.org/3/";
const apiUrl = baseUrl + "/discover/movie?sort_by=popularity.desc&" + api_key;
const imgUrl = "https://image.tmdb.org/t/p/w500";

const searchUrl = baseUrl + '/search/movie?' + api_key;
const formm = document.querySelector(".search-form");
const search = document.getElementById("search-term");
const contanier = document.getElementById("search-results");

getMovies(apiUrl);

function getMovies(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      showMovies(data.results);
    });
}

function showMovies(data) {
  contanier.innerHTML = "";

  data.forEach((movie) => {
    const { id, title, vote_average, poster_path, overview, release_date } = movie;
    let movieCard = document.createElement("div");

    movieCard.classList.add("card");
    movieCard.innerHTML = `
      <a href="movie-details.html?id=${id}">
        <img src="${imgUrl + poster_path}" class="card-img-top" alt="${title}" />
      </a>
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">
          ${overview}
          <small class="text-muted">Release: ${release_date}</small>
        </p>
      </div>
    `;

    contanier.appendChild(movieCard);
  });
}

function filterFunction(e) {
  e.preventDefault();
  const searchTerm = search.value.trim();

  if (searchTerm) {
    getMovies(searchUrl + '&query=' + searchTerm);
  
  } else {
    getMovies(apiUrl);
  }
  
  search.value = '';
}


formm.addEventListener("submit", filterFunction)


const btnShow = document.getElementById('tv');
let form = document.getElementById("movie");

const btn = document.querySelector('#movie');

function btnFunction() {
  if (btn.checked) {
    let apiUrl = baseUrl + "/discover/movie?sort_by-popularity.desc&" + api_key; // Replace with the actual API URL
    getMovies(apiUrl);
  } else {
    // alert("No movies selected");
  }
  
  search.value = '';
}
btn.addEventListener("click", btnFunction);




function showFunction() {
  if (btnShow.checked) {
    const showUrl = "https://api.themoviedb.org/3/tv/popular?api_key=0051e0d8c6fdd225acf8de23a5f98a8c&language=en-US&page=1";
    getMovies(showUrl);
    
  } else {
    // alert("No movies selected");
  }
  
  search.value = '';
}
btnShow.addEventListener("click", showFunction);