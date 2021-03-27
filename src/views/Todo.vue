<template>
  <div>
    <blockquote>
      Le code actuel est là pour tester Vuex (https://vuex.vuejs.org/guide/modules.html#namespacing) /Typescript
      (https://blog.logrocket.com/how-to-write-a-vue-js-app-completely-in-typescript/).
      Le but final de ce projet est de proposer une application facilement utilisable de création de checklistes en
      anticipation d'activitées sportives où la logistique est importante, je pense en premier au trail et au vélo
      longue distance.
    </blockquote>
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
  </div>
</template>
<script lang="ts">
export default {
  name: 'Todo'
}
</script>
