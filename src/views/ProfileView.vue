<template>
  <div>
    <div class="flex-vertical">
    <h1 style="text-align:left">Homepage</h1>
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
        <router-link :to='{name: "create-announcement", params: {eventName: "sitewide"}}'>
          <div class='dash-item'>
            <img class="thumb" src='https://images.pexels.com/photos/273011/pexels-photo-273011.jpeg?cs=srgb&dl=black-calendar-close-up-composition-273011.jpg&fm=jpg'/>
            <button class="btn--tertiary">Sitewide Announcement</button>
          </div>
        </router-link>
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
