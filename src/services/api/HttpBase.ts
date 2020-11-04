import axios from 'axios'

const HttpBase = axios.create({
  baseURL: 'http://defneuf.com/api/'
})

export default HttpBase
