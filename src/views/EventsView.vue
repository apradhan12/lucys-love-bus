<template>
  <div>
    <p class="title">Our Upcoming Events</p>
    <events-list :events="upcomingEvents">
      <template v-slot:NoEventsMsg>
        <h3>Sorry, there are currently no available events!</h3>
      </template>
      <template v-slot:eventBtns="slotProps">
        <access-control :roles="[USER[ROLE.GP], USER[ROLE.PF]]">
          <button
            v-on:click="register({event: slotProps.event})"
            class="event-btn" >
            Register
          </button>
        </access-control>
        <access-control :roles="[USER[ROLE.ADMIN]]">
          <router-link
              :to="{ name: 'edit-event', params: { eventId: slotProps.event.id}}"
              class="event-btn" tag="button">
            Edit
          </router-link>
        </access-control>
        <access-control :roles="[USER[ROLE.ADMIN]]">
          <router-link
              :to="{ name: 'create-announcement', params: { eventName: slotProps.event.name}}"
              class="event-btn" tag="button">
            Announce
          </router-link>
        </access-control>
        <access-control :roles="[USER[ROLE.GP], USER[ROLE.PF], USER[ROLE.ADMIN]]">
          <router-link
            :to="{ name: 'single-event', params: { eventId: slotProps.event.id}}"
            class="event-btn btn--secondary" tag="button">
            Learn More
          </router-link>
        </access-control>
      </template>
    </events-list>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import EventsList from '../components/Events/EventsList.vue';
import AccessControl from '../components/AccessControl/AccessControl.vue';
import { ROLE, USER } from '../utils/constants/user';

export default {
  name: 'EventsView',
  components: {
    EventsList,
    AccessControl,
  },
  data() {
    return {
      USER,
      ROLE,
    };
  },
  async created() {
    await this.setUpcomingEvents();
  },
  computed: {
    ...mapState('events', {
      upcomingEvents: 'upcomingEvents',
    }),
  },
  methods: {
    ...mapActions('events', {
      setUpcomingEvents: 'setUpcomingEvents',
    }),
    ...mapMutations('cart', {
      registerForEvent: 'registerForEvent',
    }),
    register(payload) {
      this.registerForEvent(payload);
      // eslint-disable-next-line no-alert
      alert(`You have signed up for ${payload.event.title}.`);
    },
  },
};
</script>

<style lang="less" scoped>
  @import '../../assets/global-classes.less';

  .title {
    text-align: left;
    font-size: 2.3rem;
  }
</style>
