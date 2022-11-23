import { createSlice } from "@reduxjs/toolkit";


export const initialState = {
  coursesName: '',
  courseDuration: '',
  courseCost: '',
  courseDescription: ''

};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    changeCourseName: (state, actions) => {
      state.coursesName = actions.payload
    },
    changeCourseDuration: (state, actions) => {
      state.courseDuration = actions.payload
    },
    changeCourseCost: (state, actions) => {
      state.courseCost = actions.payload
    },
    changeCourseDescription: (state, actions) => {
      state.courseDescription = actions.payload
    }}
  });

export const { changeCourseName, changeCourseDuration,changeCourseCost,changeCourseDescription } = courseSlice.actions;
export default courseSlice.reducer;
