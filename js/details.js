// const api_key = "api_key=0051e0d8c6fdd225acf8de23a5f98a8c";
// const baseUrl = "https://api.themoviedb.org/3/";
// const imgUrl = "https://image.tmdb.org/t/p/w500";
// const detailsContainer = document.getElementById("details-container");

// const container = document.getElementById("container");
// const listGroup = document.getElementById("list-group");

// async function getMovieDetailsById(movieId) {
//     const detailsUrl = `${baseUrl}movie/${movieId}?${api_key}&language=en-US`;
//     console.log(detailsUrl);

//     try {
//         const response = await fetch(detailsUrl);
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error("Gabim në marrjen e të dhënave:", error);
//     }
// }

// function showMovieDetails(data) {
//     console.log("Movie Details:", data);

//     const { title, status, vote_average, poster_path, overview, genres, release_date, runtime } = data;


//     detailsContainer.innerHTML = "";
//     container.innerHTML = "";
//     listGroup.innerHTML = "";

//     const movieImage = document.createElement("img");
//     movieImage.src = poster_path ? imgUrl + poster_path : "../images/no-image.jpg";
//     movieImage.alt = title;
//     container.appendChild(movieImage);

  
//     const movieTitle = document.createElement("h2");
//     movieTitle.textContent = title;

//     const iconStar = document.createElement("i");
//     iconStar.className = "fas fa-star text-primary";
//     const movieVoteAverage = document.createElement("p");
//     movieVoteAverage.appendChild(iconStar);
//     movieVoteAverage.appendChild(document.createTextNode(" " + vote_average.toFixed(1)));
//     const voteAverageLabelText = document.createTextNode("Vote Average: ");
//     movieVoteAverage.insertBefore(voteAverageLabelText, iconStar);

//     const movieOverview = document.createElement("p");
//     movieOverview.textContent = overview;

//     const movieGenres = document.createElement("ul");
//     for (const genre of genres) {
//         const genreElement = document.createElement("li");
//         genreElement.textContent = genre.name;
//         movieGenres.appendChild(genreElement);
//     }

//     const releaseDateText = document.createElement("span");
//     releaseDateText.classList.add("text-secondary");
//     releaseDateText.textContent = "Release Date: ";

//     const releaseDateValue = document.createElement("span");
//     releaseDateValue.style.color = "white";
//     releaseDateValue.textContent = release_date;
//     releaseDateText.appendChild(releaseDateValue);

//     const runtimeText = document.createElement("span");
//     runtimeText.classList.add("text-secondary");
//     runtimeText.textContent = "Runtime: ";

//     const runtimeValue = document.createElement("span");
//     runtimeValue.style.color = "white";
//     runtimeValue.textContent = `${runtime} min`;
//     runtimeText.appendChild(runtimeValue);

//     listGroup.appendChild(releaseDateText);
//     listGroup.appendChild(runtimeText);

//     const movieDetailsElement = document.createElement("div");
//     movieDetailsElement.classList.add("movie-details");
//     movieDetailsElement.appendChild(movieTitle);
//     movieDetailsElement.appendChild(movieVoteAverage);
//     movieDetailsElement.appendChild(movieOverview);
//     movieDetailsElement.appendChild(movieGenres);

//     detailsContainer.appendChild(movieDetailsElement);
// }

// const urlParams = new URLSearchParams(window.location.search);
// const movieId = urlParams.get("id");


// if (movieId) {
//     getMovieDetailsById(movieId)
//         .then((data) => showMovieDetails(data))
//         .catch((error) => console.log("Gabim:", error));
// }
