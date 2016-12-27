import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {path: '/', name: 'home', component: require('../home/home.vue')},
    {path: '/test', name: 'test', component: require('../test/test.vue')}
  ]
});
