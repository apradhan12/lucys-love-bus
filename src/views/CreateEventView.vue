<template>
  <form @submit.prevent="onSubmit">
    <div class="container">
      <ValidationProvider rules="required" v-slot="{ errors }" >
        <input v-model="event.title" type="text" placeholder="Event Name" class="event-name" />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
      <div class="form">
        <div class="form-element">
          <ValidationProvider rules="required" v-slot="{ errors }" class="form-element">
            <input v-model="event.details.location" type="text" placeholder="Location" />
            <span>{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider rules="required" v-slot="{ errors }" class="form-element">
            <input v-model="event.spotsAvailable" type="number" placeholder="Spots Availible" />
            <span>{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div class="form-element">
          <ValidationProvider rules="required" v-slot="{ errors }">
            <label>
              Start time:
              <input v-model="event.details.start" type="datetime-local" />
            </label>
            <span>{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider rules="required" v-slot="{ errors }">
            <label>
              End Time:
              <input v-model="event.details.end" type="datetime-local" />
            </label>
            <span>{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <ValidationProvider rules="required" v-slot="{ errors }" class="form-element">
          <textarea
            v-model="event.details.description"
            type="text"
            placeholder="Description"
            rows="5"/>
          <span>{{ errors[0] }}</span>
        </ValidationProvider>

        <div class="form-element img-upload">
          <label>Event Image (Optional):</label>
          <input
            id="input-img-upload"
            name="event image"
            type="file"
            v-on:change="updateEventImage"
            accept="image/*"
          />
          <div v-if="imageUploaded === 1">Loading image...</div>
          <div v-else-if="imageUploaded === 2">Loading complete!</div>
          <div v-else-if="imageUploaded === 3">An error occurred, please try again!</div>
          <div v-else-if="imageUploaded === 4">Please select an image smaller than 8 Mb.</div>
        </div>
      </div>
    </div>

    <button class="button" type="submit">Create</button>
  </form>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import { mapGetters } from 'vuex';
import moment from 'moment';
import api from '../api/api';

export default {
  name: 'CreateEvent',
  components: {
    ValidationProvider,
  },
  props: {
    eventId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      /*
        "title": STRING,
        "spotsAvailable": INT,
        "thumbnail": URL,
        "details": {
            "description": STRING,
            "location": STRING,
            "start": TIMESTAMP,
            "end": TIMESTAMP
        }
      */
      imageUploaded: 0,
      event: {
        details: {},
      },
      error: '',
    };
  },
  computed: {
    ...mapGetters('events', {
      getEventById: 'getEventById',
    }),
    isEditing() {
      // eventId is a string because its a prop from the url
      return parseInt(this.eventId, 10) > -1;
    },
  },
  watch: {
    eventId: {
      immediate: true,
      async handler() {
        if (this.isEditing) {
          // eventId is a string because its a prop from the url
          const eventCopy = await api.getEvent(parseInt(this.eventId, 10));
          eventCopy.details.start = moment(eventCopy.details.start).format(
            'YYYY-MM-DDTHH:mm',
          );
          eventCopy.details.end = moment(eventCopy.details.end).format(
            'YYYY-MM-DDTHH:mm',
          );

          this.event = { ...eventCopy };
          delete this.event.capacity;
        }
      },
    },
  },
  methods: {
    /**
     * Encode the given file in base64 format.
     *
     * @param file the file to encode.
     * @returns {Promise<unknown>} returns the base64 encoding of the file on a
     *  successful encoding, otherwise returns the error.
     */
    convertImage(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    },
    /**
     * Called the user selects an image for the event thumbnail.
     * Encodes the image as a base64 String and saves
     * the encoded string to this.event.thumbnail.
     *
     * @param event the change event for the file input.
     */
    updateEventImage(event) {
      const { files } = event.target;
      if (files.length > 0) {
        this.imageUploaded = 1; // Indicates the selected image is loading
        const file = files[0];
        if (file.size > 8388608) {
          this.imageUploaded = 4; // Indicates image is too large
          return;
        }

        this.convertImage(files[0])
          .then((result) => {
            this.imageUploaded = 2; // Indicates the selected image was loaded successfully
            this.event = {
              ...this.event,
              thumbnail: result.toString(),
            };
          })
          .catch(() => {
            this.imageUploaded = 3; // Indicates the selected image failed to load
          });
      }
    },
    /**
     * Validates and sends the event (included the encoded image) to the web server,
     * where the web server will validate and upload the image to S3 and return the URL.
     */
    onSubmit() {
      console.log('onSubmit');
      this.$validator
        .validateAll()
        .then(async (result) => {
          if (result) {
            console.log('onSubmit');
            try {
              let resp;

              this.event.details.start = moment(
                this.event.details.start,
              ).format('X');
              this.event.details.end = moment(this.event.details.end).format(
                'X',
              );

              if (this.event.thumbnail === null) {
                delete this.event.thumbnail;
              }

              if (!this.isEditing) {
                resp = await api.createEvent(this.event);
              } else {
                resp = await api.editEvent(this.event);
              }

              if (resp.status && resp.status === 200) {
                const { id } = resp.data;
                this.event = {};
                this.imageUploaded = 0; // Reset image load status
                document.getElementById('input-img-upload').value = null; // Deselect image
                this.$router.push(`/event/${id}`);
              } // else display error
            } catch (err) {
              this.error = err;
            }
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-alert
          alert(error);
        });
    },
  },
};
</script>

<style scoped>
@import "../../assets/color-constants.less";
.container {
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.event-name {
  padding: 1rem;
  margin-right: 1em;
  font-size: 30pt;
  width: 20em;
  font-family: "Quicksand";
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
  font-family: "Montserrat";
}

label {
  color: black;
  display: inline-block;
}
input[type="text"],
input[type="datetime-local"],
input[type="number"],
textarea {
  margin: 0.8rem;
  padding: 0.8rem;
  border: 0.1rem solid #ccc;
  box-sizing: border-box;
  font-family: "Montserrat";
  font-size: 12pt;
}
textarea {
  width: 100%;
}

input[type="file"] {
  margin: 0 0.8rem;
  font-family: "Montserrat";
  font-size: 12pt;
}

.img-upload {
  margin: 0.8rem;
  font-family: "Montserrat";
  font-size: 12pt;
}

.button {
  margin: 1rem;
  font-family: "Raleway";
  font-size: 18pt;
  border-radius: 6pt;
  background-color: black;
  color: #eeeeee;
}

span {
  margin: 1rem;
  font-family: "Montserrat";
  color: red;
  font-weight: bold;
}
</style>
