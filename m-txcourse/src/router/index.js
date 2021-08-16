import Vue from 'vue';
import Router from 'vue-router';

import IndexPage from 'pages/Index';
import ListPage from 'pages/List';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
    	path: '/list',
    	name: 'ListPage',
    	component: ListPage
    }
  ]
})
