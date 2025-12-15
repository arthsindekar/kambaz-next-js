import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/[cid]/Modules/reducer";
import accountReducer from "./Account/reducer";
import dashboardReducer from "./Dashboard/reducer";
import assignmentReducer from "./Courses/[cid]/Assignments/assignmentReducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    dashboardReducer,
    assignmentReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
