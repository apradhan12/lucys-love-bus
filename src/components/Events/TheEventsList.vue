<template>
    <div>
        <button v-on:click='incrementCurrentPage'>increment</button>
        <button v-on:click='decrementCurrentPage'>decrement</button>
        <ul>
            <Event
                v-for='event in pageOfEvents'
                v-bind:key='event.id'
                v-bind:name='event.name'
                v-bind:description='event.description' />
        </ul>
    </div>
</template>

<script>
import Event from './Event.vue';

export default {
  name: 'TheEventsList',
  components: {
    Event,
  },
  data() {
    return {
      eventsPerPage: 5,
      currentPage: 0,
    };
  },
  computed: {
    pageOfEvents() {
      return this.$store.getters.getPageOfEvents(this.currentPage, this.eventsPerPage);
    },
    maxPage() {
      return Math.ceil(this.$store.getters.numOfEvents / this.eventsPerPage);
    },
  },
  methods: {
    incrementCurrentPage() {
      if (this.currentPage !== this.maxPage) {
        this.currentPage += 1;
      }
    },
    decrementCurrentPage() {
      if (this.currentPage !== 0) {
        this.currentPage -= 1;
      }
    },
  },
};
</script>

<style>

</style>
