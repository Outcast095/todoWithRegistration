import { createSlice } from "@reduxjs/toolkit";




const authorizationReducer = createSlice({
    name: "todos",
    initialState: {
        userData: {

        }},
    reducers: {

        authorizationHandler (state, action) {

            console.log(action.payload)
        },
    },

});


export const { authorizationHandler } = authorizationReducer.actions;
export default authorizationReducer.reducer;