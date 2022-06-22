import { get, remove, put, post } from "./web.request";
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

//Read - Api Calling Start
export const dataHandlerDataDelete = (body, id) => {
  return remove(`${API}crud1/${id}`, body);
};

export const dataHandlerData = (body, id) => {
  return put(`${API}crud1/${id}`, body);
};

//Update - Api Calling Start
export const updateHandlerData = (body, id) => {
  return get(`${API}crud1/${id}`, body);
};

export const updateHandlerupdateData = (id, body) => {
  return put(`${API}crud1/${id}`, body);
};

//Create - Api Calling

export const createHandlerData = (body) => {
  return post(`${API}crud1`, body);
};

//Todo -Api Calling

export const todoHandlergetData = (body) => {
  return get(`${API}todo`, body);
};
export const todoHandlerpostData = (body) => {
  return post(`${API}todo`, body);
};
export const todoHandlerDataDelete = (body, id) => {
  return remove(`${API}todo/${id}`, body);
};

export const todoHandlerDataUpdate = (id, body) => {
  return put(`${API}todo/${id}`, body);
};
// User - Api Calling
export const userHandlergetData = (body) => {
  return get(`${API}login`, body);
};
// export const userHandlerpostData = (body) => {
//   return get(`${API}login`, body);
// };
export const userHandlerDataDelete = (body, id) => {
  return remove(`${API}login/${id}`, body);
};

// New Data Api Calling

export const newdataHandlergetData = (body) => {
  return get(`${API}crud1`, body);
};
