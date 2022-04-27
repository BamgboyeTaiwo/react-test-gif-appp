import { SearchResponseData } from "types/responses";
import { Action } from "types/store";
import {
  SEARCH_GIFS_FAILURE,
  SEARCH_GIFS_REQUEST,
  SEARCH_GIFS_SUCCESS
} from "./searchTypes";

export const searchGifsRequest = (query: string): Action<string> => ({
  type: SEARCH_GIFS_REQUEST,
  payload: query
});

export const searchGifsSuccess = (
  data: SearchResponseData
): Action<SearchResponseData> => ({
  type: SEARCH_GIFS_SUCCESS,
  payload: data
});

export const searchGifsFailure = (error: string): Action<string> => ({
  type: SEARCH_GIFS_FAILURE,
  payload: error
});