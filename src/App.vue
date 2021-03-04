<template>
  <div id="app">
    <div class="vue-component">
      <!-- this is normal vue component imported from './components/QuasarDropdown.vue' -->
      <h6>Normal vue component</h6>
      <p>Click on dropdown icon (menu displays and works as expected)</p>
      <quasar-dropdown></quasar-dropdown>
    </div>
    <div class="web-component">
    <h6>Web component from same vue component</h6>
      <p>Click on dropdown icon (menu is not displayed)</p>
      <!-- this web component is built using command from package.json
      build:quasar-dropdown-wc and added to public directory using same
      vue component './components/QuasarDropdown.vue' -->
      <quasar-dropdown-wc></quasar-dropdown-wc>
    </div>
  </div>
</template>

<script>
import QuasarDropdown from './components/QuasarDropdown.vue'

export default {
  name: 'App',

  components: {
    QuasarDropdown
  },

  data () {
    return {}
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  width: 800px;
  justify-content: space-around;
.vue-component {
  border: 3px solid green;
  padding: 1rem;
  height: 300px;
  margin-right: 1rem;
}
.web-component {
  border: 3px solid red;
  padding: 1rem;
  height: 300px
}
}
</style>
