<template>
  <div id="app">
    <div id="content">
      <the-navigation />
      <router-view />
    </div>
    <the-footer />
  </div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';
import TheFooter from '.components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheNavigation,
    TheFooter,
  },
};
</script>

<style lang="less">
:root {
  --main-font: "Montserrat", sans-serif;
  --header-color: #ddabff;
  --body-color: white;
  --notes-form-color: #c4d2ff;
}
html{
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
  flex: 1 0 auto;
}
#content {
  min-height: 100%;
}
</style>
