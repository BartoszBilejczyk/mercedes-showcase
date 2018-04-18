import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { environment } from './env/env.js'

Vue.use(Vuex)
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    classes: [],
    activeModel: {},
    loading: true,
    loadingStatus: 0
  },
  getters: {
    getData: state => state.classes,
    getActiveModel: state => state.activeModel,
    getLoading: state => state.loading,
    getLoadingStatus: state => state.loadingStatus
  },
  mutations: {
    SET_DATA(state, data) {
      state.classes = data;
    },
    SET_MODELS(state, { index, data }) {
      state.classes[index].models = data
    },
    SET_MODEL_CONFIGURATIONS(state, {index, data}) {
      state.classes[index].models[0].configurations = data
    },
    SET_DATA_IMAGES(state, { index, data }) {
      state.classes[index].classImage = data.EXT020.url;
      state.classes[index].models[0].images = data
    },
    SET_CURRENT_MODEL(state, data) {
      state.activeModel = {};
      state.activeModel = data;
    },
    SET_MODEL_DETAILS(state, data) {
      state.activeModel.details = data;
    },
    SET_LOADING(state, data) {
      state.loading = data;
    },
    RESET_LOADER(state) {
      state.loadingStatus = 0;
    },
    LOADER_COUNTER(state) {
      state.loadingStatus += 1/13
    }
  },
  actions: {
    async setData({commit}) {

      commit('SET_LOADING', true)

      let classesResponse;
      let modelsResponse;
      let configurationsResponse;
      let photoResponse;

      try {
        classesResponse = await axios.get(`http://localhost:9090/https://api.mercedes-benz.com/configurator/v1/markets/pl_PL/classes?apikey=${environment.apiKey}`)

        commit('SET_DATA', classesResponse.data);
        commit('LOADER_COUNTER')

      } catch (ex) {
        return
      }

      for (let i = 0; i <= 1; i++) {
        try {
          modelsResponse = await axios.get(`http://localhost:9090/${classesResponse.data[i]._links.models}`);

          commit('SET_MODELS', {
            index: i,
            data: modelsResponse.data
          });
          commit('LOADER_COUNTER')

        } catch (ex) {
          return
        }
        try {
          configurationsResponse = await axios.get(`http://localhost:9090/${modelsResponse.data[0]._links.configurations}`);

          commit('SET_MODEL_CONFIGURATIONS', {
            index: i,
            data: configurationsResponse.data
          });
          commit('LOADER_COUNTER')

        } catch (ex) {
            return
        }

        try {
          const configurationsResponseWithoutKey = configurationsResponse.data._links.image.replace('apikey=b1435ba6-8cd3-4186-9ab9-871dd4e7ee1e', '');
          photoResponse = await axios.get(`http://localhost:9090/${configurationsResponseWithoutKey}perspectives=EXT000,EXT010,EXT020,EXT040,EXT060,EXT080,EXT100,EXT120,EXT140,EXT160,EXT180,EXT200,EXT220,EXT240,EXT260,EXT280,EXT300,EXT320,EXT340,INT1,INT2,INT3,INT4&apikey=${environment.apiKey}`);
          commit('SET_DATA_IMAGES', {
            index: i,
            data: photoResponse.data.vehicle
          });
          console.log(photoResponse)
          commit('LOADER_COUNTER')


        } catch (ex) {
            return
        }
      }

      commit('SET_LOADING', false)

    },

    async setCurrentModel({commit}, data) {
      let classId = data.classId;
      console.log(classId)

      const currentClass = this.state.classes.find(classItem => classItem.classId === classId)


      commit('SET_CURRENT_MODEL', currentClass.models[0])
    },

    setLoading: ({commit}, data) => {
      commit('SET_LOADING', data)
    }
  },
  plugins: [createPersistedState()]
})
