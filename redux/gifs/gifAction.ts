import { PGif } from "types/global";
import { Action } from "types/store";
import { FETCH_GIF_FAILURE, FETCH_GIF_REQUEST, FETCH_GIF_SUCCESS } from "./gifTypes";

export const fetchGifRequest = (): Action => ({
  type: FETCH_GIF_REQUEST
});

export const fetchGifSuccess = (data: IGif): Action<IGif> => ({
  type: FETCH_GIF_SUCCESS,
  payload: data
});

export const fetchGifFailure = (error: string): Action<string> => ({
  type: FETCH_GIF_FAILURE,
  payload: error
});
