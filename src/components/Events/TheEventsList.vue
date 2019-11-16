<template>
    <div class="events-list__container">
        <div class='pagination-wrapper'>
          <button
            class='pagination__btn'
            v-on:click='decrementCurrentPage'>decrement</button>

          <h4>Week</h4>
          <button
            class='pagination__btn'
            v-on:click='incrementCurrentPage'>increment</button>
        </div>
          <Event
              v-for='event in pageOfEvents'
              v-bind:key='event.id'
              v-bind:name='event.name'
              v-bind:description='event.description'
              v-bind:id='event.id' />
        <h6>Page {{ currentPage + 1}} of {{ maxPage + 1 }}</h6>
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
      return Math.floor(this.$store.getters.numOfEvents / this.eventsPerPage);
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
  .events-list__container {
    margin: 0 auto;
    max-width: 90vw;
    border: 2px solid red;
  }

  .pagination-wrapper {
    display: flex;
    justify-content: center;
    border: 2px solid red;
  }

  .pagination__btn {
    margin-left: 1rem;
    margin-right: 1rem;
  }
</style>
