<template>
  <div v-if="hasRole" :class="_class">
    <slot />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import userState from '../../utils/auth/state/userState';

export default {
  name: 'access-control',
  props: {
    roles: { type: Array, required: true },
    _class: { type: Array, default: () => [] },
  },
  data() {
    return {
      userRoleNum: -1,
    };
  },
  watch: {
    adminLevel: {
      immediate: true,
      handler() {
        this.userRoleNum = userState.getUserAdminLevel();

        if (this.adminLevel !== this.userRoleNum) {
          this.setUser();
        }
      },
    },
  },
  computed: {
    ...mapState('user', {
      adminLevel: 'adminLevel',
    }),
    userRole() {
      switch (this.userRoleNum) {
        case 0:
          return 'user';
        case 2:
          return 'admin';
        default:
          return 'guest';
      }
    },
    hasRole() {
      return (this.roles.length === 0 || this.roles.includes(this.userRole));
    },
  },
  methods: {
    ...mapMutations('user', {
      setUser: 'setUser',
    }),
  },
};
</script>
