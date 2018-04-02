import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ShowcaseContainer from './views/ShowcaseContainer.vue'
import CarContainer from './views/CarContainer.vue'
import CarMainPage from './views/CarMainPage.vue'
import CarDetailsContainer from './views/CarDetailsContainer.vue'
import CarConfigurationContainer from './views/CarConfigurationContainer.vue'
import TestDriveContactContainer from './views/TestDriveContactContainer.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/showcase',
      name: 'showcase',
      component: ShowcaseContainer
    },
    {
      path: '/car/:model',
      name: 'car',
      component: CarContainer,
      redirect: '/car/:model/home',
      children: [
        {
          path: 'home',
          name: 'car-main',
          component: CarMainPage
        },
        {
          path: 'details',
          name: 'car-details',
          component: CarDetailsContainer
        },
        {
          path: 'configuration',
          name: 'car-configuration',
          component: CarConfigurationContainer
        }
      ]
    },
    {
      path: '/test-drive',
      name: 'test-drive',
      component: TestDriveContactContainer
    }
  ]
})
