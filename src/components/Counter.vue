<template>
  <div>{{ count }} / {{ doneTodoCount }}
    <button @click="increment">Inc</button>
  </div>
</template>

<script lang="ts">

import {Vue, Component} from "vue-property-decorator";
import {mapState, mapGetters, mapMutations, mapActions} from "vuex";

@Component({
  computed: {
    ...mapState(['count']),
    ...mapGetters(['doneTodoCount'])
  },
  methods: {
    ...mapActions(['increment'])
  }
})
export default class Counter extends Vue {
}
</script>

<style scoped>

</style>