<template>
  <button @submit.prevent="submit">{{label}}</button>
</template>

<script>
export default {
  name: 'FormSubmitButton',
  props: ['label', 'v'],
  methods: {
    submit() {
      this.$emit('submit')
    }  
  },
}
</script>

<style scoped>

</style>
