import api from "../api";

export function userLogin(email, password) {
  const data = api.login(`users/login`, { email, password });
  return data;
}

export function userRegister(name, email, password) {
  const data = api.post(`/users`, { name, email, password });
  return data;
}

export function getUserDetails(_id) {
  const data = api.get(`/users`, { _id });
  return data;
}

export function addToFavourite(value) {
  console.log(value, "api");
  const data = api.post(`/users/watchlist`, value);
  return data;
}
