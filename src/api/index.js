import axios from 'axios'

const apiKey = '3372f23f52c7e6f125f79c32740bf625'
const homePath = 'https://api.themoviedb.org/3'
const searchPath = `/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false`
const discoverPath = `/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`

export const getSampleMovies = () => (
  axios.get(`${homePath}${discoverPath}`)
    .then(res => res.data.results)
    .catch(err => console.log(err))
)

export const searchAllMovies = params => (
  axios.get(`${homePath}${searchPath}`, { params })
)
