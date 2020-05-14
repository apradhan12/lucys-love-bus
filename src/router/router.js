import Vue from 'vue';
import Router from 'vue-router';
import EventsView from '../views/EventsView.vue';
import LoginView from '../views/LoginView.vue';
import SignUpView from '../views/SignUpView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import ProfileView from '../views/ProfileView.vue';
import MyEventsView from '../views/MyEventsView.vue';
import CheckoutView from '../views/CheckoutView.vue';
import SingleEventView from '../views/SingleEventView.vue';
import SignUpLandingView from '../views/SignUpLandingView.vue';
import CreateEventView from '../views/CreateEventView.vue';
import UpcomingEventsView from '../views/UpcomingEventsView.vue';
import CreateAnnouncementView from '../views/CreateAnnouncementView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView,
    },
    {
      path: '/create-event',
      name: 'create-event',
      component: CreateEventView,
    },
    {
      path: '/create-announcement',
      name: 'create-announcement',
      component: CreateAnnouncementView,
    },
    {
      path: '/edit-event/:eventId',
      name: 'edit-event',
      component: CreateEventView,
      props: true,
    },
    {
      path: '/upcoming-events',
      name: 'upcoming-events',
      component: UpcomingEventsView,
    },
    {
      path: '/event/:eventId',
      name: 'single-event',
      component: SingleEventView,
      props: true,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/sign-up-landing',
      name: 'signup-landing',
      component: SignUpLandingView,
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUpView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/my-events',
      name: 'my-events',
      component: MyEventsView,
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
});
