<script>
import {TechnoApiService} from "@/services/techno-data";

export default {
  name: "home-view",
  data() {
    return {
      dataTread: [],
      avgVolts: null,
      avgWatts: null,
      avgHP: null
    };
  },
  mounted() {
    new TechnoApiService().getAllRecords().then((response) => {
      this.dataTread = response.data;
    });
  },
  methods: {
    calculateAvg() {
      let sumVolts = 0; let sumWatts = 0; let sumHP = 0; let countHPNotZero = 0;

      for (const tread of this.dataTread) {
        if (tread.hp !== 0) {
          sumVolts += tread.volts;
          sumWatts += tread.watts;
          sumHP += tread.hp;
          countHPNotZero++;
        }
      }
      this.avgVolts = countHPNotZero !== 0 ? (sumVolts / countHPNotZero).toFixed(2) : null;
      this.avgWatts = countHPNotZero !== 0 ? (sumWatts / countHPNotZero).toFixed(2) : null;
      this.avgHP = countHPNotZero !== 0 ? (sumHP / countHPNotZero).toFixed(2) : null;
    }
  }
};
</script>

<template>
  <pv-card>
    <template #title>Average Performance</template>
    <template #content>
      <p v-if="avgWatts !== null">Promedio de Watts: {{ avgWatts }}</p>
      <p v-if="avgVolts !== null">Promedio de Volts: {{ avgVolts }}</p>
      <p v-if="avgHP !== null">Promedio de Watts: {{ avgHP }}</p>
    </template>
  </pv-card>
  <pv-button @click="calculateAvg">Obtener promedios</pv-button>
</template>

<style scoped>

</style>