<template>

  <div class="event-container">
      <div class="event-name">
        <h1>{{ name }}</h1>
      </div>
      <div class="event-description">
        <p>Event Description: {{ description }}</p>
      </div>
      <div class="event-register">
        <button>Register</button>
      </div>
      <div class="event-back">
        <router-link to="events">
            <button>Back to Events</button>
        </router-link>
      </div>
      <div class="event-location">
        <p>Location: {{ location }}</p>
      </div>
      <div class="event-time">
        <p>Time: {{ time }}</p>
      </div>
      <div class="event-tobring">
        <p>What to Bring: {{ toBring }}</p>
      </div>
      <div class="event-image">
        <p>{{ eventImage }}</p>
      </div>

      <Event />
  </div>

</template>

<script>
import Event from './Event.vue';

export default {
  name: 'SingleEvent',
  components: {
    Event,
  },
  data() {
    return {
      // what is the best way to get this info when the event learn more button is clicked?
      id: 3,

      // placeholder data to set up css styling with
      name: 'Event Name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum leo sit amet erat eleifend tristique. Nullam bibendum pharetra orci a ullamcorper. Nullam vitae viverra neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras sed leo orci. Ut in nibh ante. Ut et hendrerit lacus.',
      location: 'West Village H, Room 366',
      time: 'Sunday 1/18, from 10:00 am to 3:00 pm',
      toBring: 'Bring a charged laptop, and a list of the things you need to get done.',
      eventImage: 'Insert Image Here',
    };
  },
  computed: {
    loadEvent() {
      const getEventById = this.$store.getters['events/getEventById'];
      return getEventById(this.event.id);
    },
  },
};
</script>

<style scoped>
    .event-container {
        display: grid;
        grid-template-columns: 10px 50% auto 150px 10px;
        grid-template-rows: 80px 15% 15% 10% 10% auto;
        justify-items: start;
        grid-column-gap: 20px;
        grid-row-gap: 15px;
    }
    .event-name {
        grid-column: 2 / 4;
        grid-row-start: 1 / 2;
    }
    .event-description {
        grid-column: 2 / 4;
        grid-row: 2 / 4;
        text-align: left;
    }
    .event-register {
        grid-column: 4 / 5;
        grid-row: 2 / 3;
        justify-self: center;
    }
    .event-back {
      grid-column: 4 / 5;
      grid-row: 3 / 4;
      justify-self: center;
    }
    .event-location {
        grid-column: 2 / 3;
        grid-row: 4 / 5;
    }
    .event-time {
        grid-column: 2 / 3;
        grid-row: 5 / 6;
    }
    .event-tobring {
        grid-column: 2 / 3;
        grid-row: 6 / 7;
    }
    .event-image {
        grid-column: 3 / 5;
        grid-row: 4 / 7;
    }
</style>
