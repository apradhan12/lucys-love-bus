<template>
    <div>
        <h3>Payment Summary</h3>
        <h3>Subtotal: ${{subtotal.toFixed(2)}}</h3>
        <h3>Taxes: ${{taxes.toFixed(2)}}</h3>
        <h3>Total: ${{totalPrice.toFixed(2)}}</h3>
        <button class="event-btn btn--primary">Event Page</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
};
</script>

<style lang="less" scoped>
@import '../../../assets/color-constants.less';

    .btn--primary {
        color: white;
        background-color: @green-apple;
    }
</style>
