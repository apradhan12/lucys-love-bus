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
        id: 1,
        name: 'B',
        description: 'bbb',
      },
      {
        id: 2,
        name: 'C',
        description: 'ccc',
      },
      {
        id: 3,
        name: 'D',
        description: 'ddd',
      },
      {
        id: 4,
        name: 'E',
        description: 'eee',
      },
      {
        id: 5,
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
    numOfEvents: state => state.events.length,
  },
};

export default new Vuex.Store({
  modules: {
    eventsList: moduleEventsList,
  },
});
