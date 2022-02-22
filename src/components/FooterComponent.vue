<template>
    <div class="footer" v-if="adaptiveData">
        <span v-if="adaptiveData.memory">Memory: {{adaptiveData.memory}} GiB | </span>
        <span v-if="adaptiveData.cpu">CPU: {{adaptiveData.cpu}} | </span>
        <span v-if="adaptiveData.network.connection">&#128246; {{adaptiveData.network.connection}} | </span>
        <span v-if="adaptiveData.isMobile">&#128241; | &nbsp;</span><span v-else>&#128187; | &nbsp;</span>
        <span v-if="adaptiveData.battery.level">{{adaptiveData.battery.level * 100}} % </span>
        <span v-if="adaptiveData.battery.charging">	&#128267;</span>
    </div>
</template>

<script>
import getAdaptiveLoadingData from "adaptive-loading-helper";
export default {
  data: function () {
    return {
      adaptiveData: null
    }
  },
  mounted: function() {
    this.$nextTick(async function() {
      try {
        this.adaptiveData = await getAdaptiveLoadingData();
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(`Catch ${e}`);
      }
    });
  }
}
</script>

<style>
.footer {
    position: absolute;
    bottom: 0;
    margin: 10px;
    font-size: 12px;
}
</style>