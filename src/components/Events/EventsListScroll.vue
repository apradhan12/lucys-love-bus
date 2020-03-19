<template>
    <div class="scroll-container">
        <slot v-if="events.length === 0" name="NoEventsMsg"></slot>
        <div v-else>
          <Event
              v-for='event in events'
              :key='event.id'
              :event="event" />
        </div>
    </div>
</template>

<script>
import Event from './Event.vue';

export default {
  name: 'EventsListScroll',
  components: {
    Event,
  },
  props: {
    events: {
      type: Array,
      required: true,
    },
  },
};

</script>

<style lang="less">
  @import '../../../assets/color-constants.less';

  .scroll-container {
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
