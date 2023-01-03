<template>
  <div>
    <h1>Todos:</h1>
    <ul v-for="todo in todos" :key="todo.id">
      <li>{{ todo.title }}</li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useTodosStore } from '~/store/todos';

const store = useTodosStore();
const { fetchTodos } = store; // have all non reactiave stuff here
const { todos } = storeToRefs(store); // have all reactive states here

await fetchTodos();
</script>
