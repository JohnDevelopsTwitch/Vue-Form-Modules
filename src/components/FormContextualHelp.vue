<template>
  <div>
    <a href="#" v-on:click="toggleTooltip">Help</a>
    <div v-if="tooltipVisible">Help content goes here...</div>
  </div>
</template>

<script>
export default {
  name: 'FormContextualHelp',
  props: ['data'],
  data() {
    return {
      tooltipVisible: false
    }
  },
  methods: {
    toggleTooltip() {
      this.tooltipVisible = !this.tooltipVisible;
    }
  }
}
</script>

<style scoped>

</style>
