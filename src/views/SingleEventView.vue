<template>
  <div class="event-container">
      <div class="event-name">
        <h1 class="event-name">{{ singleEvent.title }}</h1>
      </div>
      <div class="description-buttons">
        <div class="event-description">
          <p>Event Description: {{ singleEvent.details.description }}</p>
        </div>
        <div class="event-buttons">
          <access-control :roles="[USER[ROLE.GP], USER[ROLE.PF], USER[ROLE.ADMIN]]">
            <button v-if="registered" class="event-btn btn--primary">Unregister</button>
            <button v-else class="event-btn btn--primary">Register!</button>
          </access-control>
          <access-control :roles="[USER[ROLE.ADMIN]]">
            <button class="event-btn btn--secondary">Edit Event</button>
          </access-control>
          <router-link to="/events">
              <button class="event-btn">Back to Events</button>
          </router-link>
        </div>
      </div>
      <div class="event-info">
        <p>Location: {{ singleEvent.details.location }}</p>
        <p>Time: {{ singleEvent.details.start }}</p>
      </div>
      <div class="event-img">
        <img :src="singleEvent.thumbnail" alt="Event Image">
      </div>
    </div>
</template>


<script>
import api from '../api/api';
import AccessControl from '../components/AccessControl/AccessControl.vue';
import {
  USER, ROLE,
} from '../utils/constants/user';

export default {
  name: 'SingleEvent',
  components: {
    AccessControl,
  },
  props: {
    eventId: { // id is a number, but props are always passed as strings
      type: String,
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

<style lang="less" scoped>
@import '../../assets/global-classes.less';
    .event-container {
      margin: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    .event-name {
      justify-content: flex-start;
      align-items: flex-start;
    }
    .description-buttons {
      display: flex;
      flex-direction: row;
    }
    .event-description{
      text-align: left;
    }
    .event-buttons {
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
    .event-img {
      grid-row: 3 / end;
      grid-column: 2 / end;
      justify-self: end;
    }
    img {
      width: 70%;
    }
</style>
