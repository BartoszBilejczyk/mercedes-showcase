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
    SET_SELECTABLES(state, data) {
      state.activeModel.selectables = data;
    },
    SET_VEHICLE_COMPONENTS_TO_ARRAY(state, data) {
      state.activeModel.selectables.vehicleComponents = data
    },
    SET_VEHICLE_COMPONENT_IMAGE(state, {componentIndex, data}) {
      state.activeModel.selectables.vehicleComponents[componentIndex].image = data
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
        classesResponse = await axios.get(`http://localhost:9090/https://api.mercedes-benz.com/configurator/v1/markets/pl_PL/classes?apikey=${environment.apiKey}`);

        commit('SET_DATA', classesResponse.data);
        commit('LOADER_COUNTER')

      } catch (ex) {
        return
      }

      for (let i = 0; i < 18; i++) {
        try {
          modelsResponse = await axios.get(`http://localhost:9090/${classesResponse.data[i]._links.models}`);
          console.log(modelsResponse)
          commit('SET_MODELS', {
            index: i,
            data: modelsResponse.data
          });
          commit('LOADER_COUNTER')

        } catch (ex) {
          console.log('error on models');
          return
        }

        try {
          configurationsResponse = await axios.get(`http://localhost:9090/${modelsResponse.data[0]._links.configurations}`);
          console.log(configurationsResponse)
          commit('SET_MODEL_CONFIGURATIONS', {
            index: i,
            data: configurationsResponse.data
          });
          commit('LOADER_COUNTER')

        } catch (ex) {
          console.log('error on configs');
          return
        }

        try {
          photoResponse = await axios.get(`http://localhost:9090/${configurationsResponse.data._links.image}`);
          commit('SET_DATA_IMAGES', {
            index: i,
            data: photoResponse.data.vehicle
          })

        } catch (ex) {
          console.log('error on images');
        }
      }

      commit('SET_LOADING', false)

    },

    async setCurrentModel({commit}, data) {
      let classId = data.classId;

      const currentClass = this.state.classes.find(classItem => classItem.classId === classId)


      commit('SET_CURRENT_MODEL', currentClass.models[0])
    },

    setLoading: ({commit}, data) => {
      commit('SET_LOADING', data)
    },

    async setConfigurationEnvironment({commit}) {
      try {
        let selectablesResponse = await axios.get(`http://localhost:9090/${this.state.activeModel.configurations._links.selectables}`);

        console.log(selectablesResponse)

        commit('SET_SELECTABLES', selectablesResponse.data)

      } catch (ex) {
        console.log('error on selectables');
      }

      commit('SET_VEHICLE_COMPONENTS_TO_ARRAY', Object.values(this.state.activeModel.selectables.vehicleComponents));

      for (let j = 0; j < 30; j++) {
        if (this.state.activeModel.selectables.vehicleComponents[j].hasOwnProperty('_links')) {
          try {
            console.log(`http://localhost:9090/${this.state.activeModel.selectables.vehicleComponents[j]._links.image}`)
            // let componentResponse = await axios.get(`http://localhost:9090/${this.state.activeModel.selectables.vehicleComponents[j]._links.image}`)

            commit('SET_VEHICLE_COMPONENT_IMAGE', {
              index: j,
              data: componentResponse.data
            })

          } catch (ex) {
            console.log('error on setting component Image');
          }
          console.log(j);
        }
      }
    }
  },
  plugins: [createPersistedState()]
})
