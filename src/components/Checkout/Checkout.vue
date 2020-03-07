<template>
  <div>
    <h1>My Cart</h1>
    <h3>You signed up for the following events:</h3>
    <div class="component-container">
      <div class="events component-wrapper">
        <events :style="scroll" />
      </div>
      <div class="payment component-wrapper"></div>
      <div class="codes component-wrapper"></div>
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
@import '../../../assets/color-constants.less';

  .component-container {
    margin: 0 auto;
    display: grid;
    grid-template-areas: 'events payment'
                         'events codes'
                         'events _';
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 2fr 1fr 1fr;
    grid-gap: 1rem;
    width: 60vw;
    height: 40rem;
  }

  .component-wrapper {
    border: 1px solid grey;
    padding: 1rem;
  }

  .events {
    grid-area: events;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    border-right: 2px solid grey;
    /* a scrollbar cuts 1px off a border. So, specify
       a border for the right side of the div that's 1px
       thicker than the other borders to account for this */
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
