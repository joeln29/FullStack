import axios from 'axios'

const countryUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'

const getAll = () => {
  const request = axios.get(countryUrl + "all")
  return request.then(response => response.data)
}

const getCountry = (name) => {
  const request = axios.get(countryUrl + "name/" + `${name.toLowerCase()}`)
  return request.then(response => response.data)
}

export default { getAll, getCountry }