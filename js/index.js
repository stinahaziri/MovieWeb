const api_key = "api_key=0051e0d8c6fdd225acf8de23a5f98a8c";
const baseUrl = "https://api.themoviedb.org/3/";
const imgUrl = "https://image.tmdb.org/t/p/w500";

const apiUrl = `${baseUrl}discover/movie?sort_by=popularity.desc&${api_key}`;
const showUrl = `${baseUrl}tv/popular?${api_key}&language=en-US&page=1`;
const searchUrl = `${baseUrl}search/movie?${api_key}`;
const searchUrlTv = `${baseUrl}search/tv?${api_key}`;

const btnMovie = document.getElementById("movie");
const btnShow = document.getElementById("tv");
const search = document.getElementById("search-term");
const formm = document.querySelector(".search-form");
const container = document.getElementById("popular-movies");

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      container.innerHTML = data.results.map(item => `
        <div class="movies">
          <img src="${imgUrl + item.poster_path}" alt="${item.title || item.name}">
          <h3>${item.title || item.name}</h3>
          <span>${item.vote_average}</span>
        </div>
      `).join("");
    });
}

formm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value.trim();
  const url = searchTerm ? 
    (btnMovie.checked ? `${searchUrl}&query=${searchTerm}` : `${searchUrlTv}&query=${searchTerm}`) :
    (btnMovie.checked ? apiUrl : showUrl);
  getMovies(url);
  search.value = "";
});

btnMovie.addEventListener("change", () => getMovies(apiUrl));
btnShow.addEventListener("change", () => getMovies(showUrl));


// Event për kërkimin e filmave ose shfaqjeve
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();
  const isMovie = radioMovies.checked;
  const url = searchTerm 
    ? `${isMovie ? searchUrl : searchUrlTv}&query=${searchTerm}` 
    : (isMovie ? apiUrl : showUrl);
    
  getMovies(url);
  searchInput.value = "";
});

// Ndryshimi midis Movies & TV Shows
radioMovies.addEventListener("change", () => getMovies(apiUrl));
radioShows.addEventListener("change", () => getMovies(showUrl));

// Ngarkon fillimisht filma
getMovies(apiUrl);