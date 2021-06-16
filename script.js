const numberOfFilms = prompt();
const personalMovieDB = {
count: numberOfFilms,
movies:{

},
actors:{},
genres:[],
privat:true
};
const lastFilm1=prompt("Последний фильм"),
    bandFilm1=prompt("Оцените"),
    lastFilm2=prompt("Последний фильм"),
    bandFilm2=prompt("Оцените");
personalMovieDB.movies[lastFilm1]=bandFilm1;
personalMovieDB.movies[lastFilm2]=bandFilm2;
console.log(personalMovieDB);
