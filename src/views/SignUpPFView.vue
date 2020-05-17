<template>
  <div>
    <router-link :to="{name: 'profile'}" tag="div" class="left-tab">
      Back to Options
    </router-link>
    <div class="center">
      <h2> Registering as a Participating Family! </h2>
      <p class="text-wrap">
        Participating Families have early access to view events and are
        elligible to attend free of charge.
        After creating an account, your request will be reviewed by a member of our administration.
      </p>
    </div>
    <SignUpForm />
  </div>
</template>

<script>

import { mapMutations } from 'vuex';
import authService from '../utils/service/authService';
import SignUpForm from '../components/Forms/SignUpForm.vue';

export default {
  name: 'SignupPFForm',
  components: {
    SignUpForm,
  },
  methods: {
    ...mapMutations('user', {
      setUser: 'setUser',
    }),
    resetInput() {
      this.parents = [
        {
          id: 0,
          name: '',
          phoneNumber: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          email: '',
          allergies: '',
        },
      ];
      this.children = [
        {
          id: 0,
          name: '',
          dateOfBirth: '',
          pronouns: '',
          schoolyear: '',
          school: '',
          diagnosis: '',
          medications: '',
          notes: '',
        },
      ];
      this.noVisitAfterSick = false;
      this.parentsRemain = false;
      this.upToDateVaccination = false;
      this.photoVideoReleaseConsent = undefined;
      this.parentGuardianName = '';
      this.parentGuardianInitials = '';
      this.dateOfSignature = '';
      this.password = ['', ''];
      this.inputError = [];
      this.serverError = '';
    },
    async signup() {
      // TODO when backend routes are set up
      // this is old code from the other sign up form. Must be adjusted.
      this.serverError = '';
      if (this.validate()) {
        const user = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password[0],
        };
        try {
          await authService.actions.signup(user);
          this.$router.push(`/profile/${this.email}`);
          this.resetInput();
          this.setUser();
        } catch (error) {
          this.serverError = error.message;
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
  @import '../../assets/global-classes.less';

  .auth-container {
    text-align: left;
    display: flex;
    background-color: @form-bg-color;
    border-radius: 5px;
  }

  .text-wrap {
    margin: auto;
    width: 30em;
    padding-bottom: 1em;
  }

  .half-input {
    width: 43%;
  }

  .center h2 {
    font-family: Dekko, cursive;
  }

  a {
    text-decoration: none;
    color: gray;
  }

  .add-btn {
    padding: 0 1rem 1rem 0;
    background: 0;
    border: 0;
    cursor: pointer;
    font-size: 1rem;
  }

  .remove-btn {
    padding: .25rem;
    border-radius: 2px;
    background: grey;
    border: 0;
    cursor: pointer;
    font-size: .75rem;
    color: white;
  }

  .pronoun-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .pronoun-wrapper h4 {
    font-weight: normal;
  }

  .invalid_form--container {
    margin-top: 1rem;
    text-align: left;
    background: rgba(255, 0, 0, 0.4);
    border-radius: 5px;
    padding: 1rem;
  }

</style>
