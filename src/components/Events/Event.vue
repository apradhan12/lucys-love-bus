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
          <button class="event-btn">Learn More</button>
          <button class="event-btn">Register</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Event',
  props: {
    id: Number,
    name: String,
    description: String,
    img: String,
  },
};
</script>

<style>
    .event__container {
        display: grid;
        grid-template-areas: 'img content btns';
        grid-template-columns: 2fr 4fr 1fr;
        grid-template-rows: 1fr;
        justify-content: space-between;
        margin-bottom: 40px;
    }

    .event-img {
        grid-area: img;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .event-img img {
        width: 50%;
    }

    .event-content {
        padding-left: 1rem;
        grid-area: content;
        text-align: left;
    }

    .event-content > h3 {
        margin-bottom: 40px;
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
        margin-bottom: 20px;
        background-color: black;
        color: #EEEEEE;
        border: none;
        padding: 8px 24px 8px 24px;
        border-radius: 4px;
        cursor: pointer;
    }
</style>
