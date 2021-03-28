<template>
  <div class="home">
    <div v-for="item in items" :key="item.type">
      <Checklist :item="item"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {mapState} from "vuex";
import Checklist from "@/views/Checklist.vue";

@Component({
  components: {Checklist},
  computed: {
    ...mapState(['items'])
  }
})
export default class Home extends Vue {
}
</script>
