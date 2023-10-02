<script>
export default {
  name: "technogymToolbar"
}
</script>

<template>
  <pv-toolbar class="my-toolbar">
    <template #start>
      <h1>TechnoGym</h1>
    </template>
    <template #end>
      <router-link to="/home">Home</router-link>
      <router-link to="/analytics/health-checks">Health Checks</router-link>
    </template>
  </pv-toolbar>
</template>

<style scoped>

</style>