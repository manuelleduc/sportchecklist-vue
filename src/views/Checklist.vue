<template>
  <div>
    <h2>{{ $t(item.type) }}</h2>
    <ul v-if="item.checklist && item.checklist.length !== 0">
      <li v-for="(checkItem, index) in item.checklist" :key="`CheckItem${index}`">
        <label>
          <input type="checkbox"/>
          {{ checkItem }}
        </label>
      </li>
    </ul>
    <p v-else>
      {{ $t('item.checklist.empty') }}
    </p>
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {Item} from "@/store";

@Component
export default class Checklist extends Vue {
  @Prop({required: true}) item!: Item
}
</script>