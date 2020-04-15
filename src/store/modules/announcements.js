export default {
  namespaced: true,
  state: {
    announcements: [
      {
        title: "Something Exciting 1",
        description: "Sign up today!"
      },
      {
        title: "Something Exciting 2",
        description: "Sign up today!"
      },
      {
        title: "Something Exciting 3",
        description: "Sign up today!"
      },
      {
        title: "Something Exciting 4",
        description: "Sign up today!"
      },
    ],
  },
  getters: {
    getAllAnnouncements: state => () => {
      return state.announcements;
    },
  },
};
