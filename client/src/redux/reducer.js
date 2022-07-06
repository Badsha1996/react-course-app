import * as types from "./actionType";
const initialState = {
  courses: [],
  course: {},
  loading: false,
};

const coursesReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_COURSES_START:
    case types.CREATE_COURSE_START:
    case types.DELETE_COURSE_START:
    case types.UPDATE_COURSE_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_COURSES_SUCCESS:
      return {
        ...state,
        courses: action.payload,
        loading: false,
      };
    case types.LOAD_COURSES_ERROR:
    case types.CREATE_COURSE_ERROR:
    case types.DELETE_COURSE_ERROR:
    case types.UPDATE_COURSE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case types.DELETE_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        courses: state.courses.filter((item) => item.id !== action.payload),
      };
    case types.CREATE_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.UPDATE_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default coursesReducers;
