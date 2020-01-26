<template>
  <div v-if="hasRole">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    roles: { type: Array, default: () => [] },
    role: { type: String, default: '' },
    component_user_id: { type: Number,  default: -2 },
    user_id: { type: String, default: -1 }
  },
  computed: {
    hasRole () {
      return (this.roles.length === 0 || this.roles.includes(this.role))
          || (this.component_user_id === this.user_id)
    }
  }
}
</script>