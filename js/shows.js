const api_key = "api_key=0051e0d8c6fdd225acf8de23a5f98a8c";
const baseUrl = "https://api.themoviedb.org/3/";
const apiUrl = "https://api.themoviedb.org/3/tv/popular?api_key=0051e0d8c6fdd225acf8de23a5f98a8c&language=en-US&page=1";
const imgUrl = "https://image.tmdb.org/t/p/w500";
console.log(apiUrl);


let contanier = document.getElementById("popular-shows");

let link = document.createElement("a")
let bb = link.setAttribute('href', "tv-details.html")



getMovies(apiUrl);

function getMovies(url) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.results);
      showMovies(data.results);
    });
}
function showMovies(data) {
  contanier.innerHTML = "";
  data.forEach((movies) => {
    const {id, original_name, vote_average, poster_path, overview, first_air_date } = movies;
    let mainPart = document.createElement("div");



    mainPart.classList.add("card");
    mainPart.innerHTML = `
<a href="tv-details.html?id=${id}">
<img src="${imgUrl + poster_path}" class="card-img-top" alt="${ original_name}" />
</a>
      <div class="card-body">
        <h5 class="card-title">${original_name}</h5>
        <p class="card-text">
        ${overview}
          <small class="text-muted">Release:${first_air_date}</small>
        <h5 class="card-title">Rate:  ${vote_average}</h5>
        </p>
      
 `;
    contanier.appendChild(mainPart);
    mainPart.className = "card";
  });

}
