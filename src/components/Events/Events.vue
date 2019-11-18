<template>
    <div>
        <div class="events-container">
          <h1>Our Upcoming Events</h1>
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
              :key='event.id'
              :id='event.id'
              :name='event.name'
              :description='event.description' />
        </div>
    </div>
</template>

<script>
import Event from './Event.vue';

export default {
  name: 'Events',
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
    // list of a single page's worth of items
    pageOfEvents() {
      return this.$store.getters.getPageOfEvents(this.currentPage, this.eventsPerPage);
    },
    // page number of the last page
    maxPage() {
      return Math.floor(this.$store.getters.numOfEvents / this.eventsPerPage);
    },
  },
  methods: {
    incrementCurrentPage() {
      if (this.currentPage < this.maxPage) {
        this.currentPage += 1;
      }
    },
    decrementCurrentPage() {
      if (this.currentPage > 0) {
        this.currentPage -= 1;
      }
    },
  },
};

</script>

<style>
  .events-container {
    margin: 0 auto;
    width: 65rem;
    max-width: 90vw;
  }

  .pagination-wrapper {
    display: flex;
    justify-content: center;
  }

  .pagination__btn {
    margin-left: 1rem;
    margin-right: 1rem;
  }
</style>
