<template>
  <div class="vue-component-wrapper">
    <label :class="errorClassName">
      <h5>{{field.label}}</h5>
      <input v-model.lazy="inputValue" 
            :disabled="field.disabled" 
            :name="field.name" 
            :placeholder="field.placeholder"
            :type="type"
            @blur="validate" />
      <button @click.prevent="revealPassword">Reveal Password</button>
    </label>
    <form-error :errors="errors" />
    <form-contextual-help />
  </div>
</template>

<script>
import vuelidateFieldValidator from '../utilities/vuelidate-field-validator'
import { passwordValidator } from '../utilities/vuelidate-validations'

import FormContextualHelp from './FormContextualHelp.vue'
import FormError from './FormError.vue'

export default {
  name: 'FormPasswordField',
  components: {
    FormError,
    FormContextualHelp,
  },
  props: ['field', 'validation'],
  data() {
    return {
      inputValue: "",
      type: "password",
      errors: []
    }
  },
  computed: {
    errorClassName: function() {
      return (this.errors.length > 0) ? 'form-field__error' : null
    }
  },
  watch: {
    inputValue: function() {
      this.$emit('input', this.inputValue)
    }
  },
  methods: {
    revealPassword() {
      return this.type = (this.type === 'password') ? 'text' : 'password'
    },
    validate() {
      this.errors = vuelidateFieldValidator(this.validation, this.field.errors)
    }
  },
  passwordValidator
}
</script>

<style scoped>

</style>
