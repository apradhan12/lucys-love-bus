<template>
  <div class="auth-container">
    <h1>Login</h1>
    <h4> Welcome! </h4>
    <p> A very detailed login description </p>
    <div class="auth-container">
      <strong> Sign in to your account </strong>
      <input v-model="email" @focus="resetSubmit" type="text" placeholder="Email Address" />
      <input v-model="password" @focus="resetSubmit" type="password" placeholder="Password"/>
      <button @click="submit"> Login </button>
      <label for="keepSignedIn"> Keep me signed in </label>
      <input type="checkbox" id="rememberMe" v-model="rememberMe">
      <router-link to="sign-up" tag="a"> Don't have an account? Sign up here! </router-link>
    </div>
    <div class="error">
      <p v-if="submitted && !inputValid"> Enter an email and password </p>
      <p v-if="submitted && error">{{error}}</p>
    </div>
  </div>
</template>

<script>
import authService from '../utils/service/authService';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      submitted: false,
      inputValid: false,
      error: '',
    };
  },
  methods: {
    resetInput() {
      this.email = '';
      this.password = '';
      this.resetSubmit();
    },
    resetSubmit() {
      this.submitted = false;
      this.error = '';
    },
    validateInput() {
      this.inputValid = this.email && this.password;
      return this.inputValid;
    },
    async submit() {
      this.submitted = true;
      if (this.validateInput()) {
        const user = {
          username: this.email,
          password: this.password,
          rememberMe: this.rememberMe,
        };
        try {
          await authService.actions.login(user);
          this.resetInput();
          // switch this to the home component once it's made.
          this.$router.push('/events');
        } catch (error) {
          this.error = error.message;
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import '../../assets/global-classes.less';

</style>
