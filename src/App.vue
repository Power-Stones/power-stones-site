<template>
  <div id="app">
    <router-view path="$router.key"></router-view>
  </div>
</template>
<script>
import './css/global.css';

export default {
  name: 'App'
}
</script>
<style scoped>
.container {
  padding: 0;
  width: 100% !important;
  min-width: 100% !important;
  max-width: 100% !important;
}
</style>
