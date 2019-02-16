import Vue from 'vue'
import Router from 'vue-router'
import Topic from '@/views/topic'

const News = resolve => require(['@/views/news'], resolve)
const TechNews = resolve => require(['@/views/technews'], resolve)
const BlockChain = resolve => require(['@/views/blockchain'], resolve)
const Jobs = resolve => require(['@/views/jobs'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Topic',
      component: Topic
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/technews',
      name: 'TechNews',
      component: TechNews
    },
    {
      path: '/blockchain',
      name: 'BlockChain',
      component: BlockChain
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: Jobs
    }
  ]
})
