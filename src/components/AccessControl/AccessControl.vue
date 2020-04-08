<template>
  <div v-if="hasRole" :class="_class">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'access-control',
  props: {
    roles: { type: Array, default: () => [] },
    role: { type: String, default: '' },
    componentUserId: { type: Number, default: -1 },
    userId: { type: Number, default: -2 },
    _class: { type: Array, default: () => [] },
  },
  computed: {
    hasRole() {
      return (this.roles.length === 0 || this.roles.includes(this.role))
          || (this.componentUserId === this.userId);
    },
  },
};
</script>
