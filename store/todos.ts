import { defineStore } from 'pinia';

export const useTodosStore = defineStore('todos', () => {
  const todos = ref([]);

  const fetchTodos = async () => {
    const { data }: any = await useFetch('https://jsonplaceholder.typicode.com/todos');
    if (data.value) {
      todos.value = data.value;
    }
  };

  return {
    todos,
    fetchTodos,
  };
});
