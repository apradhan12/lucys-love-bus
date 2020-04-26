<template>
  <div class="event__container">
      <div class="event-img">
          <img :src="event.img" />
      </div>
      <div class="event-content">
          <div class="content-wrapper">
              <h3>{{ event.name }}</h3>
              <p>{{ event.description }}</p>
          </div>
      </div>
       <div class="event-btns--user">
        <access-control :roles="['user']" :role="currentRole">
          <slot name="btn1" :event="event" />
          <slot name="btn2" :event="event" />
        </access-control>
      </div>
      <div class="event-btns--admin_container">
        <access-control :roles="['admin']" :role="currentRole"
        :_class="['event-btns--admin_wrapper']">
          <router-link
            :to="{ name: 'create-event', params: { eventId: event.id}}"
            class="event-btn" tag="button">
            Edit
          </router-link>
          <button
            v-on:click="announce({event: event})"
            class="event-btn">
            Announce
          </button>
          <button
            v-on:click="viewRSVP({event: event})"
            class="event-btn">
            View RSVP
          </button>
        </access-control>
      </div>
  </div>
</template>

<script>
import AccessControl from '../AccessControl/AccessControl.vue';

export default {
  name: 'Event',
  components: {
    AccessControl,
  },
  props: {
    event: {
      type: Object,
      required: true,
    },
    currentRole: String,
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

<style lang="less">
    @import '../../../assets/global-classes.less';
</style>
