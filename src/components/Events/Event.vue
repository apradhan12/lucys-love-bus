<template>
  <div class="event__container">
      <div class="event-img">
          <img :src="img" />
      </div>
      <div class="event-content">
          <div class="content-wrapper">
              <h3>{{ this.name }}</h3>
              <p>{{ this.description }}</p>
          </div>
      </div>
      <div class="event-btns">
          <button class="event-btn btn--primary">Learn More</button>
          <button v-if="myEvents" class="event-btn btn--secondary">Cancel</button>
          <button v-else class="event-btn btn--secondary">Register</button>
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
    myEvents: Boolean, // if true, show Cancel button on events; otherwise, show Register buttons
  },
};
</script>

<style lang="less">
    @import '../../../assets/color-constants.less';

    .event__container {
        display: grid;
        grid-template-areas: 'img content btns';
        grid-template-columns: 1fr 4fr 1fr;
        grid-template-rows: 1fr;
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
        .content-wrapper {
            /* Serves to adjust how close an event's title and description are to one another.
               Without this wrapper, css-grid reaches in and spaces out the title and description
               text to fill the grid-area space. The content-wrapper div fixes that.
             */
        }
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
        text-align: center;
        line-height: 0rem; // vertically centers text despite height
        margin-bottom: 1em;
        width: 8rem;
        height: 2rem;
        color: @button-color;
        border: none;
        padding: 1rem;
        border-radius: 4px;
        cursor: pointer;
    }

    .btn--primary {
        color: white;
        background-color: @green-apple;
    }

    .btn--secondary {
        color: @tangerine;
        background-color: white;
        border: 1px solid @tangerine;
        border-radius: 4px;
    }
</style>
