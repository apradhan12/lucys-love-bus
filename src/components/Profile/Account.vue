<template>
  <div>
    <h1>My Account</h1>
    <p>{{ username }}'s account</p>
  </div>
</template>

<script>
export default {
  name: 'Account',

  props: {
    username: String,
  },
};
</script>
