<template>
  <div class="home-page">
    <h1>Welcome {{user || 'friend'}} !</h1>
  </div>
</template>

<script>
export default {
  name: "home",
  props: ["user"]
};
</script>

<style>
</style>