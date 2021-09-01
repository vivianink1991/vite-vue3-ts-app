import axios from './http-config'

const getHomeData = () => {
  return axios.get('/home/list')
}

export default {
  getHomeData
}
