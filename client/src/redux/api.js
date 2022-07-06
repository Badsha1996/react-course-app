import axios from "axios";

export const loadCoursesApi = async () =>
  await axios.get(`http://localhost:5000/courses`);

export const createCourseApi = async (course) =>
  await axios.post(`http://localhost:5000/courses`, course);

export const deleteCourseApi = async (id) =>
  await axios.delete(`http://localhost:5000/course/${id}`);

export const updateCourseApi = async (id, course) =>
  await axios.put(`http://localhost:5000/course/${id}`, course);
