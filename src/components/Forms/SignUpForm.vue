<template>
  <div class="auth-container">
    <div class="h-fields">
      <input
        v-model="firstName"
        class="input-primary half-input"
        type="text"
        placeholder="First Name">
      <input
        v-model="lastName"
        class="input-primary half-input"
        type="text"
        placeholder="Last Name">
    </div>
    <input v-model="email" class="input-primary" type="text" placeholder="Email Address">
    <input v-model="phone" class="input-primary half-input" type="text" placeholder="Phone Number">
    <input v-model="address" class="input-primary" type="text"  placeholder="Address">
    <div class="h-fields">
      <input v-model="city" class="input-primary third-input" type="text" placeholder="City">
      <input v-model="state" class="input-primary third-input" type="text" placeholder="State">
      <input v-model="zip" class="input-primary third-input" type="text"  placeholder="Zip Code">
    </div>
    <input
      v-model="password[0]"
      class="input-primary"
      type="password"
      placeholder="Password">
    <input
      v-model="password[1]"
      class="input-primary"
      type="password"
      placeholder="Confirm Password">
    <div>
      <button @click="completeForm" class="btn--tertiary"> Request </button> &nbsp;
      <router-link :to="{name: 'login'}" class="med-pad-left" tag="a">
        Already have an account? Log in here!
      </router-link>
    </div>
    <ul class="error">
      <li v-for="(err, index) in inputError" :key="index"> {{err}} </li>
      <li v-if="this.serverError"> {{this.serverError}} </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'SignupForm',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      allergies: '',
      password: ['', ''],
      inputError: [],
      serverError: '',
    };
  },
  methods: {
    ...mapMutations('user', {
      setUser: 'setUser',
    }),
    resetInput() {
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.password = ['', ''];
      this.inputError = [];
      this.serverError = '';
    },
    validate() {
      this.inputError = [];
      const err1 = this.validateUser();
      const err2 = this.validateEmail();
      const err3 = this.validatePassword();
      return err1 && err2 && err3;
    },
    validateUser() {
      if (!this.firstName || !this.lastName[1]) {
        this.inputError.push('Name cannot be empty');
      } else {
        return true;
      }
      return false;
    },
    validateEmail() {
      // eslint-disable-next-line no-useless-escape
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!this.email) {
        this.inputError.push('Email cannot be empty');
      } else if (!emailRegex.test(this.email)) {
        this.inputError.push('Invalid Email');
      } else {
        return true;
      }
      return false;
    },
    validatePassword() {
      if (!this.password[0] && !this.password[1]) {
        this.inputError.push('Password cannot be empty');
      } else if (this.password[0] !== this.password[1]) {
        this.inputError.push('Passwords do not match');
      } else {
        return true;
      }
      return false;
    },
    completeForm() {
      this.$emit('completeForm');
    },
  },
};
</script>

<style scoped>
@import '../../../assets/global-classes.less';

.auth-container {
  background-color: #fff1d4;
}

.text-wrap {
  margin: auto;
  width: 30em;
  padding-bottom: 1em;
}

.center h2 {
  font-family: Dekko, cursive;
}

a {
  text-decoration: none;
  color: gray;
}
</style>
