
export function getListMovies(size, movies){
  let popularMovies = [];

  for(let i = 0; i < size; i++){
      popularMovies.push(movies[i]);
  }
  return popularMovies;
}