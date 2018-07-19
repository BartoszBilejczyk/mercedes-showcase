import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    apiKey: 'b1435ba6-8cd3-4186-9ab9-871dd4e7ee1e',
    classes: [],
    activeModel: {},
    loading: true
  },
  getters: {
    getData: state => state.classes,
    getActiveModel: state => state.activeModel,
    getLoading: state => state.loading
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
      state.classes[index].classImage = data.exteriorImage;
      state.classes[index].models[0].configurations.images = data
    },
    SET_CURRENT_MODEL(state, data) {
      state.activeModel = {};
      state.activeModel = data;
    },
    SET_MODEL_DETAILS(state, data) {
      state.activeModel.details = data;
    },
    SET_MODEL_IMAGE(state, data) {
      state.activeModel.exteriorImage = data.exteriorImage;
      state.activeModel.interiorImage = data.interiorImage;
    },
    SET_LOADING(state, data) {
      state.loading = data;
    }
  },
  actions: {
    async setData({commit}) {
      console.log('siema')

      commit('SET_LOADING', true)

      let classesResponse;
      let modelsResponse;
      let configurationsResponse;
      let photoResponse;

      try {
        classesResponse = await axios.get(`https://api.mercedes-benz.com/configurator/v1/markets/pl_PL/classes?apikey=b1435ba6-8cd3-4186-9ab9-871dd4e7ee1e`)

        commit('SET_DATA', classesResponse.data);

      } catch (ex) {
        return
      }

      for (let i = 0; i <= 3; i++) {
        try {
          modelsResponse = await axios.get(`${classesResponse.data[i]._links.models}`)

          commit('SET_MODELS', {
            index: i,
            data: modelsResponse.data
          })

        } catch (ex) {
          return
        }
        try {
          configurationsResponse = await axios.get(`${modelsResponse.data[0]._links.configurations}`)

          commit('SET_MODEL_CONFIGURATIONS', {
            index: i,
            data: configurationsResponse.data
          })
        } catch (ex) {
            return
        }

        try {
          photoResponse = await axios.get(`${configurationsResponse.data._links.image}`)

          commit('SET_DATA_IMAGES', {
            index: i,
            data: {
              interiorImage: photoResponse.data.vehicle.INT1.url,
              exteriorImage: photoResponse.data.vehicle.EXT020.url
            }
          })

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

    // async setModel({commit}, data) {
    //   let classResponse;
    //   let configurationsResponse;
    //   let imagesResponse;
    //
    //   try {
    //     classResponse = await axios.get(`https://api.mercedes-benz.com/configurator/v1/markets/pl_PL/models?classId=${data.classId}&apikey=b1435ba6-8cd3-4186-9ab9-871dd4e7ee1e`)
    //
    //     commit('SET_MODEL', classResponse.data[0]);
    //
    //   } catch (ex) {
    //     return
    //   }
    //
    //   try {
    //     configurationsResponse = await axios.get(`${classResponse.data[0]._links.configurations}`)
    //
    //     commit('SET_MODEL_DETAILS', configurationsResponse.data);
    //
    //   } catch (ex) {
    //     return
    //   }
    //
    //   try {
    //     imagesResponse = await axios.get(`${configurationsResponse.data._links.image}`)
    //
    //     commit('SET_MODEL_IMAGE', {
    //       interiorImage: imagesResponse.data.vehicle.INT1.url,
    //       exteriorImage: imagesResponse.data.vehicle.EXT020.url
    //     })
    //   } catch (ex) {
    //     return
    //   }
    //
    // },

    setLoading: ({commit}, data) => {
      commit('SET_LOADING', data)
    }
  },
  plugins: [createPersistedState()]
})
