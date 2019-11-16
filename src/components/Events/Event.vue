<template>
  <div>
      <h3>{{ this.name }}</h3>
      <p>{{ this.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Event',
  props: {
    id: Number,
    name: String,
    description: String,
  },
};
</script>

<style>

</style>
