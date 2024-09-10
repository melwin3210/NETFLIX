import { createSlice } from "@reduxjs/toolkit";

const searchSuggestionSlice = createSlice({
  name: "searchSuggestion",
  initialState: {
    suggestionsCache: {},
  },
  reducers: {
    addSearchSuggestionsCache: (state, action) => {
      state.suggestionsCache = cacheStorageCheck(
        state.suggestionsCache,
        action.payload
      );
    },
  },
});

const cacheStorageCheck = (cacheList, latestUpdate) => {
  const duplicateKeys = Object.keys(latestUpdate).filter(
    (key) => key in cacheList
  );

  if (duplicateKeys.length > 0) {
    return cacheList;
  }
  let copyList = { ...cacheList };
  let list = {};

  if (Object.keys(copyList).length > 100) {
    let firstKey = Object.keys(copyList)[0];

    // Delete the first key-value pair
    delete copyList[firstKey];
  }

  return (list = { ...copyList, ...latestUpdate });
};

export const { addSearchSuggestionsCache } = searchSuggestionSlice.actions;

export default searchSuggestionSlice.reducer;
