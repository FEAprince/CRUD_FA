import { get, remove, put } from "./web.request";
import { API } from "../helper";

//Dashboard
export const dashboardHandlerData = (body) => {
  return get(`${API}crud1`, body);
};

export const dashboardHandlerTodo = (body) => {
  return get(`${API}todo`, body);
};

export const dashboardHandlerUser = (body) => {
  return get(`${API}login`, body);
};

export const dashboardHandlerUser1 = (body) => {
  return get(`${API}login1`, body);
};

//Data Api Start
export const dataHandlerDataDelete = (body, id) => {
  return remove(`${API}crud1/${id}`, body);
};



export const dataHandlerDataUpdate = (body, id) => {
  return put(`${API}crud1/${id}`, body);
};
