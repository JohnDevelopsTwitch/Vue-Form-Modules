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
    </label>
    <form-error :errors="errors" />
    <form-contextual-help />
  </div>
</template>

<script>
import vuelidateFieldValidator from '../utilities/vuelidate-field-validator'

import FormContextualHelp from './FormContextualHelp.vue'
import FormError from './FormError.vue'

export default {
  name: 'FormTextField',
  components: {
    FormError,
    FormContextualHelp,
  },
  props: ['field', 'validation'],
  data() {
    return {
      inputValue: "",
      type: "text",
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
    validate() {
      this.errors = vuelidateFieldValidator(this.validation, this.field.errors)
    }
  }
}
</script>

<style scoped>

</style>
