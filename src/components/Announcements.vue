<template>
  <div>
    <h2>Announcements</h2>
    <div class="announcements-box">
      <div v-for="announcement in announcements" class="announcement" :key="announcement.id">
        <p class="title">{{ announcement.title }}</p>
        <p class="created">{{ announcement.created }}</p>
        <p class="desc">{{ announcement.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../api/api';

export default {
  name: 'Announcements',
  props: {
    number: Number,
  },
  data() {
    return {
      announcements: [],
    };
  },
  methods: {
    async getAnnouncements() {
      const res = await api.getEvent(this.eventId);
      return res;
    },
  },
  async created() {
    this.announcements = await this.getAnnouncements();
  },
};
</script>

<style scoped>
.announcements-box {
  height: 10em;
  width: 5em;
  overflow: scroll;
  display: flex;
  flex-direction: column;
}

.announcement {
  border: 1px solid black;
  padding: 1em;
}
</style>
