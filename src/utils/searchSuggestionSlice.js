import { createSlice } from "@reduxjs/toolkit";

const searchSuggestionSlice = createSlice({
  name: "searchSuggestion",
  initialState: {
    movieSuggestions: [],
  },
  reducers: {
    addMovieSearchSuggestion: (state, action) => {
      state.movieSuggestions = moviesSuggest(action.payload);
    },
  },
});

const moviesSuggest = (suggestions) => {

  return suggestions
    
    .filter(Boolean) // Remove null values from the array
    .filter((value, index, self) => self.indexOf(value) === index); // Remove duplicates
};



export const { addMovieSearchSuggestion } = searchSuggestionSlice.actions;

export default searchSuggestionSlice.reducer;
