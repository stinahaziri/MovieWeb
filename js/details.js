
const api_key = "api_key=0051e0d8c6fdd225acf8de23a5f98a8c";
const baseUrl = "https://api.themoviedb.org/3/";
const imgUrl = "https://image.tmdb.org/t/p/w500";
const detailsContainer = document.getElementById("details-container");
const contanier = document.getElementById("contanier");
const detailsBottom = document.getElementById("details-bottom");
const text_secondary = document.getElementsByClassName("text-secondary");
const thirdElement = document.querySelector('#list li:nth-child(3)');
console.log(thirdElement);
const firstElement = document.querySelector('#list li:nth-child(1)');
const secondElement = document.querySelector('#list li:nth-child(2)');
const fourthElement = document.querySelector('#list li:nth-child(4)');
const list_group = document.getElementById("list-group");
console.log(list_group);



function getMovieDetailsById(movieId) {
  const detailsUrl = `${baseUrl}movie/${movieId}?${api_key}`;
  console.log(detailsUrl);
  return fetch(detailsUrl)
    .then((response) => response.json())
    .then((data) => data);
}
thirdElement.innerHTML = "";
firstElement.innerHTML = "";
secondElement.innerHTML = "";
fourthElement.innerHTML = "";
list_group.innerHTML = ""
function showMovieDetails(data) {

  console.log("Movie Details:", data); // Check the received data in the console
  console.log(data);
  const { title, vote_average, poster_path, genres,overview, release_date, runtime, budget, revenue, status, production_companies

  } = data;

  const movieDetailsElement = document.createElement("div");
  movieDetailsElement.classList.add("movie-details");

  //moreInfo
  //budget
  const budgetText = document.createElement("span");
  budgetText.classList.add("text-secondary");
  budgetText.textContent = `Budget: `;

  const dudgetValue = document.createElement("span");
  const nrDecimal = budget.toLocaleString();
  dudgetValue.textContent = `$${nrDecimal}`
  //revenue
  const revenueText = document.createElement("span");
  revenueText.classList.add("text-secondary");
  revenueText.textContent = `Revenue: `;

  const revenueValue = document.createElement("span");
  const secondNrDecimal = revenue.toLocaleString();
  revenueValue.textContent = `$${secondNrDecimal}`;
  //runtime
  const runTimeText = document.createElement("span");
  runTimeText.classList.add("text-secondary");
  runTimeText.textContent = `Runtime: `;

  const runTimeValue = document.createElement("span");
  runTimeValue.textContent = runtime;
  //status
  const statusText = document.createElement("span");
  statusText.classList.add("text-secondary");
  statusText.textContent = `Status: `;

  const statusValue = document.createElement("span");
  statusValue.textContent = `${status}`
  //list_group
  const listGroup = document.createElement("div");

  for (const company of production_companies) {
    const companyNameElement = document.createElement("span");
    companyNameElement.textContent = company.name;
    listGroup.appendChild(companyNameElement);
    list_group.appendChild(listGroup)
  }



  thirdElement.appendChild(runTimeText);
  thirdElement.appendChild(runTimeValue);
  firstElement.appendChild(budgetText);
  firstElement.appendChild(dudgetValue)
  secondElement.appendChild(revenueText);
  secondElement.appendChild(revenueValue);
  fourthElement.appendChild(statusText);
  fourthElement.appendChild(statusValue);
  //end moreInfo

  const movieImage = document.createElement("img");
  movieImage.src = imgUrl + poster_path;
  movieImage.alt = title;

  contanier.appendChild(movieImage)
  const movieTitle = document.createElement("h2");
  movieTitle.textContent = title;

  const movieVoteAverage = document.createElement("p");
  movieVoteAverage.textContent = `Vote Average: ${vote_average}`;

  const movieOverview = document.createElement("p");
  movieOverview.textContent = `${overview}`;


  const movieReleaseDate = document.createElement("p");
  movieReleaseDate.textContent = `Release Date: ${release_date}`;


  movieDetailsElement.appendChild(movieTitle);
  movieDetailsElement.appendChild(movieVoteAverage);
  movieDetailsElement.appendChild(movieOverview);
  movieDetailsElement.appendChild(movieReleaseDate);
  // movieDetailsElement.appendChild(movieGenre)

  detailsContainer.innerHTML = "";
  detailsContainer.appendChild(movieDetailsElement);

}

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("id");

console.log("Movie ID:", movieId);
if (movieId) {
  
  getMovieDetailsById(movieId)
    .then((data) => showMovieDetails(data))
    .catch((error) => console.log("Error:", error));
}
