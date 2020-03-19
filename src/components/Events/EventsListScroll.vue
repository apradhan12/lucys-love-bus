<template>
  <div>
    <slot v-if="events.length === 0" name="NoEventsMsg"></slot>
    <div v-else>
      <event v-for="event in events" :key="event.id" :event="event" >
        <template v-slot:btn1>
          <slot name="eventBtn1" :event="slotProps.event" />
        </template>
        <template v-slot:btn2="slotProps">
          <slot name="eventBtn2" :event="slotProps.event"/>
        </template>
      </event>
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
