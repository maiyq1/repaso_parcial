<script>
import HomeView from "@/components/home-view.component.vue";
import TechnogymToolbar from "@/components/technogym-toolbar.component.vue";

export default {
  name: 'App',
  components: {TechnogymToolbar, HomeView},
}
</script>

<template>
  <technogym-toolbar></technogym-toolbar>
  <home-view></home-view>
</template>

<style scoped>

</style>
