import { createSlice } from "@reduxjs/toolkit";
export type User = {
    _id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    dob: string;
    loginId: string;
    section: string;
    lastActivity: string;
    totalActivity: string;
};
const initialState = {
    currentUser: {} as User,
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
