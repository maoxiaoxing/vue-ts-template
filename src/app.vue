<template>
  <div id="App">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">

  import { Vue, Component } from 'vue-property-decorator'

  export default Vue.extend({
    components: {
    }
  })
</script>

<style lang="scss" src="./style/index.scss"></style>