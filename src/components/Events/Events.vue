<template>
  <div class="events-container">
    <h1 v-if="isPaginate">Events</h1>
    <events-list v-if="paginate" :events="events"></events-list>
    <events-list-scroll v-else :events="events"></events-list-scroll>
  </div>
</template>

<script>
import EventsList from './EventsList.vue';
import EventsListScroll from './EventsListScroll.vue';

export default {
  name: 'Events',
  components: {
    EventsList,
    EventsListScroll,
  },
  props: {
    paginate: { type: Boolean, default: false },
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

<style lang="less">
  .events-container {
    margin: 0;
    max-width: 100%;
  }
</style>
