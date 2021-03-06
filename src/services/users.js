import { client, checkError } from './client.js';

// function to get user session
// if this is async, it will return a promise, promises are treated as objects (an empty object is truthy)
// this isn't going to the database, it's just looking at localStorage

export function getUser() {
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
