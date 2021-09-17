const addMovie = () => {
  const favoriteMovie = document.getElementById('filme').value;

  if (
    favoriteMovie.toLowerCase().endsWith('.jpg') ||
    favoriteMovie.toLowerCase().endsWith('.png')
  ) {
    listMoviesOnScreen(favoriteMovie);
  } else {
    console.log('entre com uma imagem válida');
  }

  document.getElementById('filme').value = '';
};

const listMoviesOnScreen = (movie) => {
  const favoriteMovieElement = `<img src='${movie}'>`;
  const movieList = document.getElementById('listaFilmes');

  movieList.innerHTML = movieList.innerHTML + favoriteMovieElement;
};
