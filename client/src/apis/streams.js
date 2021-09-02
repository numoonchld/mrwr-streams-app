import axios from 'axios'

const axiosConfig = {
  baseURL: `http://localhost:3001`
}

export default axios.create(axiosConfig)