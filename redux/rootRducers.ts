import { combineReducers } from "redux";
import gifReducer from "./gifs/gifreduscer.ts";
import searchReducer from "./search/searchReducer.ts";

const rootReducer = combineReducers({
  gif: gifReducer,
  searchResults: searchReducer
});

export default rootReducer;