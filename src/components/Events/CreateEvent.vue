<template>
    <form @submit.prevent="onSubmit">
    <div class="container">
        <input v-validate="'required|max:80'" v-model="name"
        name="name" class="event-name" placeholder="Name of Event">
        <span class="form-errors" v-show="errors.has('name')">{{ errors.first('name') }}</span>
        <div class="form">
            <div class="form-element">
                <input v-validate="'required'"
                v-model="date" name="date" type="date" size="50">
                <input v-validate="'required|max:80'" v-model="location"
                name="location" type="text" size="60" placeholder="Location">
            </div>
            <div class="form-errors">
                <span v-show="errors.has('date')">{{ errors.first('date') }}</span>
                <span v-show="errors.has('location')">{{ errors.first('location') }}</span>
            </div>
            <div class="form-element">
                <input v-validate="'required'" v-model="startTime"
                name="start time" type="time" step="300" size="30">
                <p>to</p>
                <input v-validate="'required'" v-model="endTime"
                name="end time" type="time" step="300" size="30">
            </div>
            <div class="form-errors">
                <span v-show="errors.has('start time')">{{ errors.first('start time') }}</span>
                <span v-show="errors.has('end time')">{{ errors.first('end time') }}</span>
            </div>
            <div class="form-element">
                <textarea v-validate="'required'" v-model="description" rows="10" cols="100"
                name="description" placeholder="Description"></textarea>
            </div>
            <div class="form-errors">
                <span v-show="errors.has('description')">{{ errors.first('description') }}</span>
            </div>
            <div class="form-element">
                <textarea v-validate="'required'" v-model="whatToBring" rows="7" cols="100"
                name="what to bring" placeholder="What to Bring"></textarea>
            </div>
            <div class="form-errors">
                <span v-show="errors.has('what to bring')">
                    {{ errors.first('what to bring') }}
                </span>
            </div>
        </div>
        <div class="buttons">
            <input type="submit" class="button" value="Create">
        </div>
    </div>
    </form>
</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
export default {
  name: 'NewEvent',
  data() {
    return {
      event: {
        name: '',
        date: '',
        startTime: '',
        endTime: '',
        description: '',
        whatToBring: '',
      },
    };
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // add http post request
          // eslint-disable-next-line
          alert('create event successful');
          this.$router.push('/events');
        }
      });
    },
  },
};
</script>

<style scoped>
@import '../../../assets/color-constants.less';
.container {
    margin: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.event-name {
    margin: 1rem;
    padding: 1rem;
    font-size: 30pt;
    font-family: 'Quicksand';
}

.form {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    border: 1px solid #ccc;
    margin: 1rem;
}

.form-element {
    display: flex;
    flex-direction: row;
    margin-top: 0.4rem;
    margin-right: 1rem;
    font-family: 'Montserrat';
}

input[type=text], input[type=date], input[type=time], textarea {
    margin: 0.8rem;
    padding: 0.8rem;
    border: 0.1rem solid #ccc;
    box-sizing: border-box;
    font-family: 'Montserrat';
    font-size: 12pt;
}

.button {
    margin: 1rem;
    font-family: 'Raleway';
    font-size: 18pt;
    border-radius: 6pt;
    background-color: black;
    color: #eeeeee;
}

span {
    margin: 1rem;
    font-family: 'Montserrat';
    color: red;
    font-weight: bold;

}

</style>
