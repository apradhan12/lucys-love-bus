<template>
  <div>
     <h1>ACL Layer Demonstration</h1>

     <!-- Update your role information here -->
     <h4>Change your role</h4>
     <input type="text" v-model="currentRole">

     <h4>Change your user_id</h4>
     <input type="number" v-model="user_id">

     <h4>Change the component's component_user_id</h4>
     <input type="number" v-model="component_user_id">

     <!-- Dynamically renders component if role matches -->
     <access-control
      :roles='acceptedRoles'
      :role='currentRole'
      :component_user_id='component_user_id'
      :user_id='user_id'>

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
