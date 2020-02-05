<template>
    <div class="footer">Memory: {{adaptiveData.memory}} GB | CPU: {{adaptiveData.cpu}} | Connection: {{adaptiveData.connection}} </div>
</template>

<script>
import getAdaptiveLoadingData from 'adaptive-loading-helper';

export default {
    data: function () {
        return {
            adaptiveData: getAdaptiveLoadingData()
        }
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