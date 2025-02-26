    
  const api_key = "api_key=0051e0d8c6fdd225acf8de23a5f98a8c";
  const baseUrl = "https://api.themoviedb.org/3/";
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const detailsContainer = document.getElementById("details-container");

  const contanier = document.getElementById("contanier");
  const detailsBottom = document.getElementById("details-bottom");
  const text_secondary = document.getElementsByClassName("text-secondary");
  const thirdElement = document.querySelector('#list li:nth-child(3)');
  const firstElement = document.querySelector('#list li:nth-child(1)');
  const secondElement = document.querySelector('#list li:nth-child(2)');

  const list_group = document.getElementById("list-group");



  function getMovieDetailsById(movieId) {
    const detailsUrl = `${baseUrl}tv/${movieId}?${api_key}`;
    console.log(detailsUrl);
    return fetch(detailsUrl)
      .then((response) => response.json())
      .then((data) => data);
  }
  thirdElement.innerHTML = "";
  firstElement.innerHTML = "";
  secondElement.innerHTML = "";

  list_group.innerHTML = ""
  function showMovieDetails(data) {

    console.log("Movie Details:", data);
      console.log(data);
    const { name, status,vote_average, poster_path, overview,genres,number_of_episodes,number_of_seasons,
      } = data;
  //more info
  //number_of_episodes
  const number_of_episodesText=document.createElement("span");
  number_of_episodesText.classList.add("text-secondary");
  number_of_episodesText.textContent="Number Of Episodes: ";

  const number_of_episodesValue=document.createElement("span");
  number_of_episodesValue.style.color="white"
  number_of_episodesValue.textContent=number_of_episodes;
  number_of_episodesText.appendChild(number_of_episodesValue)

  // //last_episode_to_air

  const nrSeasonsText=document.createElement("span");
  nrSeasonsText.classList.add("text-secondary");
  nrSeasonsText.textContent="Number Of Seasons: ";

  const nrSeasonsTextValue=document.createElement("span");
  nrSeasonsTextValue.style.color="white"
  nrSeasonsTextValue.textContent=number_of_seasons;
  nrSeasonsText.appendChild(nrSeasonsTextValue)
  secondElement.appendChild(nrSeasonsText)



  const statusText=document.createElement("span");
  statusText.textContent="Status: ";
  statusText.classList.add("text-secondary")

  const statusValue=document.createElement("span");
  statusValue.textContent=status;
  statusValue.style.color="white";
  statusText.appendChild(statusValue);

  firstElement.appendChild(number_of_episodesText);
  list_group.appendChild(firstElement);

  thirdElement.appendChild(statusText);
  list_group.appendChild(secondElement);

  list_group.appendChild(thirdElement);

  //end of moive
    const movieDetailsElement = document.createElement("div");
    movieDetailsElement.classList.add("movie-details");


    const movieImage = document.createElement("img");
    movieImage.src = imgUrl + poster_path;
    movieImage.alt = name;

    contanier.appendChild(movieImage)
    const movieTitle = document.createElement("h2");
    movieTitle.textContent = name;


    const iconn = document.createElement("i");
  iconn.className = "fas fa-star text-primary";
  const movieVoteAverage = document.createElement("p");
  movieVoteAverage.appendChild(iconn);
  const voteAverageText = document.createTextNode(" " + vote_average);
  movieVoteAverage.appendChild(voteAverageText);
  const voteAverageLabelText = document.createTextNode("Vote Average: ");
  movieVoteAverage.insertBefore(voteAverageLabelText, iconn);

    // vote_average.toFixed(1); 

    const movieOverview = document.createElement("p");
    movieOverview.textContent = `${overview}`;

    const movieGenre=document.createElement("ul")
  for(const genre of genres){
    const genresElement=document.createElement("li")
    genresElement.textContent=genre.name
    movieGenre.appendChild(genresElement)
  }

    movieDetailsElement.appendChild(movieTitle);
    movieDetailsElement.appendChild(movieVoteAverage);

    movieDetailsElement.appendChild(movieOverview);
  movieDetailsElement.appendChild(movieGenre)

    detailsContainer.innerHTML = "";  
    detailsContainer.appendChild(movieDetailsElement);

  }

  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get("id");



  if (movieId) {
    getMovieDetailsById(movieId)
      .then((data) => showMovieDetails(data))
      .catch((error) => console.log("Error:", error));
  }
