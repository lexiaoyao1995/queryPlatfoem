import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import QueryPage from "../pages/QueryPage";
import Analysis from "../pages/Analysis";

Vue.use(Router);
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/query',
      name: 'queryPage',
      component: QueryPage
    },
    {
      path: '/analysis',
      name: 'analysis',
      component: Analysis
    }
  ]
})


