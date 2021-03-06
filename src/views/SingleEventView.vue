<template>
  <div class="event-container">
    <div class="top-content">
      <div class="event-title">
        {{ singleEvent.title }}
      </div>
      <div>
        <access-control :roles="[USER[ROLE.GP], USER[ROLE.PF]]">
          <div v-if="isRegistered" class="signed-up-message">
            You're signed up!
          </div>
          <button v-else-if="singleEvent.spotsAvailable > 0"
                  class="register-button"
                  @click="openEventModal">
            Sign Up!
          </button>
          <div v-else class="sold-out-message">
            Sold Out!
          </div>
        </access-control>
      </div>
    </div>
    <div class="announcement-container">
      <!--  TODO: Styling for event specific announcements   -->
    </div>
    <div class="middle-content">
      <div class="event-img">
        <img v-if="singleEvent.thumbnail" :src="singleEvent.thumbnail" />
        <img v-else src="https://www.guidestar.org/ViewEdoc.aspx?eDocId=5734064&approved=True" />
      </div>
      <div class="event-info">
        <div class="info-block">
          <p class="subheader">Who</p>
          There are
          <span class="spotsAvailable">{{ singleEvent.spotsAvailable }}</span>
          open spots of
          <span class="capacity">{{ singleEvent.capacity }}</span>
          total
        </div>
        <div class="info-block">
          <p class="subheader">When</p>
          {{ date }}, {{startTime}}-{{endTime}}
        </div>
        <div class="info-block">
          <p class="subheader">Where</p>
          {{ singleEvent.details.location }}
        </div>
        <div class="info-block">
          <p class="subheader">What</p>
          {{ singleEvent.details.description }}
        </div>
      </div>
    </div>
    <div class="bottom-content">
      <div class="event-buttons">
        <access-control :roles="[USER[ROLE.GP], USER[ROLE.PF], USER[ROLE.ADMIN]]">
          <router-link to="/events" tag="button" class="back-to-event-btn single-event-btn">
            Back To Events
          </router-link>
        </access-control>
        <access-control :roles="[USER[ROLE.ADMIN]]">
          <router-link tag="button"  class="btn-secondary single-event-btn"
                       :to="{name: 'create-announcement',
                       params: {eventName: singleEvent.title, eventId: singleEvent.id}}"
          >
            Make Announcement
          </router-link>
        </access-control>
        <access-control :roles="[USER[ROLE.ADMIN]]">
          <button
              class="btn-secondary single-event-btn"
              v-on:click="$router.push(`/edit-event/${singleEvent.id}`)">
            Edit Event
          </button>
        </access-control>
        <access-control :roles="[USER[ROLE.ADMIN]]">
          <button
              class="btn-secondary single-event-btn"
              v-on:click="deleteEvent(singleEvent.id), $router.push('/events')">
            Delete Event
          </button>
        </access-control>
        <access-control :roles="[USER[ROLE.ADMIN]]">
          <button
              class="btn-primary single-event-btn"
              v-on:click="viewRSVP(singleEvent), $router.push('/events')">
            View RSVPs
          </button>
        </access-control>
        <access-control v-if="isRegistered" :roles="[USER[ROLE.GP], USER[ROLE.PF]]">
          <button class="btn-primary single-event-btn">
            Unregister
          </button>
        </access-control>
      </div>
    </div>
    <EventModal :open="openModal"
                :event="singleEvent"
                @close-event-modal="closeEventModal"
                @add-to-cart="addEventToCart"
    />
  </div>
</template>


<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import moment from 'moment';
import api from '../api/api';
import AccessControl from '../components/AccessControl/AccessControl.vue';
import EventModal from '../components/Events/EventModal.vue';
import {
  USER, ROLE,
} from '../utils/constants/user';

export default {
  name: 'SingleEvent',
  components: {
    AccessControl,
    EventModal,
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
      openModal: false,
    };
  },
  computed: {
    ...mapGetters('events', {
      registered: 'isRegistered',
    }),
    isRegistered() {
      /* TODO: The vuex getter depends on myEvents which are reset when refreshing a page
      *   If a user refreshes this page it'll always say they're not signed up.  */
      return this.registered(this.eventId);
    },
    date() {
      return moment(this.singleEvent.details.start).format('dddd, MMMM Do YYYY');
    },
    startTime() {
      return moment(this.singleEvent.details.start).format('h:ma');
    },
    endTime() {
      return moment(this.singleEvent.details.end).format('h:ma');
    },
  },
  methods: {
    ...mapActions('events', {
      deleteEvent: 'deleteEvent',
    }),
    ...mapMutations('cart', {
      registerForEvent: 'registerForEvent',
    }),
    openEventModal() {
      this.openModal = true;
    },
    closeEventModal() {
      this.openModal = false;
    },
    addEventToCart(payload) {
      this.openModal = false;
      this.registerForEvent(payload);
      // eslint-disable-next-line no-alert
      alert(`You have added ${payload.tickets} tickets for ${payload.event.title} to your cart.`);
    },
    async getSingleEvent() {
      const res = await api.getEvent(this.eventId);
      return res;
    },
    announce(payload) {
      // eslint-disable-next-line no-alert
      alert(`Once created, link create-announcement component here for ${payload.event.title}.`);
    },
    viewRSVP(event) {
      // eslint-disable-next-line no-alert
      alert(`${event.title} RSVP To be Implemented!`);
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
  display: flex;
  flex-direction: column;
}

.top-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.event-title {
  text-align: left;
  font-size: 2.3rem;
}
.signed-up-message {
  font-size: 1.5rem;
  color: green;
  font-weight: bold;
}
.sold-out-message {
  font-size: 1.5rem;
  color: red;
  font-weight: bold;
}
.register-button {
  background-color: @tangerine;
  color: white;
  font-size: 1.3rem;
  border: none;
  border-radius: 6px;
  padding: 3px 12px;
  cursor: pointer;
}

.middle-content {
  display: inline;
  margin-top: 10px;
}
.event-img {
  position: relative;
  float: left;
  max-width: 50%;
  height: auto;
}
.event-img > img {
  float: left;
  width: 90%;
}

.event-info {
  text-align: left;
}
.info-block {
  margin-bottom: 10px;
}
.subheader {
  font-family: Dekko;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

.spotsAvailable {
  font-weight: bold;
}
.capacity {
  font-weight: bold;
}


.event-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: baseline;
  margin-top: 6px;
  margin-bottom: 20px;
}
.single-event-btn {
  border-radius: 4px;
  padding: 0 6px;
  cursor: pointer;
}
.back-to-event-btn {
  background-color: @tangerine;
  border: 2px solid @tangerine;
  color: white;
}
.btn-primary {
  background-color: @green-apple;
  border: 2px solid @green-apple;
  color: white;
}
.btn-secondary {
  background-color: white;
  border: 2px solid @tangerine;
  color: @tangerine;
}


</style>
