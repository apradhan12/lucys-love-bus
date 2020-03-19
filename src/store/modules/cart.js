export default {
  namespaced: true,
  state: {
    registeredEvents: [],
  },
  getters: {
    getSubTotal(state) {
      return state.registeredEvents.reduce((acc, event) => acc + event.price, 0);
    },
  },
  mutations: {
    registerForEvent(state, { event }) {
      if (state.registeredEvents.filter(evt => evt.id === event.id).length === 0) {
        state.registeredEvents.push(event);
      }
    },
    cancelRegistration(state, { event }) {
      state.registeredEvents = state.registeredEvents.filter(evt => evt.id !== event.id);
    },
  },
  actions: {

  },
};
