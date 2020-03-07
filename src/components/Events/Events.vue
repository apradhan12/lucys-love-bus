<template>
  <div>
    <h1>Events</h1>
    <events-list v-if="isPaginate" :events="events"></events-list>
    <EventsListScroll v-if="isScroll" :events="events"></EventsListScroll>
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
    style: { type: String, default: 'scroll' },
  },
  computed: {
    events() {
      return this.$store.getters['events/getEvents'];
    },
    isPaginate() {
      return this.style === 'paginate';
    },
    isScroll() {
      return this.style === 'scroll';
    },
    validStyle() {
      return (this.style === 'paginate' || this.style === 'scroll');
    },
  },
};
</script>
