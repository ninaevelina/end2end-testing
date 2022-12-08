import { IOmdbResponse } from "../../src/ts/models/IOmdbResponse";
import { IMovie } from "../../src/ts/models/Movie";

export const movies: IMovie[] = [
{Title: "Spider-Man", imdbID: "tt0145487", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",Year: "2002"}, 
{Title: "Spider-Man: No Way Home", imdbID: "tt10872600", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg", Year: "2021"}, 
{Title: "The Amazing Spider-Man", imdbID: "tt0948470", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg", Year: "2012"}, 
{Title: "Spider-Man: Homecoming", imdbID: "tt2250912", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg", Year: "2017"},
{Title: "Spider-Man 2", imdbID: "tt0316654", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg", Year: "2004"}, 
{Title: "Spider-Man 3", imdbID: "tt0413300", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg", Year: "2007"}, 
{Title: "Spider-Man: Into the Spider-Verse", imdbID: "tt4633694", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg", Year: "2018"}, 
{Title: "The Amazing Spider-Man 2", imdbID: "tt1872181", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_SX300.jpg", Year: "2014"},
{Title: "Spider-Man: Far from Home", imdbID: "tt6320628", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg", Year: "2019"}, 
{Title: "Along Came a Spider", imdbID: "tt0164334", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BOTVlY2VhMWEtYmRlOC00YWVhLWEzMDktZWJlYzNiMWJmZTIwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", Year: "2001"},
];

export const mockResponse: IOmdbResponse = { Search: movies};