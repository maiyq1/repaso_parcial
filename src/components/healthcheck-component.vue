<script>
import technogymtoolbarComponent from "@/components/technogymtoolbar-component.vue";
import {TechnoApiService} from "@/services/techno-data";
export default {
  name: "healthcheck",
  components: {technogymtoolbarComponent},
  data() {
    return {
      recordData: [],
      centersData: [],
    }
  },
  mounted() {
    new TechnoApiService().getAllRecords().then((response) => {
      this.recordData = response.data;
    })
    new TechnoApiService().getAllCenters().then((response) => {
      this.centersData = response.data;
    })
  }
}
</script>

<template>
  <pv-datatable :value="recordData" paginator :rows="3" :rows-per-page-options="[3,6,9,13]" sort-mode="multiple">
    <pv-column header="Record Id" field="id" sortable></pv-column>
    <pv-column header="Treadmill Id" field="treadmillId" sortable></pv-column>
    <pv-column header="Volts" field="volts" sortable></pv-column>
    <pv-column header="Watts" field="watts" sortable></pv-column>
    <pv-column header="HP" field="hp" sortable></pv-column>
  </pv-datatable>
</template>

<style scoped>

</style>