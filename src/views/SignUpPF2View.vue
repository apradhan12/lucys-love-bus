<template>
  <div>
    <div class="center">
      <h2> Registering as a Participating Family! </h2>
      <p class="text-wrap">
        Tell us more about you, your children, and/or
        any other members you are registering under this account.
      </p>
    </div>
    <div class="auth-container">
      <h3>More About You (Account Owner)</h3>
      <div class="h-fields">
        <input
          v-model="mainContact.firstName"
          class="input-primary half-input"
          type="text"
          placeholder="First Name">
        <input
          v-model="mainContact.lastName"
          class="input-primary half-input"
          type="text"
          placeholder="Last Name">
      </div>
      <div class="pronoun-wrapper">
        <h4>Preferred Pronouns</h4>
        <button v-on:click="mainContact.pronouns = 'HE/HIM'"
                :class="{'btn--secondary' : mainContact.pronouns !== 'HE/HIM',
                         'btn--secondary-selected' : mainContact.pronouns === 'HE/HIM'}">
          He/Him</button>
        <button v-on:click="mainContact.pronouns = 'SHE/HER'"
                :class="{'btn--secondary' : mainContact.pronouns !== 'SHE/HER',
                         'btn--secondary-selected' : mainContact.pronouns === 'SHE/HER'}">
          She/Her</button>
        <button v-on:click="mainContact.pronouns = 'THEY/THEM'"
                :class="{'btn--secondary' : mainContact.pronouns !== 'THEY/THEM',
                         'btn--secondary-selected' : mainContact.pronouns === 'THEY/THEM'}">
          They/Them</button>
      </div>
      <input
        class="input-primary"
        type="text"
        v-bind:placeholder="this.$route.params.email"
        disabled="True">
      <div class="h-fields">
        <input
          v-model="mainContact.phoneNumber"
          class="input-primary half-input"
          type="text"
          placeholder="Phone Number">
        <input
          v-model="mainContact.dateOfBirth"
          class="input-primary half-input"
          type="text"
          placeholder="Date of Birth    DD/MM/YYYY">
      </div>
      <textarea v-model="mainContact.allergies" type="text"
                class="input-primary" placeholder="Allergies"
                style="min-width: 100%; max-width: 100%; box-sizing: border-box;"/>
      <input
        v-model="mainContact.diagnosis"
        class="input-primary"
        type="text"
        placeholder="Diagnosis (if applicable)">
      <input
        v-model="mainContact.medication"
        class="input-primary"
        type="text"
        placeholder="Medication (if applicable)">
      <textarea v-model="mainContact.notes" type="text"
                class="input-primary" placeholder="Other Notes"
                style="min-width: 100%; max-width: 100%; box-sizing: border-box;"/>

      <div class="contacts">
        <h3>Additional Guardians or Adults (18+ yrs)</h3>
        <div v-for="contact in additionalContacts" :key="contact.id">
          <h4>
            Guardian/Parent {{contact.id + 1}}
            <button class="remove-btn"
                    v-if="contact.id > 0"
                    v-on:click="removeParent(contact.id)">
              Remove</button>
          </h4>
          <div class="h-fields">
            <input
              v-model="contact.firstName"
              class="input-primary half-input"
              type="text"
              placeholder="First Name">
            <input
              v-model="contact.lastName"
              class="input-primary half-input"
              type="text"
              placeholder="Last Name">
          </div>
          <div class="h-fields">
            <input v-model="contact.email" type="text"
              class="input-primary"
              placeholder="Email Address"
              style="width: 60%">
            <label class="checkbox-container input-primary"
                    style="margin-bottom: .5rem;
                    display: flex; border: none">
              <input type="checkbox" checked="checked" v-model="contact.shouldSendEmails">
              <span class="checkmark" style="position: relative; height: 2rem; width: 2rem;"></span>
              Receive News & Updates?
            </label>
          </div>
          <div class="h-fields">
            <input v-model="contact.phoneNumber" type="text"
               class="input-primary half-input"
               placeholder="PhoneNumber">
            <input v-model="contact.dateOfBirth" type="text"
                   class="input-primary half-input"
                   placeholder="Date of Birth    DD/MM/YYYY">
          </div>
          <textarea v-model="contact.allergies" type="text"
                    class="input-primary" placeholder="Allergies"
                    style="min-width: 100%; max-width: 100%; box-sizing: border-box"/>
          <input
            v-model="contact.diagnosis"
            class="input-primary"
            type="text"
            style="width: 100%; box-sizing: border-box"
            placeholder="Diagnosis (if applicable)">
          <input
            v-model="contact.medication"
            class="input-primary"
            type="text"
            style="width: 100%; box-sizing: border-box"
            placeholder="Medication (if applicable)">
          <textarea v-model="contact.notes" type="text"
                    class="input-primary" placeholder="Other Notes"
                    style="min-width: 100%; max-width: 100%; box-sizing: border-box;"/>
        </div>
        <button class="add-btn" v-on:click="addContact">+ Add Guardian or Adult</button>
      </div>

      <div class="children">
        <h3>Children</h3>
        <div v-for="child in children" :key="child.id">
          <h4>
            Child {{child.id + 1}}
            <button class="remove-btn"
                    v-if="child.id > 0"
                    v-on:click="removeChild(child.id)">
              Remove</button>
          </h4>
          <div class="h-fields">
            <input
              v-model="child.firstName"
              class="input-primary half-input"
              type="text"
              placeholder="First Name">
            <input
              v-model="child.lastName"
              class="input-primary half-input"
              type="text"
              placeholder="Last Name">
          </div>
          <div class="pronoun-wrapper">
            <h4>Preferred Pronouns</h4>
            <button v-on:click="child.pronouns = 'HE/HIM'"
                    :class="{'btn--secondary' : child.pronouns !== 'HE/HIM',
                         'btn--secondary-selected' : child.pronouns === 'HE/HIM'}">
              He/Him</button>
            <button v-on:click="child.pronouns = 'SHE/HER'"
                    :class="{'btn--secondary' : child.pronouns !== 'SHE/HER',
                         'btn--secondary-selected' : child.pronouns === 'SHE/HER'}">
              She/Her</button>
            <button v-on:click="child.pronouns = 'THEY/THEM'"
                    :class="{'btn--secondary' : child.pronouns !== 'THEY/THEM',
                         'btn--secondary-selected' : child.pronouns === 'THEY/THEM'}">
              They/Them</button>
          </div>
          <input
            v-model="child.dateOfBirth"
            class="input-primary half-input"
            type="text"
            placeholder="Date of Birth  DD/MM/YYYY">
          <div class="h-fields">
            <input v-model="child.school" type="text"
                   class="input-primary half-input" placeholder="School">
            <input v-model="child.schoolYear" type="text"
                   class="input-primary half-input" placeholder="School Year">
          </div>
          <textarea v-model="child.allergies" type="text"
                    class="input-primary" placeholder="Allergies"
                    style="min-width: 100%; max-width: 100%; box-sizing: border-box;"/>
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
                v-on:click="photoVideoReleaseConsent = true"
                :class="{'btn--secondary-selected' : photoVideoReleaseConsent,
                         'btn--secondary' : photoVideoReleaseConsent !== true}">consent</button>
        <button v-on:click="photoVideoReleaseConsent = false"
                :class="{'btn--secondary-selected' : photoVideoReleaseConsent === false,
                         'btn--secondary' : photoVideoReleaseConsent !== false}">
          do not consent</button>
        and authorize the use
        and reproduction by Lucy’s Love Bus of any and all photographs and any
        other audio-visual materials taken of me for promotional material,
        educational activities, exhibitions or for any other use for the benefit
        of the organization. </p>
      <div>
        <button @click="signup"
                class="btn--secondary-selected">Request</button>
        <router-link :to="{name: 'login'}" class="med-pad-left" tag="a">
          Already have an account? Log in here!
        </router-link>
      </div>
      <div v-if="isValidForm === false" class="invalid_form--container">
        <h4>There were one or more issues with the form:</h4>
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
      mainContact: {
        firstName: '',
        lastName: '',
        pronouns: '',
        email: '',
        phoneNumber: '',
        dateOfBirth: '',
        location: {
          address: '',
          city: '',
          state: '',
          zipCode: '',
        },
        allergies: '',
        diagnosis: '',
        medications: '',
        notes: '',
      },
      additionalContacts: [
        {
          id: 0,
          firstName: '',
          lastName: '',
          email: '',
          shouldSendEmails: false,
          phoneNumber: '',
          dateOfBirth: '',
          allergies: '',
          diagnosis: '',
          medication: '',
          notes: '',
        },
      ],
      children: [
        {
          id: 0,
          firstName: '',
          lastName: '',
          pronouns: '',
          dateOfBirth: '',
          school: '',
          schoolYear: '',
          allergies: '',
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
    addContact() {
      let tempId;
      if (this.additionalContacts.length > 0) {
        tempId = this.additionalContacts[this.additionalContacts.length - 1].id + 1;
      } else {
        tempId = 0;
      }
      this.additionalContacts.push({
        id: tempId,
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        shouldSendEmails: false,
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
      this.additionalContacts = this.additionalContacts.filter(parent => parent.id !== id);
      for (let i = 0; i < this.additionalContacts.length; i += 1) {
        this.additionalContacts[i].id = i;
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
          this.inputError.push(missingMsg('Parent', parent.id + 1, 'a name'));
          validParents = false;
        }
        if (!parent.phoneNumber) {
          this.inputError.push(missingMsg('Parent', parent.id + 1, 'a phone number'));
          validParents = false;
        }
        if (!parent.address) {
          this.inputError.push(missingMsg('Parent', parent.id + 1, 'an address'));
          validParents = false;
        }
        if (!parent.city) {
          this.inputError.push(missingMsg('Parent', parent.id + 1, 'a city'));
          validParents = false;
        }
        if (!parent.state) {
          this.inputError.push(missingMsg('Parent', parent.id + 1, 'a state'));
          validParents = false;
        }
        if (!parent.zipCode) {
          this.inputError.push(missingMsg('Parent', parent.id + 1, 'a zip code'));
          validParents = false;
        }
        if (!parent.email) {
          this.inputError.push(`Parent ${parent.id + 1}'s email is not valid`);
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
          this.inputError.push(missingMsg('Child', child.id + 1, 'a name'));
          validChildren = false;
        }
        if (!child.dateOfBirth) {
          this.inputError.push(missingMsg('Child', child.id + 1, 'a date of birth'));
          validChildren = false;
        }
        if (!child.pronouns) {
          this.inputError.push(missingMsg('Child', child.id + 1, 'preferred pronouns'));
          validChildren = false;
        }
        if (!child.schoolyear) {
          this.inputError.push(missingMsg('Child', child.id + 1, 'a school year (grade)'));
          validChildren = false;
        }
        if (!child.school) {
          this.inputError.push(missingMsg('Child', child.id + 1, 'a school'));
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
