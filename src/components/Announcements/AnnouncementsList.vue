<template>
  <div class="scroll-container">
    <div v-for="a in allAnnouncements" v-bind:key="a.id">
      <h3>{{a.title}}</h3>
      <p>{{a.description}}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'AnnouncementsList',
  computed: {
    ...mapState('announcements', {
      allAnnouncements: 'getAllAnnouncements',
    }),
  },
};
</script>

<style scoped>
  @import '../../../assets/color-constants.less';
  @import '../../../assets/global-classes.less';
</style>
