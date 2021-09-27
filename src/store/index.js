import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      token: ''
    }
  }
})

export default store
