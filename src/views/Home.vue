<template>
  <div class="home">
    <div v-for="item in items" :key="item.type">
      <h2>{{ $t(item.type) }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {mapState} from "vuex";

@Component({
  computed: {
    ...mapState(['items'])
  }
})
export default class Home extends Vue {
}
</script>
