<template>
  <div>
    <h1>My Profile</h1>
    <Welcome :name="user.name" :familyImg="user.img"/>
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
    </div>
  </div>
</template>

<script>
import Welcome from './Welcome.vue';

export default {
  name: 'Profile',

  components: {
    Welcome,
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
