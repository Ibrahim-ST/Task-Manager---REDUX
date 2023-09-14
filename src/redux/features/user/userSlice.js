import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'Ibrahim Siddiquee',
    email: "ibrah@gmail.com",
    userTasks: []
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {

    }
})


export default userSlice.reducer;