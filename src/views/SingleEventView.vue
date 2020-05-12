<template>
  <div class="event-container">
    <div class="event-name">
      <h1>{{ singleEvent.title }}</h1>
    </div>
    <div class="event-description">
      <p>Event Description: {{ singleEvent.details.description }}</p>
    </div>
    <div class="event-buttons">
      <access-control :roles="[USER[ROLE.GP], USER[ROLE.PF], USER[ROLE.ADMIN]]">
        <button v-if="registered">Unregister</button>
        <button v-else>Register!</button>
      </access-control>
      <access-control :roles="[USER[ROLE.ADMIN]]">
        <button
          v-on:click="$router.push(`/edit-event/${singleEvent.id}`)">
          Edit Event
        </button>
        <button
          v-on:click="deleteEvent(singleEvent.id), $router.push('/events')">
          Delete Event
        </button>
      </access-control>
      <router-link to="events">
          <button>Back to Events</button>
      </router-link>
    </div>
    <div class="event-info">
      <p>Location: {{ singleEvent.details.location }}</p>
      <p>Time: {{ singleEvent.details.start }}</p>
    </div>
    <div class="event-announcements">
      <p>Event Announcements</p>
      <div class="announcements-list__container">
        <announcements-list :eventID="eventId"/>
      </div>
    </div>
    <div class="event-img">
      <img :src="singleEvent.img" alt="Event Image">
    </div>
  </div>
</template>


<script>
import { mapActions } from 'vuex';
import api from '../api/api';
import AccessControl from '../components/AccessControl/AccessControl.vue';
import {
  USER, ROLE,
} from '../utils/constants/user';
import AnnouncementsList from '../components/Announcements/AnnouncementsList.vue';

export default {
  name: 'SingleEvent',
  components: {
    AccessControl,
    AnnouncementsList,
  },
  props: {
    eventId: { // id is a number, but props are always passed as strings
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      singleEvent: {
        details: {},
      },
      USER,
      ROLE,
    };
  },
  computed: {
    registered() {
      return true; // will be fetched from store in future
    },
  },
  methods: {
    ...mapActions('events', {
      deleteEvent: 'deleteEvent',
    }),
    async getSingleEvent() {
      const res = await api.getEvent(this.eventId);
      return res;
    },
  },
  async created() {
    this.singleEvent = await this.getSingleEvent();
  },
};
</script>

<style scoped>
.event-container {
  margin: 3rem;
  display: grid;
  grid-template: auto / auto;
  justify-items: start;
}
.event-name {
  grid-row: 1 / 2;
  grid-column: 1 / 4;
}
.event-description{
  grid-row: 2 / 3;
  grid-column: 1 / 3;
}
.event-buttons {
  grid-row: 2 / 3;
  grid-column: 3 / end;
  display: flex;
  flex-direction: column;
}
.event-info {
  grid-row: 3 / end;
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.event-announcements {
  grid-row: 3 / 4;
  grid-column: 2 / 3;
}
.event-img {
  grid-row: 3 / end;
  grid-column: 3 / end;
  justify-self: end;
}
img {
  width: 70%;
}
</style>
