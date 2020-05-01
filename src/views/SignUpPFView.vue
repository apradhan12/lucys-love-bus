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
      <label class="checkbox-container">
        <input type="checkbox" checked="checked" v-model="noVisitAfterSick">
        <span class="checkmark"></span>
        No family member or attendee will visit The
        Sajni Center if they have been sick in the past 24 hours,
        are feeling ill, have been exposed to a virus,
        or do not have the appropriate age required immunizations.
      </label>
      <label class="checkbox-container">
        <input type="checkbox" checked="checked" v-model="parentsRemain">
        <span class="checkmark"></span>
        All parents are to remain at
        The Sajni Center during programs.
      </label>
      <label class="checkbox-container">
        <input type="checkbox" checked="checked" v-model="upToDateVaccination">
        <span class="checkmark"></span>
        My children are up to date on all vaccinations
        and I will provide a copy of my children’s immunization records prior to
        attending any programs. (Children who are being treated for cancer often
        have severely compromised immune systems, so we are required to collect
        this information for their safety. All medical information will be stored
        in a HIPPA-compliant manner.)
      </label>
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
      <div v-if="isValidForm === false" class="invalid_form--container">
        <ul>
          <li v-for="(err, index) in inputError" :key="index"> {{err}} </li>
          <li v-if="this.serverError"> {{this.serverError}} </li>
        </ul>
      </div>
    </div>
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
      isValidForm: undefined,
    };
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
      const validParents = this.validateParents();
      const validChildren = this.validateChildren();
      const validAgreements = this.validateAgreements();
      this.isValidForm = validParents && validChildren && validAgreements;
      return validParents && validChildren && validAgreements;
    },
    validateParents() {
      const missingMsg = (who, id, what) => `${who} ${id} is missing ${what}`;
      let validParents = true;
      this.parents.forEach((parent) => {
        if (!parent.name) {
          this.inputError.push(missingMsg('Parent', parent.id, 'a name'));
          validParents = false;
        }
        if (!parent.phoneNumber) {
          this.inputError.push(missingMsg('Parent', parent.id, 'a phone number'));
          validParents = false;
        }
        if (!parent.address) {
          this.inputError.push(missingMsg('Parent', parent.id, 'an address'));
          validParents = false;
        }
        if (!parent.city) {
          this.inputError.push(missingMsg('Parent', parent.id, 'a city'));
          validParents = false;
        }
        if (!parent.state) {
          this.inputError.push(missingMsg('Parent', parent.id, 'a state'));
          validParents = false;
        }
        if (!parent.zipCode) {
          this.inputError.push(missingMsg('Parent', parent.id, 'a zip code'));
          validParents = false;
        }
        if (!parent.email) {
          this.inputError.push('Invalid email');
          validParents = false;
        }
        return 1;
      });
      return validParents;
    },
    validateChildren() {
      const missingMsg = (who, id, what) => `${who} ${id} is missing ${what}`;
      let validChildren = true;
      this.children.forEach((child) => {
        if (!child.name) {
          this.inputError.push(missingMsg('Child', child.id, 'a name'));
          validChildren = false;
        }
        if (!child.dateOfBirth) {
          this.inputError.push(missingMsg('Child', child.id, 'a date of birth'));
          validChildren = false;
        }
        if (!child.pronouns) {
          this.inputError.push(missingMsg('Child', child.id, 'preferred pronouns'));
          validChildren = false;
        }
        if (!child.schoolyear) {
          this.inputError.push(missingMsg('Child', child.id, 'a school year (grade)'));
          validChildren = false;
        }
        if (!child.school) {
          this.inputError.push(missingMsg('Child', child.id, 'a school'));
          validChildren = false;
        }
        return 1;
      });
      return validChildren;
    },
    validateAgreements() {
      let isValid = true;
      if (!this.noVisitAfterSick) {
        this.inputError.push('Missing agreement to sick policy');
        isValid = false;
      }
      if (!this.parentsRemain) {
        this.inputError.push('Missing agreement to parent policy');
        isValid = false;
      }
      if (!this.upToDateVaccination) {
        this.inputError.push('Missing agreement to vaccination policy');
        isValid = false;
      }
      if (!this.photoVideoReleaseConsent) {
        this.inputError.push('Must consent to photo/video release');
        isValid = false;
      }
      return isValid;
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
    left: 0;
    top: 10rem;
    text-align: left;
    background: rgba(255, 0, 0, 0.4);
    border-radius: 5px;
    padding: 1rem;
  }

</style>
