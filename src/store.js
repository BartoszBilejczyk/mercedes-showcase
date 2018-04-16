import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    apiKey: 'b1435ba6-8cd3-4186-9ab9-871dd4e7ee1e',
    classes: [],
    models: [],
    activeModel: {},
  },
  getters: {
    getClasses: state => state.classes,
    getModels: state => state.models,
    getActiveModel: state => state.activeModel,
  },
  mutations: {
    SET_CLASSES(state, data) {
      state.classes = data;
    },
    SET_CLASSES_IMAGES(state, { index, data }) {
      state.classes[index].classImage = data;
    },
    SET_MODEL(state, data) {
      state.activeModel = {};
      state.activeModel = data;
    },
    SET_MODEL_DETAILS(state, data) {
      state.activeModel.details = data;
    },
    SET_MODEL_IMAGE(state, data) {
      state.activeModel.exteriorImage = data.exteriorImage;
      state.activeModel.interiorImage = data.interiorImage;
    }
  },
  actions: {
    setClasses: ({ commit }) => {
      axios.get(`http://localhost:9090/https://api.mercedes-benz.com/configurator/v1/markets/pl_PL/classes?apikey=b1435ba6-8cd3-4186-9ab9-871dd4e7ee1e`)
        .then(response => {
          commit('SET_CLASSES', response.data);
          for(let i = 0; i <= 2; i++) {
            axios.get(`http://localhost:9090/${response.data[i]._links.models}`)
              .then(response => {
                axios.get(`http://localhost:9090/${response.data[0]._links.configurations}`)
                  .then(response => {
                    axios.get(`http://localhost:9090/${response.data._links.image}`)
                      .then(response => {
                        commit('SET_CLASSES_IMAGES', {
                          index: i,
                          data: response.data.vehicle.EXT020.url
                        })
                      })
                  })
              })
            // console.log(i)
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    setModel: ({ commit }, data) => {
      axios.get(`http://localhost:9090/https://api.mercedes-benz.com/configurator/v1/markets/pl_PL/models?classId=${data.classId}&apikey=b1435ba6-8cd3-4186-9ab9-871dd4e7ee1e`)
        .then(response => {
          commit('SET_MODEL', response.data[0]);
          axios.get(`http://localhost:9090/${response.data[0]._links.configurations}`)
            .then(response => {
              commit('SET_MODEL_DETAILS', response.data);
              axios.get(`http://localhost:9090/${response.data._links.image}`)
                .then(response => {
                  console.log(response)
                  commit('SET_MODEL_IMAGE', {
                    interiorImage: response.data.vehicle.INT1.url,
                    exteriorImage: response.data.vehicle.EXT020.url
                  })
                })
                .catch((err) => {
                  console.error(err);
                });
            })
            .catch((err) => {
              console.error(err);
            });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
})
