<script>
import HomeView from "@/components/home-component.vue";
import TechnogymToolbar from "@/components/technogymtoolbar-component.vue";
import HealthcheckView from "@/components/healthcheck-component.vue";

export default {
  name: 'App',
  components: {HealthcheckView, TechnogymToolbar, HomeView},
}
</script>

<template>
  <main>
    <router-view></router-view>
  </main>

</template>

<style scoped>

</style>
