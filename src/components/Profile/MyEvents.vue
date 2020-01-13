<template>
  <div>
    <h1>My Events</h1>
    <p>{{ username }}'s events</p>
  </div>
</template>

<script>
export default {
  name: 'MyEvents',

  computed: {
    username() {
      return this.$route.params.username;
    },
  },
};
</script>
