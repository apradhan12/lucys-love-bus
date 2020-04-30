<template>
  <div>
    <h1>My Profile</h1>
    <Welcome :name="username" />
    <div class='three-buttons'>
      <div class='button'>
        <router-link to='/events'>
          <img src='https://images.pexels.com/photos/273011/pexels-photo-273011.jpeg?cs=srgb&dl=black-calendar-close-up-composition-273011.jpg&fm=jpg'/>
          <span>New Events</span>
        </router-link>
      </div>
      <div class='button'>
        <router-link :to='{name: "my-events", params: {username: username}}'>
          <img src='https://static5.depositphotos.com/1037987/476/i/450/depositphotos_4767995-stock-photo-couple-giving-two-young-children.jpg'/>
          <span>My Events</span>
        </router-link>
      </div>
      <div class='button'>
        <router-link :to='{name: "account", params: {username: username}}'>
          <img src='https://static.thenounproject.com/png/17337-200.png'/>
          <span>Account Info</span>
        </router-link>
      </div>
      <div class="announcements-list__container">
        <announcements-list />
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
  props: {
    username: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped>
.three-buttons {
  display: grid;
  grid-template-columns: 33% 33% 33%;
}

.button img {
  height: 50px;
  width: 50px;
}

.button span {
  display: block;
}
</style>
