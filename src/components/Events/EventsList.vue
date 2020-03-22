<template>
    <div>
        <span v-if="noEvents">
          <span v-if="myEvents">You aren't registered for any events.</span>
          <span v-else>There aren't any events right now. Check back later!</span>
        </span>
        <div class='pagination-wrapper'>
          <button
            class='pagination__btn'
            v-on:click='decrementCurrentPage'>Prev</button>

          <span><b>Page {{ currentPage + 1 }} of {{ maxPage + 1 }}</b></span>
          <button
            class='pagination__btn'
            v-on:click='incrementCurrentPage'>Next</button>
        </div>
        <div v-if="!noEvents" class="events-container">
          <Event
              v-for='event in pageOfEvents'
              :key='event.id'
              :id='event.id'
              :name='event.name'
              :img='event.img'
              :description='event.description'
              :myEvents="myEvents" />
        </div>
    </div>
</template>

<script>
import Event from './Event.vue';

export default {
  name: 'EventsList',
  components: {
    Event,
  },
  data() {
    return {
      eventsPerPage: 5,
      currentPage: 0,
    };
  },
  props: {
    events: Array,
    noEventsMsg: String, // msg to display if there are no relevant events
  },
  computed: {
    // list of a single page's worth of items
    pageOfEvents() {
      // pages are 0-indexed
      const firstEvent = this.currentPage * this.eventsPerPage;
      const lastEvent = firstEvent + this.eventsPerPage;
      // slice truncates any out-of-bounds indices, so that's not a concern here
      return this.events.slice(firstEvent, lastEvent);
    },
    // page number of the last page
    maxPage() {
      return Math.floor(this.events.length / this.eventsPerPage);
    },
    // there are no events to display
    noEvents() {
      return this.events.length === 0;
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

<style lang="less">
  @import '../../../assets/color-constants.less';

  .events-container {
    margin: 0 auto;
    width: 65rem;
    max-width: 90vw;
  }

  .pagination-wrapper {
    display: flex;
    justify-content: center;
  }

  .pagination-wrapper span {
    display: block;
  }

  .pagination__btn {
    margin-left: 1rem;
    margin-right: 1rem;
    background-color: @button-bg;
    color: @button-color;
    padding: 1em 3em 1em 3em;
    border-radius: 4px;
    border: none;
    cursor: pointer;
  }
</style>
