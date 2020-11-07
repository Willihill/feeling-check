import axios from 'axios'

const HttpBase = axios.create({
  baseURL: 'http://localhost:5000/api/'
})

export default HttpBase
