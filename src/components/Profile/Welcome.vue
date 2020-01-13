<template>
  <div class="welcome">
    <img :src="familyImg"/>
    <div>
      <span class="title">Welcome, the {{ name }} Family!</span>
      <p>Lorem ipsum...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',

  props: {
    name: String,
    familyImg: String,
  },
};
</script>

<style scoped>
.welcome {
  display: grid;
  grid-template-columns: 20% auto;
}

.welcome img {
  width: 100%;
  border-radius: 50%;
}

.welcome div {
  text-align: left;
}

.welcome .title {
  font-size: 24px;
}
</style>
