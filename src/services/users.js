import { client, checkError } from './client.js';

// function to get user session
export async function getUser() {
  return client.auth.session();
}
// function to sign up
export async function signUpUser(email, password) {
  const { user, error } = await client.auth.signUp({ email, password });
  if (error) {
    throw error;
  }
  return user;
}
// function to sign in
export async function signInUser(email, password) {
  const { user, error } = await client.auth.signIn({ email, password });
  if (error) {
    throw error;
  }
  return user;
}
// function to logout
export async function logout() {
  const response = await client.auth.signOut();
  return checkError(response);
}
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
