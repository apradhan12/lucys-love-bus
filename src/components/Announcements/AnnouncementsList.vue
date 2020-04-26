<template>
  <div class="scroll-container" v-bind:style="{ 'maxHeight': '15rem' }">
      <div v-for="a in allAnnouncements" v-bind:key="a.id">
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
</style>
