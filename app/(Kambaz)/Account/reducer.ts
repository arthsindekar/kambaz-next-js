import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: {
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    dob: "",
    loginId: "002143650S",
    section: "S101",
    lastActivity: "1852-11-27",
    totalActivity: "21:32:43",
  },
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});
export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;
