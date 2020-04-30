<template>
  <div>
    <router-link :to="{name: 'login'}" tag="div" class="left-tab">
      Back to Log In
    </router-link>
    <div class="center">
      <h2> Join the Sajni Center! </h2>
      <p class="text-wrap">
        If you wish to join events for free and learn about more opportunities,
        sign this form to request to be appoved by our team!
      </p>
    </div>
    <div class="auth-container">
      <span class="form-title"> Sign up for a participating family account </span>
      <div class="parents">
        <div v-for="parent in parents" :key="parent.id">
          <h3>
            Parent {{parent.id + 1}}
            <button class="remove-btn"
                    v-if="parent.id > 0"
                    v-on:click="removeParent(parent.id)">
              Remove</button>
          </h3>
          <div class="h-fields">
            <input
                    v-model="parent.name"
                    class="input-primary half-input"
                    type="text"
                    placeholder="Parent's Name">
            <input
                    v-model="parent.phoneNumber"
                    class="input-primary half-input"
                    type="text"
                    placeholder="Phone Number">
          </div>
          <input class="input-primary" v-model="parent.address"
                 type="text" placeholder="Address"
                 style="width: 100%; box-sizing: border-box">
          <div class="h-fields">
            <input v-model="parent.city" type="text"
                   class="input-primary" placeholder="City">
            <input v-model="parent.state" type="text"
                   class="input-primary" placeholder="State"
                   style="max-width: 4rem;">
            <input v-model="parent.zipCode" type="text"
                   class="input-primary" placeholder="Zip Code"
                   style="max-width: 6rem;">
          </div>
          <input v-model="parent.email" type="text"
                 class="input-primary" placeholder="Email Address"
                 style="width: 100%; box-sizing: border-box">
          <textarea v-model="parent.allergies" type="text"
                 class="input-primary" placeholder="Allergies"
                    style="min-width: 100%; max-width: 100%; box-sizing: border-box"/>
        </div>

        <button class="add-btn" v-on:click="addParent">+ Add Parent</button>
      </div>
      <div class="children">
        <div v-for="child in children" :key="child.id">
          <h3>
            Child {{child.id + 1}}
            <button class="remove-btn"
                    v-if="child.id > 0"
                    v-on:click="removeChild(child.id)">
              Remove</button>
          </h3>
          <div class="h-fields">
            <input
                    v-model="child.name"
                    class="input-primary half-input"
                    type="text"
                    placeholder="Child's Name">
            <input
                    v-model="child.dateOfBirth"
                    class="input-primary half-input"
                    type="text"
                    placeholder="Date of Birth  DD/MM/YYYY">
          </div>
          <div class="pronoun-wrapper">
            <h4>Preferred Pronouns</h4>
            <button class="form-btn-basic"
                    v-on:click="child.pronouns = 'M'"
                    :class="{'selected-form-btn' : child.pronouns === 'M'}">He/Him</button>
            <button class="form-btn-basic"
                    v-on:click="child.pronouns = 'F'"
                    :class="{'selected-form-btn' : child.pronouns === 'F'}">She/Her</button>
            <button class="form-btn-basic"
                    v-on:click="child.pronouns = 'A'"
                    :class="{'selected-form-btn' : child.pronouns === 'A'}">They/Them</button>
          </div>
          <div class="h-fields">
            <input v-model="child.schoolyear" type="text"
                   class="input-primary half-input" placeholder="Grade">
            <input v-model="child.school" type="text"
                   class="input-primary half-input" placeholder="School">
          </div>
          <input v-model="child.diagnosis" type="text"
                 class="input-primary" placeholder="Diagnosis (if applicable)"
                 style="width: 100%; box-sizing: border-box">
          <input v-model="child.medications" type="text"
                 class="input-primary" placeholder="Current Medications"
                 style="width: 100%; box-sizing: border-box">
          <textarea v-model="child.notes" type="text"
                    class="input-primary" placeholder="Other notes"
                    style="min-width: 100%; max-width: 100%; box-sizing: border-box;"/>
        </div>
        <button class="add-btn" v-on:click="addChild">+ Add Child</button>
      </div>
      <p style="font-weight: bold">Please carefully read, review, and check the
        agreement boxes below in order to participate
        in programs through Lucy’s Love Bus to ensure
        the safety and comfort of all participants. </p>
      <input type="checkbox"
             v-model="noVisitAfterSick"
             name="noVisitAfterSickCheckbox"
             id="noVisitAfterSickCheckbox">
      <label for="noVisitAfterSickCheckbox">No family member or attendee will visit The
        Sajni Center if they have been sick in the past 24 hours,
        are feeling ill, have been exposed to a virus,
        or do not have the appropriate age required immunizations. </label>
      <input type="checkbox"
             v-model="parentsRemain"
             name="parentsRemainCheckbox"
             id="parentsRemainCheckbox" />
      <label for="parentsRemainCheckbox">All parents are to remain at
        The Sajni Center during programs.</label>
      <input type="checkbox"
             v-model="upToDateVaccination"
             name="upToDateVaccination"
             id="upToDateVaccination" />
      <label for="upToDateVaccination">My children are up to date on all vaccinations
        and I will provide a copy of my children’s immunization records prior to
        attending any programs. (Children who are being treated for cancer often
        have severely compromised immune systems, so we are required to collect
        this information for their safety. All medical information will be stored
        in a HIPPA-compliant manner.) </label>
      <p style="font-weight:bold">Photo/Video Release</p>
      <p>I
        <button style="margin-right: .75rem; margin-bottom: .5rem"
                class="form-btn-basic"
                v-on:click="photoVideoReleaseConsent = true"
                :class="{'selected-form-btn' : photoVideoReleaseConsent}">consent</button>
        <button class="form-btn-basic"
                v-on:click="photoVideoReleaseConsent = false"
                :class="{'selected-form-btn' : photoVideoReleaseConsent === false}">
          do not consent</button>
        and authorize the use
        and reproduction by Lucy’s Love Bus of any and all photographs and any
        other audio-visual materials taken of me for promotional material,
        educational activities, exhibitions or for any other use for the benefit
        of the organization. </p>
      <div>
        <button @click="signup" class="btn--tertiary"> Request </button> &nbsp;
        <router-link :to="{name: 'login'}" class="med-pad-left" tag="a">
          Already have an account? Log in here!
        </router-link>
      </div>
    </div>
    <ul class="error">
      <li v-for="(err, index) in inputError" :key="index"> {{err}} </li>
      <li v-if="this.serverError"> {{this.serverError}} </li>
    </ul>
  </div>
