import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import City from '@/components/city/City'
import Details from '@/components/details/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeLink',
      component: Home
    },
    {
      path: '/city',
      name: 'CityLink',
      component: City
    },
    {
      path: '/details/:id',
      name: 'detailsLink',
      component: Details
    }
  ]
})
