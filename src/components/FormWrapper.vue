<template>
  <form novalidate>
    <form-error :errors="formErrors" />
    <slot />
  </form>
</template>

<script>
import FormError from './FormError.vue'

export default {
  name: 'FormWrapper',
  props: ['validation'],
  components: {
    FormError
  },
  computed: {
    formErrors: function() {
      return this.hasErrors ? [{ id: '0', text: 'Please correct the errors below' }] : []
    },
    hasErrors: function() {
      return (Object.keys(this.validation.$model).filter((field) => {
        return this.validation[field].$error
      }).length > 0)
    },
  },
}
</script>

<style scoped>

</style>
