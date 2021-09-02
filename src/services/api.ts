import axios from './http-config'

const API_PRE = import.meta.env.VITE_API_PRE

const getHomeData = () => {
  return axios.get(`${API_PRE}/api/home/list`)
}

export default getHomeData
