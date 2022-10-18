import { createSlice } from "@reduxjs/toolkit";


export const initialState = {
  coursesName: '',
  courseDuration:''

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
}
}
});

export const {changeCourseName, changeCourseDuration} = courseSlice.actions;
export default courseSlice.reducer;
