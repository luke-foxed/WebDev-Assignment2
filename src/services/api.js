import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'https://techcomp.herokuapp.com/'
  })
}
