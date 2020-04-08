<template>
  <div id="app">
    <the-navigation />
    <router-view />
    <the-footer />
  </div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';
import authService from './utils/service/authService';
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheNavigation,
    TheFooter,
  },
  beforeCreate() {
    authService.actions.persistUser();
  },
};
</script>

<style lang="less">
@import '../assets/color-constants.less';

:root {
  --main-font: "Montserrat", sans-serif;
  --header-color: @header-color;
  --body-color: @body-color;
  --notes-form-color: @notes-form-color;
}
html {
  overflow-y: scroll;
  body {
    margin: 0;
    padding: 0;
  }
}

#app {
  font-family: var(--main-font);
  text-align: center;
  width: 100%;
  height: 100vh;
  background-color: var(--body-color);
  display: flex;
  flex-direction: column;
}
</style>
