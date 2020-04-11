<template>
  <div class="header">
    <div class="title">
      <router-link to="/" tag="h3">[LOGO]</router-link>
    </div>
    <div class="navlinks">
      <router-link to="/about-us" tag="button">About Us</router-link>
      <router-link to="/events" tag="button">Events</router-link>
      <router-link to="/login" tag="button">Log In</router-link>
      <button v-on:click="logout">Log Out</button>
      <router-link to="/checkout" tag="button">Checkout</router-link>
    </div>
  </div>
</template>

<script>
import authService from '../utils/service/authService';

export default {
  name: 'the-navigation',
  methods: {
    async logout() {
      console.log('logout');
      let res = '';
      try {
        res = await authService.actions.logout();
      } catch (err) {
        res = err;
      }
      return res;
    },
  },
};
</script>

<style lang="less" scoped>
@import '../../assets/global-classes.less';

.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  background-color: @header-color;
  background: linear-gradient(90deg, rgba(61,168,72,0.92) 0%, rgba(151,244,86,0.83) 100%);
  font-family: var(--main-font);
  .title {
    text-transform: uppercase;
    letter-spacing: 6px;
  }
  .navlinks {
    display: flex;
    justify-content: space-between;
    width: 25%;
    white-space: nowrap;
    button {
      display: block;
      width: 5em;
      height: 5em;
      letter-spacing: 4px;
      font-weight: bold;
      background: none;
      text-decoration: none;
      border: none;
      outline: none;
      font-family: var(--main-font);
    }
    button:hover {
      color: @button-hover-color;
    }
  }
}
</style>
