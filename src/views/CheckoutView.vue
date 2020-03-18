<template>
  <div>
    <h1>My Cart</h1>
    <h3>You signed up for the following events:</h3>
    <div class="component-container">
      <div class="events component-wrapper">
        <events-list-scroll :events="registeredEvents" />
      </div>
      <payment-summary class="payment component-wrapper"></payment-summary>
      <promo-code class="codes component-wrapper"></promo-code>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import EventsListScroll from '../components/Events/EventsListScroll.vue';
import PaymentSummary from '../components/Checkout/PaymentSummary.vue';
import PromoCode from '../components/Checkout/PromoCode.vue';

export default {
  name: 'Checkout',
  components: {
    EventsListScroll,
    PaymentSummary,
    PromoCode,
  },
  computed: {
    ...mapState('cart', {
      registeredEvents: 'registeredEvents',
    }),
  },
};
</script>

<style lang="less">
@import '../../assets/color-constants.less';

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
    border: 1px solid @notes-form-color;
    padding: 1rem;
  }

  .events {
    grid-area: events;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }

  .payment {
    grid-area: payment;
  }

  .codes {
    grid-area: codes;
  }
</style>
