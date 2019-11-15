import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const moduleEventsList = {
  state: {
    events: [
      {
        id: 0,
        name: 'A',
        description: 'aaa',
      },
      {
        id: 0,
        name: 'B',
        description: 'bbb',
      },
      {
        id: 0,
        name: 'C',
        description: 'ccc',
      },
      {
        id: 0,
        name: 'D',
        description: 'ddd',
      },
      {
        id: 0,
        name: 'E',
        description: 'eee',
      },
      {
        id: 0,
        name: 'F',
        description: 'fff',
      },
    ],
  },
  getters: {
    getPageOfEvents: state => (currentPage, eventsPerPage) => {
      const firstEvent = currentPage * eventsPerPage;
      const lastEvent = firstEvent + eventsPerPage;
      // slice truncates any out-of-bounds indices, so that's not a concern here
      return state.events.slice(firstEvent, lastEvent);
    },
  },
};

export default new Vuex.Store({
  modules: {
    eventsList: moduleEventsList,
  },
});
