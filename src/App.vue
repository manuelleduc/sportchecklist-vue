<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/todo">Todo</router-link>
    </div>
    <locale-selector/>
    <router-view/>
  </div>
</template>

<script lang="ts">

import {Component, Vue} from 'vue-property-decorator';
import LocaleSelector from "@/components/LocaleSelector.vue";

@Component({
  components: {LocaleSelector}
})
export default class App extends Vue {

}
</script>

<style lang="scss"></style>
