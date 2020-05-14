<template>
  <div>
    <div class="flex-vertical">
    <h1 style="text-align:left">My Profile</h1>
    <Welcome :name="username"/>
    <div class="flex-horizontal">
      <div class="announcements-list__container">
        <h4 class="dekko-label">Announcements</h4>
        <announcements-list sitewide :count="announcementsCount"/>
      </div>
      <div class='flex-vertical'>
        <h4 class="dekko-label">Explore</h4>
        <router-link class="explore-btn" tag="button" to='/events'>
            Our Events
        </router-link>
        <router-link class="explore-btn" tag="button" to='/my-events'>
            My Events
        </router-link>
        <access-control :roles="[USER[ROLE.ADMIN]]">
          <router-link class="explore-btn" tag="button"
          :to='{name: "create-announcement", params: {eventName: "sitewide"}}'>
            Sitewide Announcement
          </router-link>
        </access-control>
        <router-link class="explore-btn" tag="button" to='/account'>
            Settings
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
import { USER, ROLE } from '../utils/constants/user';
import AccessControl from '../components/AccessControl/AccessControl.vue';

export default {
  name: 'profile',
  data() {
    return {
      USER,
      ROLE,
    };
  },
  components: {
    Welcome,
    AnnouncementsList,
    AccessControl,
  },
  computed: {
    announcementsCount() {
      return ANNOUNCEMENT_COUNT;
    },
  },
};
</script>

<style lang="less" scoped>
@import '../../assets/color-constants.less';

.explore-btn {
  width: 12rem;
  margin: 1em;
  background-color: @green-apple;
  color: @button-color;
  font-size: 18px;
  border: none;
  padding: 1rem;
  border-radius: 4px;
  cursor: pointer;
}

</style>
