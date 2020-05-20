<template>
  <div>
    <p class="title">My Cart</p>
    <p class="subtitle">You have the following events ready to checkout:</p>
    <div class="component-container">
      <div class="events component-wrapper">
        <events-list-checkout :events="cartEvents">
          <template v-slot:NoEventsMsg>
            <h3>You have no events in your cart!</h3>
          </template>
          <template v-slot:eventBtns="slotProps">
            <div>
              {{ slotProps.event.tickets }} Tickets Reserved
            </div>
            <router-link
              :to="{ name: 'single-event', params: { eventId: slotProps.event.id}}"
              class="event-btn" tag="button">
              Event Page
            </router-link>
            <button
              v-on:click="cancelRegistration({event: slotProps.event})"
              class="event-btn btn--secondary">
              Remove
            </button>
          </template>
        </events-list-checkout>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import EventsListCheckout from '../components/Events/EventsListCheckout.vue';
import API from '../api/api';
import { USER, ROLE } from '../utils/constants/user';

export default {
  name: 'Checkout',
  components: {
    EventsListCheckout,
  },
  computed: {
    ...mapState('cart', {
      cartEvents: 'cartEvents',
    }),
    ...mapState('user', {
      adminLevel: 'adminLevel',
    }),
  },
  methods: {
    ...mapMutations('cart', {
      cancelRegistration: 'cancelRegistration',
    }),
    onClickCheckout() {
      /* TODO: Make sure this works with cart events being tuples */
      if (USER[this.adminLevel] === USER[ROLE.ADMIN] || USER[this.adminLevel] === USER[ROLE.PF]) {
        try {
          API.createEventRegistration(this.cartEvents);
          // eslint-disable-next-line
          alert('Successfully placed order');
        } catch (e) {
          // eslint-disable-next-line
          alert("Error: " + e);
        }
      } else {
        API.createEventRegistrationAndCheckoutSession(this.cartEvents);
      }
    },
  },
};
</script>

<style lang="less">
@import '../../assets/color-constants.less';
@import '../../assets/global-classes.less';

.title {
  text-align: left;
  font-size: 2.3rem;
}
.subtitle {
  text-align: left;
  font-size: 1.5rem;
}

</style>
