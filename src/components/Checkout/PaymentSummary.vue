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

const stripePromise = loadStripe('pk_test_BUZH61WwkfQGWgCw9a9GtaSJ00hxB4qgcU');

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
      // https://stripe.com/docs/payments/checkout/one-time
      // const { sessionId } = await createStripeSession();
      // const session = await stripe.checkout.sessions.create({
      //   payment_method_types: ['card'],
      //   line_items: [{
      //     name: 'T-shirt',
      //     description: 'Comfortable cotton t-shirt',
      //     images: ['https://example.com/t-shirt.png'],
      //     amount: 500,
      //     currency: 'usd',
      //     quantity: 1,
      //   }],
      //   success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
      //   cancel_url: 'https://example.com/cancel',
      // });
      // console.log(session);
      //
      // This code is to create a Checkout Session in Stripe's platform
      // In their tutorial, a Checkout Session is supposed to be created in the backend
      // so we want something like GET /api/v1/fetch_checkout_session
      // If that function can return a valid session ID, the code below will
      // redirect them to the session
      // I would imagine there are massive security implications to managing
      // the creation of Checkout Sessions in the client-side code

      const { data } = await API.createCheckoutSession();

      const stripeResponse = await stripePromise;
      const { error } = await stripeResponse.redirectToCheckout({
        sessionId: data,
      });
      if (error) console.error(error);
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
