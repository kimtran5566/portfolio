import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loginApi } from "services/loginApi";

const initialState = {
    userName:"",
    password: "",
    token: ""
}

const dataUserSlice = createSlice(
    {
        name: 'user',
        initialState,
        reducers:{
            dataUserAdd(state,action : PayloadAction<{password: string;userName: string; token : string}>){
                const {userName, password, token} = action.payload
                state.password= password
                state.userName = userName
                state.token = token
            },
            logOut (state) {
                state.password= ''
                state.userName = ''
                state.token = ''
            }
        },
        extraReducers: (builder) => {
            builder.addMatcher(loginApi.endpoints.login.matchFulfilled,(state,action) => {
                console.log("addMatcher",action.payload.token)
                if( action.payload.token){
                    state.token = action.payload.token
                    localStorage.setItem('token', action.payload.token)
                    localStorage.setItem('userName', state.userName)
                }
            })
            builder.addMatcher(loginApi.endpoints.register.matchFulfilled, (state,action) => {
                console.log("addMatcher register", action.payload.token)
                if( action.payload.token){
                    state.token = action.payload.token
                    localStorage.setItem('token', action.payload.token)
                    localStorage.setItem('userName', state.userName)

                }

            })
        }
    }
)
const dataUserReducer =  dataUserSlice.reducer
export const {dataUserAdd,logOut} = dataUserSlice.actions
export default  dataUserReducer