import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState:{
        upcommingMovies:null,
        mainMovie:null,
        searchedMovie:null
    },
    reducers:{
        addMainMovie:(state, action)=>{
            state.mainMovie =  action.payload

        },
        addUpcommingMovies:(state, action)=>{
            state.upcommingMovies =  action.payload

        },
        addSearchedMovie:(state,action)=>{
            state.searchedMovie=action.payload
            //state.searchedMovie = action.payload
        }
    }
})
export const {addMainMovie, addUpcommingMovies, addSearchedMovie} = movieSlice.actions

export default movieSlice.reducer