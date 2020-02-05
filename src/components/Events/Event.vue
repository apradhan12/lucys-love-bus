<template>
  <div class="event__container">
      <div class="event-id">
          <h3>{{ this.id }}</h3>
      </div>
      <div class="event-content">
        <h3>{{ this.name }}</h3>
        <p>{{ this.description }}</p>
      </div>
      <div class="event-btns">
          <button class="event-btn">Learn More</button>
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
    description: String,
  },
};
</script>

<style>
    .event__container {
        display: grid;
        grid-template-areas: 'id content btns';
        grid-template-columns: 1fr 4fr 1fr;
        grid-template-rows: 1fr;
        justify-content: space-between;
    }

    .event-id {
        grid-area: id;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #D3D3D3;
    }

    .event-content {
        padding-left: 1rem;
        grid-area: content;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    .event-content > h3 {
        text-align: left;
        width: 100%;
    }

    .event-btns {
        grid-area: btns;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        flex-direction: column;
    }
</style>
