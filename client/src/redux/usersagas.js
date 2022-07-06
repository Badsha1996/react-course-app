import {
  takeLatest,
  put,
  call,
  fork,
  all,
  take,
  delay,
} from "redux-saga/effects";
import {
  loadCoursesSuccess,
  loadCoursesError,
  createCourseSuccess,
  createCourseError,
  deleteCourseSuccess,
  deleteCourseError,
  updateCourseSuccess,
  updateCourseError,
} from "./actions";
import {
  loadCoursesApi,
  createCourseApi,
  deleteCourseApi,
  updateCourseApi,
} from "./api";

import * as types from "./actionType";

export function* onLoadCoursesStartAsync() {
  try {
    const response = yield call(loadCoursesApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadCoursesSuccess(response.data));
    }
  } catch (error) {
    yield put(loadCoursesError(error));
  }
}

function* deleteCourse(courseId) {
  try {
    const response = yield call(deleteCourseApi, courseId);
    if (response.status === 200) {
      yield delay(500);
      yield put(deleteCourseSuccess(courseId));
    }
  } catch (error) {
    yield put(deleteCourseError(error));
  }
}

function* onDeleteCourseRequest() {
  while (true) {
    const { payload: id } = yield take(types.DELETE_COURSE_START);
    yield call(deleteCourse, id);
  }
}

function* onCreateCourseStartAsync({ payload }) {
  try {
    const response = yield call(createCourseApi, payload);
    console.log("responseCreate", response);
    if (response.status === 200) {
      yield put(createCourseSuccess(response.data));
    }
  } catch (error) {
    yield put(createCourseError(error));
  }
}

function* onUpdateCourseStartAsync({ payload: { id, formValue } }) {
  try {
    const response = yield call(updateCourseApi, id, formValue);
    if (response.status === 200) {
      yield put(updateCourseSuccess(response.data));
    }
  } catch (error) {
    yield put(updateCourseError(error));
  }
}

export function* onLoadCourses() {
  yield takeLatest(types.LOAD_COURSES_START, onLoadCoursesStartAsync);
}

export function* onCreateCourse() {
  yield takeLatest(types.CREATE_COURSE_START, onCreateCourseStartAsync);
}

export function* onUpdateCourse() {
  yield takeLatest(types.UPDATE_COURSE_START, onUpdateCourseStartAsync);
}

// PERFORMING NON BLOCK CALL USING FORK
const courseSagas = [
  fork(onLoadCourses),
  fork(onCreateCourse),
  fork(onDeleteCourseRequest),
  fork(onUpdateCourse),
];

export default function* rootSaga() {
  yield all([...courseSagas]);
}
