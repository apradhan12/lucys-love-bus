<template>

  <div class="event-container">
    <router-view></router-view>
      <div class="event-name">
        <h1>{{ singleEvent.name }}</h1>
      </div>
      <div class="event-description">
        <p>Event Description: {{ singleEvent.description }}</p>
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
        <p>Location: {{ singleEvent.location }}</p>
      </div>
      <div class="event-time">
        <p>Time: {{ singleEvent.time }}</p>
      </div>
      <div class="event-tobring">
        <p>What to Bring: {{ singleEvent.bring }}</p>
      </div>
      <div class="event-image">
        <img :src="singleEvent.img" alt="Event Image">
      </div>

  </div>
</template>


<script>
export default {
  name: 'SingleEvent',
  props: ['eventID'],
  computed: {
    singleEvent() {
      const getEventById = this.$store.getters['events/getEventById'];
      return getEventById(this.eventID);
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
      text-align: left;
    }
    .event-image {
      grid-column: 3 / 5;
      grid-row: 4 / 7;
    }
    img {
      width: 100%;
    }
</style>
