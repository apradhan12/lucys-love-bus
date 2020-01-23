<template>
  <div class="event__container">
      <div class="event-img">
          <img :src="img" />
      </div>
      <div class="event-content">
        <h3>{{ this.name }}</h3>
        <p>{{ this.description }}</p>
      </div>
      <div class="event-btns">
          <router-link :to="{ name: 'single-event', params: { Event: this }}">
              <button class="event-btn">Learn More</button>
          </router-link>
          <button>Register</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Event',
  props: {
    id: Number,
    name: String,
    location: String,
    time: String,
    description: String,
    img: String,
  },
};
</script>

<style>
    .event__container {
        display: grid;
        grid-template-areas: 'img content btns';
        grid-template-columns: 1fr 4fr 1fr;
        grid-template-rows: 1fr;
        justify-content: space-between;
        margin-bottom: 2em;
    }

    .event-img {
        grid-area: img;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .event-img img {
        width: 80%;
    }

    .event-content {
        padding-left: 1rem;
        grid-area: content;
        text-align: left;
    }

    .event-content > h3 {
        margin-bottom: 2em;
        width: 100%;
    }

    .event-btns {
        grid-area: btns;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }

    .event-btn {
        margin-bottom: 1em;
        width: 100%;
        background-color: black;
        color: #EEEEEE;
        border: none;
        padding: 1em 3em 1em 3em;
        border-radius: 4px;
        cursor: pointer;
    }
</style>
