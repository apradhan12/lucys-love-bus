<template>
  <div>
    <h1>My Events</h1>
    <events-list-scroll :events="myEvents">
      <template v-slot:eventBtn1="slotProps">
        <router-link
          :to="{ name: 'single-event', params: { eventId: slotProps.event.id}}"
          class="event-btn btn--secondary" tag="button">
          Learn More
        </router-link>
      </template>
      <template v-slot:eventBtn2="slotProps">
        <button
          v-on:click="cancelRegistration(slotProps.event)"
          class="event-btn btn--secondary">
          Cancel
        </button>
      </template>
    </events-list-scroll>
  </div>
</template>

<script>
import EventsListScroll from '../components/Events/EventsListScroll.vue';

export default {
  name: 'MyEvents',
  components: {
    EventsListScroll,
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
      return this.$store.getters['events/getUserEvents'](this.username);
    },
  },
  methods: {
    // cancelRegistration(event) {
    //   // console.log('canceled', event);
    // },
  },
};
</script>
