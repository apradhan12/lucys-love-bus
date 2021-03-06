<template>
  <div class="background">
    <div class="auth-container">
      <div class="form-title">Reset your password</div>
      <div class="form-subheader">Enter and confirm your new password</div>
      <div class="input-box">
        <input
            v-model="password[0]"
            class="input-primary"
            type="password"
            placeholder="New Password"
        />
        <input
            v-model="password[1]"
            class="input-primary"
            type="password"
            placeholder="Confirm Password"
        />
        <div v-if="error" class="error-message">{{ errorMessage }}</div>
      </div>
      <button @click="submit" class="submit-btn btn--tertiary">Reset</button>
    </div>
  </div>
</template>

<script>
import authApi from '../api/authApi';

export default {
  name: 'ForgotPasswordReset',
  data() {
    return {
      password: ['', ''],
      error: false,
      errorMessage: '',
    };
  },
  computed: {
    secret_key() {
      return this.$route.params.secret_key;
    },
  },
  methods: {
    async submit() {
      this.submitted = true;
      if (this.validateInput()) {
        const body = {
          secretKey: this.secret_key,
          newPassword: this.password[0],
        };
        try {
          await authApi.doPasswordReset(body);
          this.$router.push({
            name: 'forgot-password-confirmation',
            params: {
              request: false,
            },
          });
          this.resetInput();
        } catch (err) {
          this.error = true;
          if (err.response.status === 401) {
            this.errorMessage = 'This url looks like it\'s invalid, please return to login.';
          } else {
            this.errorMessage = err.response.data;
          }
        }
      }
    },
    validateInput() {
      if (this.password[0] !== this.password[1]) {
        this.error = true;
        this.errorMessage = 'Your passwords don\'t match!';
      } else if (this.password[0].length < 8) {
        this.error = true;
        this.errorMessage = 'Your password must be at least 8 characters';
      } else {
        this.error = false;
        this.errorMessage = '';
      }
      return !this.error;
    },
    resetInput() {
      this.password = ['', ''];
    },
  },
};
</script>

<style scoped>
  .background {
    position: absolute;
    left: 0;
    right: 0;
    background-color: #C4C4C4;
    padding: 3em 0;
  }
  .auth-container {
    text-align: left;
  }

  .form-title {
    font-weight: bold;
    font-size: 1.3rem;
    margin-bottom: 6px;
  }
  .form-subheader {
    color: #979494;
    margin-bottom: 24px;
  }

  .input-box {
    width: 100%;
    margin-bottom: 22px;
  }
  .input-box > input {
    margin-bottom: 0;
    width: 100%;
  }
  .input-box > .error-message {
    color: red;
    font-size: 0.8rem;
  }

  .submit-btn {
    padding: 5px 0;
    border-radius: 6px;
    max-width: 30%;
  }
</style>
