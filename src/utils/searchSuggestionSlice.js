import { createSlice } from "@reduxjs/toolkit";

const searchSuggestionSlice = createSlice({
  name: "searchSuggestion",
  initialState: {

    suggestionsCache:{}
  },
  reducers: {

    addSearchSuggestionsCache: (state, action) => {
      state.suggestionsCache = cacheStorageCheck(state.suggestionsCache,action.payload) 
    },
  },
});

const cacheStorageCheck = (cacheList, latestUpdate) => {
  let copyList = {...cacheList}
  let list = {}
  
  if(Object.keys(copyList).length>100){
    let firstKey = Object.keys(copyList)[0];
    
    // Delete the first key-value pair
    delete copyList[firstKey];

  }
 return list = {...copyList, ...latestUpdate}
  
}




export const {   addSearchSuggestionsCache} = searchSuggestionSlice.actions;

export default searchSuggestionSlice.reducer;
