<template>
    <div>
    <h4>{{ pageOfEvents }}</h4>
    </div>
</template>

<script>

export default {
  name: 'TheEventsList',
  data() {
    return {
      eventsPerPage: 5,
      currentPage: 1,
    };
  },
  components: {},
  computed: {
    pageOfEvents() {
      return this.$store.getters.getPageOfEvents(this.currentPage, this.eventsPerPage);
    },
  },
};
</script>

<style>

</style>
