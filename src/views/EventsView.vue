<template>
  <events-list :events="allEvents" />
</template>

<script>
import { mapState } from 'vuex';
import EventsList from '../components/Events/EventsList.vue';

export default {
  name: 'EventsView',
  components: {
    EventsList,
  },
  computed: {
    ...mapState('events', {
      allEvents: 'events',
    }),
  },
};
</script>
