import Vue from 'vue'
import Router from 'vue-router'

import Movie from '../pages/movie/Root'
import Cinema from '../pages/cinema/Root'
import Mine from '../pages/mine/Root'
import Search from '../pages/common/Search'
import meituan from '../components/mine/meituan'
import phone from '../components/mine/phone'
import CityList from '../pages/common/CityList'
import search from '../pages/common/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/movie',
      component: Movie,
      children: [
        {
          path: 'search',
          component: Search,
          props: {
            type: ['cinema', 'movie']
          }
        },
        {
          path: 'city-list',
          component: CityList,
          props: {
            type: ['cinema', 'movie']
          }
        }
      ]
    },
    {
      path: '/cinema',
      component: Cinema,
      children: [
        {
          path: 'search',
          component: Search,
          props: {
            type: ['cinema']
          }
        }
      ]
    },
    {
      path: '/mine',
      component: Mine,
      children: [
        {
           path:'/meituan',
           component:meituan
        },
        {
          path:'/phone',
          component:phone
       }
      ]
    },
    {
      path: '**',
      redirect: '/movie'
    }
  ]
})
