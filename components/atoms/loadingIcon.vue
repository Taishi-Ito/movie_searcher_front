<template>
  <div class="text-center" v-if="isLoading">
    <v-overlay></v-overlay>
    <v-progress-circular
      :size="70"
      :width="7"
      color="#42A5F5"
      indeterminate
      class="circular"
    ></v-progress-circular>
  </div>
</template>

<script>
  export default {
    computed: {
      isLoading() {
        return this.$store.getters["store/isLoading"]
      }
    },
  }
</script>

<style scoped>
.circular {
  position: fixed;
  top: 50%;
  left: 50%;
}
</style>
