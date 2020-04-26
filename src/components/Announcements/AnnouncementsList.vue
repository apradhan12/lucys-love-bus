<template>
  <div class="scroll-container announcements-container" v-bind:style="{ 'maxHeight': '20rem' }">
      <div v-for="a in allAnnouncements" v-bind:key="a.id" class="announcement-wrapper">
        <h3>{{a.title}}</h3>
        <p>{{a.description}}</p>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AnnouncementsList',
  computed: {
    ...mapGetters('announcements', {
      allAnnouncements: 'getAllAnnouncements',
    }),
  },
};
</script>

<style scoped>
  @import '../../../assets/color-constants.less';
  @import '../../../assets/global-classes.less';

  .announcements-container {
    border: 1px solid grey;
    padding: 1rem;
  }

  .announcement-wrapper {
    border: 1px solid grey;
    margin: 1rem 0;
  }
</style>
