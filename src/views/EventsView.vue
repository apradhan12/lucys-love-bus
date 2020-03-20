<template>
  <events-list :events="allEvents">
    <template v-slot:eventBtn1="slotProps">
      <button v-on:click="registerForEvent(slotProps.event)" class="event-btn" >Register</button>
    </template>
    <template v-slot:eventBtn2="slotProps">
      <router-link
        :to="{ name: 'single-event', params: { eventId: slotProps.event.id}}"
        class="event-btn btn--secondary" tag="button">
        Learn More
      </router-link>
    </template>
  </events-list>
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
  methods: {
    // registerForEvent(event) {
    //   // console.log('registered', event);
    // },
  },
};
</script>

<style lang="less" scoped>
@import '../../assets/global-classes.less';

</style>
