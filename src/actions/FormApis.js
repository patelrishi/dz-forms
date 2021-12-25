import api from "../api";

export function createForm(_id) {
  const data = api.post(`/forms`, { _id });
  return data;
}
export function getFormDetails(_id, creator_id) {
  const data = api.get(`/forms`, { _id, creator_id });
  return data;
}
