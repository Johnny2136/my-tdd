<template>
    <div style="width 500px; max-width: 90vw;">
      <q-list-header class="q-display-3">My ToDo List:</q-list-header> 
      <q-list highlight inset-separator>
        <q-item>
          <q-checkbox v-model="check1" color="secondary" />
          <q-item-main label="Brunch this weekend" label-lines="1" />
          <q-item-side right stamp="delete" />
        </q-item>
        <q-item>
          <q-checkbox v-model="check2" color="secondary" />
          <q-item-main label="learn JEST" label-lines="1" />
          <q-item-side right stamp="delete" />
        </q-item>
        <q-item>
          <q-checkbox v-model="check3" color="secondary" />
          <q-item-main label="Learn Quasar" label-lines="1" />
          <q-item-side right stamp="delete" />
        </q-item>
      </q-list> 

    </div>
</template>

<style>

</style>

<script>
export default {
  name: "Home",
  data () {
    return {
      check1: true,
      check2: false,
      check3: false,
      newTodo: '',
      idForTodo: 3,
      beforeEditCache: '',
      filter: 'all',
      todos: [
        {
          'id': 1,
          'title': 'Finish Vue Screencast',
          'completed': false,
          'editing': false,
        },
        {
          'id': 2,
          'title': 'Take over world',
          'completed': false,
          'editing': false,
        },
      ]
    }
  },
  
}
</script>
