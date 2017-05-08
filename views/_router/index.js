import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/',
      name: 'home',
      component: function (resolve) {
        require(['../home/home'], resolve)
      }
    },
    {
      path: '/test',
      name: 'test',
      component: function (resolve) {
        require(['../test/test'], resolve)
      }
    },
    // ------------------------
    // vuex text
    {
      path: '/vuex_test',
      name: 'vuex_test',
      component: function (resolve) {
        require(['../vuex_test/vuex_test_home/vuex_test_home'], resolve)
      }
    },
    {
      path: '/vuex_test/student_edit',
      name: 'vuex_student_edit',
      component: function (resolve) {
        require(['../vuex_test/vuex_student_edit/vuex_student_edit'], resolve)
      }
    },
    {
      path: '/vuex_test/teacher_edit',
      name: 'vuex_teacher_edit',
      component: function (resolve) {
        require(['../vuex_test/vuex_teacher_edit/vuex_teacher_edit'], resolve)
      }
    },
    {
      path: '/vuex_test/date_edit',
      name: 'vuex_date_edit',
      component: function (resolve) {
        require(['../vuex_test/vuex_date_edit/vuex_date_edit'], resolve)
      }
    }
  ]
});
