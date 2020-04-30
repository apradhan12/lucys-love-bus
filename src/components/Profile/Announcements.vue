<template>
  <div>
    <h2>Announcements</h2>
    <div class="announcements-box">
      <div v-for="announcement in announcements" class="announcement" :key="announcement.id">
        <p class="title">{{ announcement.title }}</p>
        <p class="created">{{ toStringDate(announcement.created) }}</p>
        <p class="desc">{{ announcement.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import api from '../../api/api';

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
      const res = await api.getSitewideAnnouncements({});
      return res.announcements;
    },
    toStringDate(date) {
      const d = moment(date);
      return d.format('M/DD/YYYY');
    },
  },
  async created() {
    this.announcements = await this.getAnnouncements();
  },
};
</script>

<style scoped>
.announcements-box {
  height: 25em;
  width: 15em;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  padding: 2em;
  border: 1px solid lightgray;
}

.announcement {
  border: 1px solid gray;
  padding: 1em;
  margin-bottom: 2em;
  text-align: left;
}

.title {
  font-weight: 700;
}
</style>
