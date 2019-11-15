<template>
    <div>
        <h1>Our Upcoming Events</h1>
        <TheEventsList />
    </div>
</template>

<script>
import TheEventsList from './TheEventsList.vue';

export default {
  name: 'Events',
  components: {
    TheEventsList,
  },
};

</script>

<style>

</style>
