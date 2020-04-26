<template>
  <div v-if="hasRole" :class="_class">
    <slot />
  </div>
</template>

<script>
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
  created() {
    this.userRoleNum = userState.getUserAdminLevel();
  },
  computed: {
    userRole() {
      switch (this.userRoleNum) {
        case 0:
          return 'user';
        case 2:
          return 'admin';
        default:
          return 'error';
      }
    },
    hasRole() {
      return (this.roles.length === 0 || this.roles.includes(this.userRole));
    },
  },
};
</script>
