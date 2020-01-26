<template>
  <div>
     <h1>ACL Layer Demonstration</h1>
     <h4>Change your role</h4>
     <input type="text" v-model="currentRole">
     <access-control
      :roles='acceptedRoles'
      :role='currentRole'
      :component_user_id='component_user_id'>

       <h1>You have access!</h1>
     </access-control>
  </div>
</template>

<script>
import AccessControl from './AccessControl.vue';

export default {
  name: 'AccessControlDemonstration',
  components: {
    AccessControl,
  },
  data() {
    return {
      currentRole: '',
      acceptedRoles: ['admin'],
      component_user_id: 0,
      user_id: 1,
    };
  },
};
</script>

<style>

</style>
