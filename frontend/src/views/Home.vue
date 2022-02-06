<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <Sidebar/>
</template>

<script>

import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'Home',
  components: {
    Sidebar
  }
}
</script>

<style lang="scss" scoped>

@import "./../assets/styles.scss";

</style>
