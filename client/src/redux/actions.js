import * as types from "./actionType";

export const loadCoursesStart = () => ({
  type: types.LOAD_COURSES_START,
});

export const loadCoursesSuccess = (courses) => ({
  type: types.LOAD_COURSES_SUCCESS,
  payload: courses,
});

export const loadCoursesError = (error) => ({
  type: types.LOAD_COURSES_ERROR,
  payload: error,
});

export const createCourseStart = (course) => ({
  type: types.CREATE_COURSE_START,
  payload: course,
});

export const createCourseSuccess = (courses) => ({
  type: types.CREATE_COURSE_SUCCESS,
  payload: courses,
});

export const createCourseError = (error) => ({
  type: types.CREATE_COURSE_ERROR,
  payload: error,
});

export const deleteCourseStart = (id) => ({
  type: types.DELETE_COURSE_START,
  payload: id,
});

export const deleteCourseSuccess = (courseId) => ({
  type: types.DELETE_COURSE_SUCCESS,
  payload: courseId
});

export const deleteCourseError = (error) => ({
  type: types.DELETE_COURSE_ERROR,
  payload: error,
});

export const updateCourseStart = (courseInfo) => ({
  type: types.UPDATE_COURSE_START,
  payload: courseInfo,
});

export const updateCourseSuccess = () => ({
  type: types.UPDATE_COURSE_SUCCESS,
});

export const updateCourseError = (error) => ({
  type: types.UPDATE_COURSE_ERROR,
  payload: error,
});
