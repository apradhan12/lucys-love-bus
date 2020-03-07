<template>
  <div>
    <h1>My Cart</h1>
    <h3>You signed up for the following events:</h3>
    <div class="component-container">
      <div class="events">
        <events :style="scroll" />
      </div>
      <div class="payment"></div>
      <div class="codes"></div>
    </div>
    <the-footer />
  </div>
</template>

<script>
import TheFooter from '../TheFooter.vue';
import Events from '../Events/Events.vue';

export default {
  name: 'Checkout',
  components: {
    TheFooter,
    Events,
  },
};
</script>

<style>
  .component-container {
    margin: 0 auto;
    padding: 1rem;
    display: grid;
    grid-template-areas: 'events payment'
                         'events codes'
                         'events _';
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 2fr 1fr 1fr;
    grid-gap: 1rem;
    width: 50vw;
    height: 40rem;
    border: 1px solid red;
  }

  .events {
    grid-area: events;
    background-color: lightgreen;
    overflow-x: hidden;
  }

  .payment {
    grid-area: payment;
    background-color: lightcoral;
  }

  .codes {
    grid-area: codes;
    background-color: lightseagreen;
  }
</style>
