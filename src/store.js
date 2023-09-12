import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name: "user",
    initialState : "홍길동",
    reducers : {
        changeName() {
            return "테스트" 
        }
    }
})

// let job = createSlice({
//     name: "job",
//     initialState : "개발자"
// })

let dark = createSlice({
    name : "dark",
    initialState : "light",
    reducers : {
        toggleTheme : (state) => state === "light" ? "dark" : "light"
    }
})

export const {changeName} = user.actions;
export const {toggleTheme} = dark.actions;

export default configureStore({
    reducer : {
        user : user.reducer,
        dark : dark.reducer
    }
})