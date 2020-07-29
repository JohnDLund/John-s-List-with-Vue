import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from "../router"

const _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api",
  timeout: 3000
})


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    houses: [],
    activeHouse: {}
  },

  mutations: {
    setHouses(state, houseData) {
      state.houses = houseData
    }
  },

  actions: {
    async getHouses({ commit, dispatch }) {
      try {
        let res = await _api.get("houses")

        commit("setHouses", res.data.data)
      } catch (error) {
        console.error(error);
      }
    },

    async createHouse({ dispatch }, newHouseData) {
      console.log(newHouseData)
      try {
        let res = await _api.post("houses", newHouseData)
        console.log(res.data)
        dispatch("getHouses")
      } catch (error) {
        console.error(error)
      }
    },
  },

  modules: {

  }
})
