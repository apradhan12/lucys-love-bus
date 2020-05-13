<template>
  <div>
    <div class="flex-vertical">
    <h1 style="text-align:left">My Profile</h1>
    <Welcome :name="username"/>
    <div class="flex-horizontal">
      <div class="announcements-list__container">
        <h3>Announcements</h3>
        <announcements-list sitewide :count="announcementsCount"/>
      </div>
      <div class='flex-vertical'>
        <h3 style="text-align:center">Explore</h3>
        <router-link class="explore-btn" tag="button" to='/events'>
            Our Events
        </router-link>
        <router-link class="explore-btn" tag="button" to='/my-events'>
            My Events
        </router-link>
        <router-link class="explore-btn" tag="button" to='/account'>
            Settings
        </router-link>
        <router-link class="explore-btn" tag="button"
        :to='{name: "create-announcement", params: {eventName: "sitewide"}}'>
          Sitewide Announcement
        </router-link>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Welcome from '../components/Profile/Welcome.vue';
import AnnouncementsList from '../components/Announcements/AnnouncementsList.vue';
import ANNOUNCEMENT_COUNT from '../utils/constants/announcements';

export default {
  name: 'Profile',
  components: {
    Welcome,
    AnnouncementsList,
  },
  computed: {
    announcementsCount() {
      return ANNOUNCEMENT_COUNT;
    },
  },
};
</script>

<style lang="less" scoped>

</style>
