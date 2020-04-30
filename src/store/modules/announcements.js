export default {
  namespaced: true,
  state: {
    announcements: [
      {
        id: 1,
        title: 'Something Exciting 1',
        description: 'Sign up today!',
      },
      {
        id: 2,
        title: 'Something Exciting 2',
        description: 'Sign up today!',
      },
      {
        id: 3,
        title: 'Something Exciting 3',
        description: 'Sign up today!',
      },
      {
        id: 4,
        title: 'Something Exciting 4',
        description: 'Sign up today!',
      },
    ],
  },
  getters: {
    getAllAnnouncements(state) {
      return state.announcements;
    },
  },
};
