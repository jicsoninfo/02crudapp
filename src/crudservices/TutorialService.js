//import http from "../http-common";
//import http from "../http-common";
import http from "../http-common";

const getAll = () => {
  return http.get("/tutorials");
};

const get = id => {
  //return http.get(`/tutorials/${id}`);
  //console.log(id);
  return http.get(`/tutorialsgetdatabyid/?id=${id}`);
};

const create = data => {
  //return "hi .................";
  //return data;
  //console.log(data);
  //return data;
  return http.post("/tutorials", data);
};

const update = (id, data) => {
  return http.put(`/tutorials/${id}`, data);
};

const remove = id => {
  return http.delete(`/tutorials/${id}`);
};

const removeAll = () => {
  //return http.delete(`/tutorials`);
  return http.post(`/tutorialsdeletealldata`);
};

const findByTitle = title => {
  //return http.get(`/tutorials?title=${title}`);
  return http.get(`/tutorialsfindbytitle?title=${title}`);
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default TutorialService;