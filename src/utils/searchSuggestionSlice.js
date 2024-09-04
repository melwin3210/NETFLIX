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
  // Define keywords to identify relevant suggestions
  const keywords = ["movie", "songs", "trailer", "bgm", "scenes", "climax", "full"];

  // Process the suggestions
  return suggestions
    .map((suggestion) => {
      // Convert suggestion to lowercase for case-insensitive matching
      const lowerCaseSuggestion = suggestion.toLowerCase();

      // Find the index of the first keyword in the suggestion
      const index = keywords
        .map((keyword) => lowerCaseSuggestion.indexOf(keyword))
        .find((idx) => idx !== -1);

      // If a keyword is found, slice the suggestion before the keyword
      if (index !== -1) {
        // Extract text before the keyword and trim whitespace
        const beforeKeyword = suggestion.slice(0, index).trim();
        return beforeKeyword;
      }

      // If no keyword is found, return null
      return null;
    })
    .filter(Boolean) // Remove null values from the array
    .map(suggestion => suggestion.split(' ')[0]) // Extract the base keyword (e.g., "Vikram")
    .filter((value, index, self) => self.indexOf(value) === index); // Remove duplicates
};



export const { addMovieSearchSuggestion } = searchSuggestionSlice.actions;

export default searchSuggestionSlice.reducer;