</template>

<script>

import { mapMutations } from 'vuex';
import authService from '../utils/service/authService';

export default {
  name: 'SignupPFForm',
  data() {
    return {
      parents:
        [
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
        ],
      children:
      [
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
      ],
      noVisitAfterSick: false,
      parentsRemain: false,
      upToDateVaccination: false,
      photoVideoReleaseConsent: undefined,
      parentGuardianName: '',
      parentGuardianInitials: '',
      dateOfSignature: '',
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
      this.parentName = '';
      this.phoneNumber = '';
      this.email = '';
      this.password = ['', ''];
      this.inputError = [];
      this.serverError = '';
    },
    addParent() {
      let tempId;
      if (this.parents.length > 0) {
        tempId = this.parents[this.parents.length - 1].id + 1;
      } else {
        tempId = 0;
      }
      this.parents.push({
        id: tempId,
        name: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        email: '',
        allergies: '',
      });
    },
    addChild() {
      let tempId;
      if (this.children.length > 0) {
        tempId = this.children[this.children.length - 1].id + 1;
      } else {
        tempId = 0;
      }
      this.children.push({
        id: tempId,
        name: '',
        dateOfBirth: '',
        pronouns: '',
        schoolyear: '',
        school: '',
        diagnosis: '',
        medications: '',
        notes: '',
      });
    },
    removeParent(id) {
      this.parents = this.parents.filter(parent => parent.id !== id);
      for (let i = 0; i < this.parents.length; i += 1) {
        this.parents[i].id = i;
      }
    },
    removeChild(id) {
      this.children = this.children.filter(child => child.id !== id);
      for (let i = 0; i < this.children.length; i += 1) {
        this.children[i].id = i;
      }
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
    async signup() {
      this.submitted = true;
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
    background-color: #fff1d4;
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

</style>
