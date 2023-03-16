const body = document.querySelector("body");
const btnEl = document.querySelector("button");
const inputEl = document.querySelector("input");
inputEl.addEventListener("input", () => {
  const title = inputEl.value;
  clickBtn(title);
});

function clickBtn(title) {
  new Promise(function (res, rej) {
    btnEl.addEventListener("click", (e) => {
      e.preventDefault();
      const title = inputEl.value;
      inputEl.value = "";
      getMovies(title).then((movie) => {
        createMovieList(movie);
      });
    });
    res();
  });
}

function createMovieList(movie) {
  const movieList = document.createElement("div");
  movie.forEach((item) => {
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movieContainer");
    const movieTitle = document.createElement("div");
    const movieImg = document.createElement("img");
    const movieYear = document.createElement("span");
    const movieId = document.createElement("div");
    const moviePlot = document.createElement("div");
    movieId.textContent = item.imdbID;
    movieTitle.textContent = item.Title;
    movieYear.textContent = item.Year;
    movieImg.src = item.Poster;
    movieContainer.append(movieYear);
    movieContainer.append(movieImg);
    movieContainer.append(movieTitle);
    movieList.append(movieContainer);
    movieContainer.addEventListener("click", () => {
      const realMovieId = movieId.textContent;
      getMovieDetail(realMovieId).then((plot) => {
        moviePlot.textContent = plot;
        movieContainer.append(moviePlot);
      });
    });
  });
  body.appendChild(movieList);
}

async function getMovies(title) {
  const res = await fetch(
    `https://omdbapi.com/?apikey=7035c60c${`&s=${title}`}`
  )
    .then((result) => {
      const json = result.json();
      return json;
    })
    .then((json) => {
      const movie = json.Search;
      return movie;
    });
  return res;
}

async function getMovieDetail(id) {
  const res = await fetch(
    `https://omdbapi.com/?apikey=7035c60c&i=${id}&plot=full`
  )
    .then((result) => {
      const json = result.json();
      return json;
    })
    .then((json) => {
      const plot = json.Plot;
      return plot;
    });
  return res;
}
