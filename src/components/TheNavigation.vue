<template>
  <div class="header">
    <div class="title">
      <router-link to="/" tag="h3">[LOGO]</router-link>
    </div>

    <div class="navlinks">
      <router-link to="/about-us" tag="button">About Us</router-link>
      <router-link to="/events" tag="button">Events</router-link>
      <router-link to="/login" tag="button">Log In</router-link>
      <router-link to="/checkout" tag="button">Checkout</router-link>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../../assets/color-constants.less';

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
    justify-content: space-evenly;
    width: 40%;
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
