<template>
  <div>
    <h1>My Events</h1>
    <EventsList :events="myEvents" :noEventsMsg="noEventsMsg"></EventsList>
  </div>
</template>

<script>
import EventsList from '../Events/EventsList.vue';

export default {
  name: 'MyEvents',
  components: {
    EventsList,
  },
  data() {
    return {
      noEventsMsg: 'You are not registered for any events.',
    };
  },
  props: {
    username: String,
  },
  computed: {
    myEvents() {
      const events = this.$store.getters['events/getEvents'];
      return events.filter(e => e.users.includes(this.username));
    },
  },
};
</script>
