import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home/Home.vue';
import AboutUs from '../components/AboutUs/AboutUs.vue';
import Events from '../components/Events/Events.vue';
import Authentication from '../components/Authentication/Authentication.vue';
import Login from '../components/Authentication/Login/Login.vue';
import SignUp from '../components/Authentication/SignUp/SignUp.vue';
import AccessControlDemonstration from '../components/Authentication/AccessControl/AccessControlDemonstration.vue';
import NotFound from '../components/NotFound.vue';
import Profile from '../components/Profile/Profile.vue';
import MyEvents from '../components/Profile/MyEvents.vue';
import Account from '../components/Profile/Account.vue';
import Checkout from '../components/Checkout/Checkout.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUs,
    },
    {
      path: '/events',
      name: 'events',
      component: Events,
    },
    {
      path: '/acl',
      name: 'acl',
      component: AccessControlDemonstration,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
    },
    {
      path: '/authentication',
      name: 'authentication',
      component: Authentication,
      redirect: '/authentication/login',
      children: [
        {
          path: 'login',
          name: 'login',
          component: Login,
        },
        {
          path: 'sign-up',
          name: 'sign-up',
          component: SignUp,
        },
      ],
    },
    {
      path: '/:username/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/:username/my-events',
      name: 'my-events',
      component: MyEvents,
      props: true,
    },
    {
      path: '/:username/account',
      name: 'account',
      component: Account,
      props: true,
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound,
    },
  ],
});
