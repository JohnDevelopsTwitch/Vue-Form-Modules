<template>
  <ul v-show="errors" class="form-errors__wrapper">
    <li v-for="error in errors" :key="error.id" :id="error.id">{{error.text}}</li>
  </ul>
</template>

<script>
export default {
  name: 'FormError',
  props: ['errors']
}
</script>

<style scoped>

</style>
