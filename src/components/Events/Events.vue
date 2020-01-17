<template>
  <div>
    <h1>Events</h1>
    <EventsList :events="events" :noEventsMsg="noEventsMsg"></EventsList>
  </div>
</template>

<script>
import EventsList from './EventsList.vue';

export default {
  name: 'Events',
  components: {
    EventsList,
  },
  data() {
    return {
      noEventsMsg: 'No events yet. Check back later!',
    };
  },
  computed: {
    events() {
      return this.$store.getters['events/getEvents'];
    },
  },
};
</script>
