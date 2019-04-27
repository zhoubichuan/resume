import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Introduce from '@/components/Introduce'
import AboutMe from '@/components/AboutMe'
import Skill from '@/components/Skill'
import Project from '@/components/Project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/intorduce',
      name: 'Introduce',
      component: Introduce
    },
    {
      path: '/about',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    }
  ]
})
