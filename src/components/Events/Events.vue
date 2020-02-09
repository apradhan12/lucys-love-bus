<template>
  <div>
    <h1>Events</h1>
    <EventsList :events="events"></EventsList>
  </div>
</template>

<script>
import EventsList from './EventsList.vue';

export default {
  name: 'Events',
  components: {
    EventsList,
  },
  computed: {
    events() {
      return this.$store.getters['events/getEvents'];
    },
  },
};
</script>
