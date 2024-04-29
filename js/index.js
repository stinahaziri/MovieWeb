const api_key = "api_key=0051e0d8c6fdd225acf8de23a5f98a8c";
const baseUrl = "https://api.themoviedb.org/3/";
let apiUrl = baseUrl + "/discover/movie?sort_by-popularity.desc&" + api_key;
const imgUrl = "https://image.tmdb.org/t/p/w500";

const showUrl = "https://api.themoviedb.org/3/tv/popular?api_key=0051e0d8c6fdd225acf8de23a5f98a8c&language=en-US&page=1";
const searchShowUrl ='https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=0051e0d8c6fdd225acf8de23a5f98a8c';
const searchUrl = baseUrl + '/search/movie?' + api_key;
console.log(searchUrl);
const searchUrlTv = baseUrl + '/search/tv ?' + api_key;





const btnShow = document.getElementById('tv');
const formm = document.querySelector(".search-form");
const search = document.getElementById("search-term");



let contanier = document.getElementById("popular-movies");
let form = document.getElementById("movie");

const btn = document.querySelector('#movie');



if (btn.checked) { 
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
}

if (btnShow.checked) {
function filterFunction(e) {
  e.preventDefault();
  const searchTermm = search.value.trim();

  if (searchTermm) {
    getMovies(searchUrlTv + '&query=' + searchTermm);
  } else {
    getMovies(showUrl);
  }
  search.value = '';
}
}

formm.addEventListener("submit", filterFunction);

getMovies(showUrl);
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

const radioButtons = showUrl;

function showMovies(data) {
  contanier.innerHTML = ""
  data.forEach((movies) => {
    const { title,original_name,original_title,name,poster_path, vote_average } = movies;
    const vv= original_title || original_name;
    const main = document.createElement("div");
    main.classList.add("movies");

    if (btn.checked) {
      main.innerHTML = `
        <img src="${imgUrl + poster_path}" alt="">
        <h3>${title}</h3>
          <span>${vote_average}</span>
          
     `;
     search.value = '';
    }


    if (btnShow.checked) {
      main.innerHTML = `
        <img src="${imgUrl + poster_path}" alt="">
        <h3>${vv}
          <span>${vote_average}</span>
     `;
    }
    search.value = '';
    contanier.appendChild(main);
  });

}





function btnFunction() {
  if (btn.checked) {
    let apiUrl = baseUrl + "/discover/movie?sort_by-popularity.desc&" + api_key; // Replace with the actual API URL
    getMovies(apiUrl);
  } else {
    // alert("No movies selected");
  }
}
btn.addEventListener("click", btnFunction);




function showFunction() {
  if (btnShow.checked) {
    const showUrl = "https://api.themoviedb.org/3/tv/popular?api_key=0051e0d8c6fdd225acf8de23a5f98a8c&language=en-US&page=1";
    getMovies(showUrl);
    
  } else {
    // alert("No movies selected");
  }
}
btnShow.addEventListener("click", showFunction);











