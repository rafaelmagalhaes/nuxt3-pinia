<template>
  <div>
    <h1>Todos:</h1>
    <ul v-for="todo in todos" :key="todo.id">
      <li>{{ todo.title }}</li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { useTodosStore } from '~/store/todos';
const { fetchTodos, todos } = useTodosStore();

await fetchTodos();
</script>
