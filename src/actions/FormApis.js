import api from "../api";

export function createForm(_id) {
  const data = api.post(`/forms`, { _id });
  return data;
}
