import { createStore } from 'vuex'
import counter from './modules/counter'

// Create a new store instance.
export default createStore({
  modules: {
    counter
  }
})
