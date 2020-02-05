export default {
  namespaced: true,
  state: {
    events: [
      {
        id: 0,
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a',
      },
      {
        id: 1,
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a',
      },
      {
        id: 2,
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a',
      },
      {
        id: 3,
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a',
      },
      {
        id: 4,
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a',
      },
      {
        id: 5,
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a',
      },
      {
        id: 6,
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a',
      },
      {
        id: 7,
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a',
      },
      {
        id: 8,
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a',
      },
      {
        id: 9,
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a',
      },
      {
        id: 10,
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a',
      },
      {
        id: 11,
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a',
      },
    ],
  },
  getters: {
    getPageOfEvents: state => (currentPage, eventsPerPage) => {
      // pages are 0-indexed
      const firstEvent = currentPage * eventsPerPage;
      const lastEvent = firstEvent + eventsPerPage;
      // slice truncates any out-of-bounds indices, so that's not a concern here
      return state.events.slice(firstEvent, lastEvent);
    },
    getEvents: state => state.events,
    numOfEvents: state => state.events.length,
  },
};
