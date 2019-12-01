<template>
  <div id="app">
    <form-wrapper class="form-wrapper" :validation="$v.form">
      <form-text-field v-model="form.username.inputValue" :field="form.username.field" :validation="$v.form.username.inputValue" />
      <form-password-field v-model="form.password.inputValue" :field="form.password.field" :validation="$v.form.password.inputValue" />
      <form-checkbox-field v-model="form.remember.inputValue" :field="form.remember.field" />
      <form-submit-button label="Submit Form" :disabled="$v.form.$anyError || $v.form.$invalid" @submit="submitForm" />
    </form-wrapper>
  </div>
</template>

<script>
import vuelidateValidationsLoader from './utilities/vuelidate-validations-loader'
import payloadMaker from './utilities/payload-maker'

import FormWrapper from './components/FormWrapper.vue'
import FormTextField from './components/FormTextField.vue'
import FormPasswordField from './components/FormPasswordField.vue'
import FormCheckboxField from './components/FormCheckboxField.vue'
import FormSubmitButton from './components/FormSubmitButton.vue'

import { required } from 'vuelidate/lib/validators'
import { usernameValidator } from './utilities/vuelidate-validations'

export default {
  name: 'app',
  components: {
    FormTextField,
    FormPasswordField,
    FormCheckboxField,
    FormSubmitButton,
    FormWrapper,
  },
  data() {
    return {
      form: {
        username: {
          inputValue: "",
          field: {
            disabled: false, 
            label: "Enter your Username",
            name: "username",
            placeholder: "Username",
            errors: {
              required: 'This field is required',
              ...usernameValidator.errors
            }
          },
          validation: {
            required,
            ...usernameValidator.rules
          }
        },
        password: {
          inputValue: "",
          field: {
            disabled: false,
            label: "Enter your password",
            name: "password",
            placeholder: "Password",
            errors: {
              required: 'This field is required',
              ...FormPasswordField.passwordValidator.errors
            }
          },
          validation: {
            required,
            ...FormPasswordField.passwordValidator.rules
          }
        },
        remember: {
          inputValue: "",
          field: {
            disabled: false,
            label: "Remember",
            name: "remember",
          }
        }
      }
    }
  },
  validations() {
    return vuelidateValidationsLoader(this.form)
  },
  methods: {
    submitForm() {
      if (this.$v.form.$anyError) {
        return
      }
      const payload = payloadMaker(this.form)
      debugger
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.form-wrapper {
  border: 1px dotted #999;
  margin: 10px 0;
  padding: 10px;
}

.vue-component-wrapper {
  border: 1px dotted #999;
  padding: 10px;
  margin: 10px 0;
}

.form-field__error h5  {
  color: red;
}

.form-field__error input {
  color: red;
  border-color: red;
  background-color: rgb(255, 203, 203)
}

.form-errors__wrapper {
  list-style: none;
}

.form-errors__wrapper li {
  color: red;
  list-style: none;
}
</style>
