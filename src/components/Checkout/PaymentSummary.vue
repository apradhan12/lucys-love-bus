<template>
    <div>
        <h3>Payment Summary</h3>
        <h3>Subtotal: ${{subtotal.toFixed(2)}}</h3>
        <h3>Taxes: ${{taxes.toFixed(2)}}</h3>
        <h3>Total: ${{totalPrice.toFixed(2)}}</h3>
        <button
          class="event-btn btn--primary"
          v-on:click="onClickCheckout">Proceed to checkout</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { loadStripe } from '@stripe/stripe-js';
import API from '../../api/api';

const stripePromise = loadStripe(process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY);

export default {
  name: 'PaymentSummary',
  computed: {
    ...mapGetters('cart', {
      subtotal: 'getSubTotal',
    }),
    taxes() {
      return 0;
    },
    totalPrice() {
      return this.subtotal + this.taxes;
    },
  },
  methods: {
    async onClickCheckout() {
      try {
        // TODO: check if the server says they are a participating family, and if so,
        // skip all of this and redirect to the confirmation page.
        // TODO: transform events into line items and pass into createCheckoutSession
        // TODO: move this method to a more appropriate place, need to determine where
        const { data } = await API.createCheckoutSession();
        const stripeResponse = await stripePromise;
        await stripeResponse.redirectToCheckout({
          sessionId: data,
        });
      } catch (e) {
        // TODO: Implement an actual error message.
        // eslint-disable-next-line
        alert('Error placing order');
        console.error(e);
      }
    },

  },
};
</script>

<style lang="less" scoped>
@import '../../../assets/color-constants.less';
    .btn--primary {
        color: white;
        background-color: @green-apple;
    }
</style>
