import axios from "axios";


// URL FILMES EM CARTAS:
// https://api.themoviedb.org/3
// /movie/157336?api_key=53b16e63f45fac5ac5a70223c1784c6e

export const key = '53b16e63f45fac5ac5a70223c1784c6e'

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3"
})

export default api