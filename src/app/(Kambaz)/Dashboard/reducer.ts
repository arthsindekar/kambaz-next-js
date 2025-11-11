import { createSlice } from "@reduxjs/toolkit";
import { courses, enrollments } from "../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  courses: courses,
  enrollments: enrollments,
  showKambazNav: true,
};
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, { payload: course }) => {
      const newCourse = {
        ...course,
        _id: uuidv4(),
        name: course.name,
        number: course.number,
        startDate: course.startDate,
        endDate: course.endDate,
        department: course.department,
        credits: course.credits,
        description: course.description,
        src: course.src,
      };
      state.courses = [...state.courses, newCourse];
    },
    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter((course) => course._id !== courseId);
    },
    updateCourse: (state, { payload: course }) => {
      state.courses = state.courses.map((c) =>
        course._id === c._id ? course : c
      );
    },
    enrollCourse: (state, { payload: enrollment }) => {
      state.enrollments = [...state.enrollments, enrollment];
      console.log("New Enrollment" + JSON.stringify(enrollment));
      console.log("Enrollments updated:", JSON.stringify(enrollments));
    },
    unenrollCourse: (state, { payload: courseId }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) => enrollment.course !== courseId
      );
    },
    toggleKambaz: (state, { payload: toggle }) => {
      state.showKambazNav = toggle;
    },
  },
});
export const {
  addCourse,
  deleteCourse,
  updateCourse,
  enrollCourse,
  unenrollCourse,
  toggleKambaz,
} = coursesSlice.actions;
export default coursesSlice.reducer;
