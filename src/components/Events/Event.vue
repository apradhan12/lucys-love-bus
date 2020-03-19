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
        <access-control :roles="['user']" role="user">
          <slot name="btn1" :event="event" />
          <slot name="btn2" :event="event" />
        </access-control>
      </div>
      <div class="event-btns--admin_container">
        <access-control :roles="['admin']" role="" :_class="['event-btns--admin_wrapper']">
          <button class="event-btn">Edit</button>
          <button class="event-btn">Announce</button>
          <button class="event-btn">Check RSVP</button>
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
  },
};
</script>

<style lang="less">
    @import '../../../assets/global-classes.less';
</style>
