import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/home/HomePage.vue';
import TaskAllPage from './components/tasks/TaskAllPage.vue';
import TaskCreatePage from './components/tasks/TaskCreatePage.vue';
import TaskEditPage from './components/tasks/TaskEditPage.vue';
import RegisterPage from './components/authentication/RegisterPage.vue';
import LoginPage from './components/authentication/LoginPage.vue';

Vue.use(Router)

const routes = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/tasks',
      name: 'tasks-all',
      component: TaskAllPage,
      children: [{
        path: 'new',
        name: 'tasks-new',
        component: TaskCreatePage
      }, {
        path: ':id',
        name: 'tasks-edit',
        component: TaskEditPage
      }]
    }, {
      path: '/register',
      name: 'register',
      component: RegisterPage
    }, {
      path: '/login',
      name: 'login',
      component: LoginPage
    }, {
      path: '*',
      redirect: '/'
    }
  ],
  linkActiveClass: "active"
});

const isLoggedIn = false;

routes.beforeEach((to, from, next) => {
  if (!isLoggedIn) {
    next();
  } else {
    next('/login');
  }

});

export default routes;