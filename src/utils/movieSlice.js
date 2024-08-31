import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState:{
        upcommingMovies:null,
        mainMovie:null
    },
    reducers:{
        addMainMovie:(state, action)=>{
            state.mainMovie =  action.payload

        },
        addUpcommingMovies:(state, action)=>{
            state.upcommingMovies =  action.payload

        }
    }
})
export const {addMainMovie, addUpcommingMovies} = movieSlice.actions

export default movieSlice.reducer