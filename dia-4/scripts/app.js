const movieImageArray = [
  'https://upload.wikimedia.org/wikipedia/pt/thumb/4/47/Koe-no-Katachi-poster-film.jpg/240px-Koe-no-Katachi-poster-film.jpg',
  'https://media.fstatic.com/DMP_ADn0CVr0OxE9Fz6_oQ5z1Hc=/290x478/smart/media/movies/covers/2011/06/7c49092a6e7223cebd5bd8dfd579b6e6.jpg',
  'https://upload.wikimedia.org/wikipedia/pt/thumb/5/58/Donnie_Darko.jpg/220px-Donnie_Darko.jpg',
];

movieImageArray.forEach((movie) => {
  document.write(`<img src='${movie}' />`);
});
