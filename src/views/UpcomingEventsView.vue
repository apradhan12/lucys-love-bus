<template>
  <div>
  <events-list :events="allEvents" currentRole="admin">
    <template v-slot:noEventsMsg>
      <h3>Sorry, there are no currently availible events!</h3>
    </template>
  </events-list>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import EventsList from '../components/Events/EventsList.vue';

export default {
  name: 'UpcomingEventsView',
  components: {
    EventsList,
  },
  computed: {
    ...mapState('events', {
      allEvents: 'events',
    }),
  },
  methods: {
    announce(payload) {
      // eslint-disable-next-line no-alert
      alert(`Once created, link create-announcement component here for ${payload.event.name}.`);
    },
    viewRSVP(payload) {
      // eslint-disable-next-line no-alert
      alert(`The users registered for ${payload.event.name} are ${payload.event.users}.`);
    },
  },
};
</script>

<style lang="less" scoped>
@import '../../assets/global-classes.less';
</style>
