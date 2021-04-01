<template>
  <div>
    <h2>{{ $t(item.type) }}</h2>
    <ul v-if="item.checklist && item.checklist.length !== 0">
      <li v-for="(checkItem, index) in item.checklist" :key="`CheckItem${index}`">
        <label>
          <input type="checkbox"/>
          {{ translate(checkItem) }}
        </label>
      </li>
    </ul>
    <p v-else>
      {{ $t('item.checklist.empty') }}
    </p>
  </div>
</template>
<script lang="ts">
import {Component, Mixins, Prop} from "vue-property-decorator";
import {Item} from "@/store";
import TranslationMixin from "@/i18n/translationMixin";

@Component
export default class Checklist extends Mixins(TranslationMixin) {
  @Prop({required: true}) item!: Item
}
</script>