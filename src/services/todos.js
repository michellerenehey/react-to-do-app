import { client, checkError } from './client.js';

// function to create to-dos
export async function createTodo(task) {
  const resp = await client.from('todos').insert([{ task: task, user_id: client.auth.user().id }]);
  return checkError(resp);
}

// function to pull todos from database
export async function fetchTodos() {
  const response = await client.from('todos').select('*');
  return checkError(response);
}

// function to toggle
export async function toggleCompleted(id, is_complete) {
  const resp = await client.from('todos').update({ is_complete }).eq('id', id);
  return checkError(resp);
}

// function to delete task
export async function deleteTask(id) {
  const resp = await client.from('todos').delete().match({ id });
  return checkError(resp);
}
