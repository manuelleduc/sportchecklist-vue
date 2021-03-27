<template>
  <div id="app">
    <Todo/>
    <h2>Tâches</h2>
    <ul>
      <li>Lister des checklistes statiques</li>
      <li>Proposer au visiteur de cocher des éléments + stockage des cases cochées en localstorage</li>
      <li>Proposer au visiteur de cloner une checklist pour un évènement en particulier</li>
      <li>
        Proposer de filtrer/spécialiser une checklist en fonction de critères prédéfinies. Par exemple avec le choix
        hiver/été, si été est coché le gants courts seront proposés, tandis qu'en hiver les gants long seront présentés
        à la place.
      </li>
      <li>
        Proposer au visiteur de créer ses propres checklistes
      </li>
      <li>
        proposer au visiteur d'ajouter ses propres critères de filtrage
      </li>
    </ul>
    <counter/>
  </div>
</template>

<script lang="ts">

import {Vue, Component} from 'vue-property-decorator';
import Counter from "@/components/Counter.vue";
import Todo from "@/Todo.vue";

@Component({
  components: {
    Todo,
    Counter
  }
})
export default class App extends Vue {

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
