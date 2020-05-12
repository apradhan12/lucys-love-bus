<template>
  <div>
    <div class="flex-vertical">
    <h1 style="text-align:left">Homepage</h1>
    <Welcome :name="username"/>
    <div class="flex-horizontal">
      <div class="announcements-list__container">
        <h3>Announcements</h3>
        <announcements-list />
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
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Welcome from '../components/Profile/Welcome.vue';
import AnnouncementsList from '../components/Announcements/AnnouncementsList.vue';

export default {
  name: 'Profile',
  components: {
    Welcome,
    AnnouncementsList,
  },
};
</script>

<style lang="less" scoped>

</style>
