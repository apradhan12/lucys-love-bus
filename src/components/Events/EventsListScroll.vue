<template>
    <div class="scroll-container">
        <span v-if="noEvents">
          <span v-if="myEvents">You aren't registered for any events.</span>
          <span v-else>There aren't any events right now. Check back later!</span>
        </span>
        <div v-else class="events-container">
          <Event
              v-for='event in events'
              :key='event.id'
              :id='event.id'
              :name='event.name'
              :img='event.img'
              :description='event.description'
              :myEvents="myEvents" />
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
    events: Array,
  },
};

</script>

<style lang="less">
  @import '../../../assets/color-constants.less';

  .scroll-container {
    max-height: 100%;
    overflow-x: hidden;
  }
</style>
