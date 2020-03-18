export default {
  namespaced: true,
  state: {
    registeredEvents: [
      {
        id: 0,
        name: 'Event 0',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a',
        price: 5.5,
        users: ['robinsons'],
        img: 'https://i0.wp.com/www.skillings.com/wp-content/uploads/2017/02/placeholder-square.jpg',
      },
    ],
  },
  getters: {
    getSubTotal(state) {
      return state.registeredEvents.reduce((acc, event) => acc + event.price, 0);
    },
  },
  mutations: {
    registerForEvent(state, { event }) {
      state.registerForEvent.push(event);
    },
  },
  actions: {

  },
};
