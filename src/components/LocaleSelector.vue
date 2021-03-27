<template>
  <div>
    <select v-model="$i18n.locale" @change="updateLang">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";
import {loadLanguageAsync} from "@/i18n";

@Component
export default class LocaleSelector extends Vue {
  private langs: Array<string> = ['en', 'fr']

  public updateLang(): void {
    loadLanguageAsync(this.$i18n.locale)
  }
}
</script>

<style scoped>

</style>