<script>
import technogymtoolbarComponent from "@/components/technogymtoolbar-component.vue";

export default {
  name: "page-not-found",
  components: {technogymtoolbarComponent},
}
</script>

<template>
  <h1>404</h1>
  <pv-button @click="$router.push('/home')">Home</pv-button>
</template>

<style scoped>

</style>