import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export type Assignment = {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  dueDate: string;
  availableFrom: string;
  availableUntil: string;
  editing?: boolean;
}
const initialState = {
  assignments: [] as Assignment[],
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: uuidv4(),
        title: assignment.title,
        course: assignment.course,
        description: assignment.description,
        points: assignment.points,
        dueDate: assignment.dueDate,
        availableFrom: assignment.availableFrom,
        availableUntil: assignment.availableUntil,
        editing: false,
      };
      state.assignments = [...state.assignments, newAssignment];
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter((a) => a._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a
      );
    },
    setAssignments:(state, { payload: assignments }) => {
      state.assignments = assignments;
    }
  },
});
export const { addAssignment, deleteAssignment, updateAssignment,setAssignments  } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
