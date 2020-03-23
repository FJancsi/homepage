<template>
    <div class="footer" v-if="adaptiveData">
        <span v-if="adaptiveData.memory">Memory: {{adaptiveData.memory}} </span>
        <span v-if="adaptiveData.cpu">CPU: {{adaptiveData.cpu}} </span>
        <span v-if="adaptiveData.connection">Connection: {{adaptiveData.connection}}</span>
    </div>
</template>

<script>
import getAdaptiveLoadingData from "adaptive-loading-helper";

export default {
  data: function() {
    return {
        adaptiveData: getAdaptiveLoadingData()
    };
  }
};
</script>

<style>
.footer {
    position: absolute;
    bottom: 0;
    margin: 10px;
    font-size: 12px;
}
</style>