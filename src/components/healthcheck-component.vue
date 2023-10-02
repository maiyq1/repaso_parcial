<script>
import technogymtoolbarComponent from "@/components/technogymtoolbar-component.vue";
import {TechnoApiService} from "@/services/techno-data";
export default {
  name: "healthcheck",
  components: {technogymtoolbarComponent},
  data() {
    return {
      treadData: []
    }
  },
  mounted() {
    new TechnoApiService().getAllRecords().then((response) => {
      this.treadData = response.data;
    })
  }
}
</script>

<template>
  <pv-datatable :value="treadData">
    <pv-column header="Record Id" field="id"></pv-column>
    <pv-column header="Treadmill Id" field="treadmillId"></pv-column>
    <pv-column header="Volts" field="volts"></pv-column>
    <pv-column header="Watts" field="watts"></pv-column>
    <pv-column header="HP" field="hp"></pv-column>
  </pv-datatable>
</template>

<style scoped>

</style>