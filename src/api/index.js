import axios from 'axios'

const apiKey = '3372f23f52c7e6f125f79c32740bf625'
const homePath = 'https://api.themoviedb.org/3'
const discoverPath = `/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`
const searchPath = query => `/search/movie?api_key=${apiKey}&query=${query}`

export const getSampleMovies = () => (
  axios.get(`${homePath}${discoverPath}`)
    .then(res => res.data.results)
    .catch(err => console.log(err))
)

export const getMoviesByQuery = query => (
  axios.get(`${homePath}${searchPath(query)}`)
    .then(res => res.data.results)
    .catch(err => console.log(err))
)
