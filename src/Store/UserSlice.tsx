import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export interface User{
    name:string;
}

interface _State {
    loading: boolean;
    user: string,
    error: string,
    token: string,
    msg: string
}

const initialState: _State = {
    loading: false,
    user: "",
    error: "",
    token: "",
    msg: ""
}

export const loginUser = createAsyncThunk('user/loginUser',async(userCredentials:{email: string; password: string})=>{
        const request = await axios.post('https://reqres.in/api/login',userCredentials);
        const response = await request.data.token;
        localStorage.setItem('user',JSON.stringify(response));
        return response;
    }
)
export const signUpUser = createAsyncThunk('user/signUpUser',async(userCredentials:{name: string; email: string; password: string})=>{
        const request = await axios.post('https://reqres.in/api/register',userCredentials);
        const response = await request.data.token;
        localStorage.setItem('user',JSON.stringify(response));
        return response;
    }
)
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(loginUser.pending,(state)=>{
            state.loading = true;
            state.user = "";
            state.error = ""
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.loading = false;
            state.user = action.payload;
            state.error = ""
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.loading = false;
            state.user = "";
            if(action.error.message === 'Request failed with status code 400'){
                state.error = "Action Denied! Invalid Credentials"
            }
        })
        .addCase(signUpUser.pending,(state)=>{
            state.loading = true;
            state.user = "";
            state.error = ""
        })
        .addCase(signUpUser.fulfilled,(state,action)=>{
            state.loading = false;
            state.user = action.payload;
            state.error = ""
        })
        .addCase(signUpUser.rejected,(state)=>{
            state.loading = false;
            state.user = "";
            state.error = ""
        })
    }
});

export default userSlice.reducer;