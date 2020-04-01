<template>

  <div class="event-container">
    <router-view></router-view>
      <div class="event-name">
        <h1>{{ singleEvent.name }}</h1>
      </div>
      <div class="event-description">
        <p>Event Description: {{ singleEvent.description }}</p>
      </div>
      <div class="event-buttons">
        <button>Register</button>
        <router-link :to="{name: 'events'}" tag="button">Back to Events</router-link>
      </div>
      <div class="event-info">
        <p>Location: {{ singleEvent.location }}</p>
        <p>Time: {{ singleEvent.time }}</p>
        <p>What to Bring: {{ singleEvent.bring }}</p>
      </div>
      <div class="event-img">
        <img :src="singleEvent.img" alt="Event Image">
      </div>
    </div>
</template>


<script>
export default {
  name: 'SingleEvent',
  props: ['eventId'],
  computed: {
    singleEvent() {
      return this.$store.getters['events/getEventById'](this.eventId);
    },
  },
};
</script>

<style scoped>
    .event-container {
      margin: 3rem;
      display: grid;
      grid-template: 20% 30% 50% / 40% 40% 20%;
      justify-items: start;
    }
    .event-name {
      grid-row: 1 / 2;
    }
    .event-description{
      grid-row: 2 / 3;
      grid-column: 1 / 3;
    }
    .event-buttons {
      grid-row: 2 / 3;
      grid-column: 3 / end;
      display: flex;
      flex-direction: column;
    }
    .event-info {
      grid-row: 3 / end;
      grid-column: 1 / 2;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .event-img {
      grid-row: 3 / end;
      grid-column: 2 / end;
      justify-self: end;
    }
    img {
      width: 70%;
    }
</style>
