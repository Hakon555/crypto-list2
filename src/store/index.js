import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    criptoItems: {}
  },
  mutations: {
    'addData': (state, resp) => {
      state.criptoItems = Object.assign({}, state.criptoItems, resp);
    },
  },
  actions: {
    'getCriptoFromKraken': ({commit}, pairs) => {
      return new Promise((resolve, reject) => {
        axios
        .get('https://api.kraken.com/0/public/Ticker?pair=' + pairs.join(','))
        .then(resp => {
          let newCrypto = {};
          Object.entries(resp.data.result).forEach(([key, value]) => {
            newCrypto[key] = {
              name: key,
              bid: value.b[0],
              ask: value.a[0]
            };
          });
          commit('addData', newCrypto);
          resolve(true);
        })
        .catch(err => {
          reject(err);
        })
      })
    },
  },
  getters: {
    getItems: state => state.criptoItems
  }
})
