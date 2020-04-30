<template>
  <div>
    <h1>My Profile</h1>
    <Welcome :name="user.name" :familyImg="user.img"/>
    <div class="flex-horizontal">
      <Announcements/>
      <div class='dash'>
        <router-link to='/events'>
          <div class='dash-item'>
            <img class="thumb" src='https://images.pexels.com/photos/273011/pexels-photo-273011.jpeg?cs=srgb&dl=black-calendar-close-up-composition-273011.jpg&fm=jpg'/>
            <button class="btn--tertiary">New Events</button>
          </div>
        </router-link>
        <router-link :to='{name: "my-events", params: {username: username}}'>
          <div class='dash-item'>
            <img class="thumb" src='https://static5.depositphotos.com/1037987/476/i/450/depositphotos_4767995-stock-photo-couple-giving-two-young-children.jpg'/>
            <button class="btn--tertiary">My Events</button>
          </div>
        </router-link>
        <router-link :to='{name: "account", params: {username: username}}'>
          <div class='dash-item'>
            <img class="thumb" src='https://static.thenounproject.com/png/17337-200.png'/>
            <button class="btn--tertiary">Account Info</button>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Welcome from '../components/Profile/Welcome.vue';
import Announcements from '../components/Profile/Announcements.vue';

export default {
  name: 'Profile',
  components: {
    Welcome,
    Announcements,
  },

  data() {
    return {
      users: [
        {
          username: 'robinsons',
          name: 'Robinson',
          img: 'https://www.kiplinger.com/kipimages/pages/18048.jpg',
        },
        {
          username: 'reaves',
          name: 'Reaves',
          img: 'https://assets.change.org/photos/0/kx/ah/hjkxAHxAKbytEHg-800x450-noPad.jpg?1560309500',
        },
      ],
    };
  },

  computed: {
    username() {
      return this.$route.params.username;
    },

    user() {
      return this.users.find(user => user.username === this.username);
    },
  },
};
</script>

<style scoped>
</style>
