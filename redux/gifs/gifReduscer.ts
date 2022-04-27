import { PGif } from "../types/global";
import { Action, DefaultReducer } from "../types/store";
import {
    FETCH_GIF_FAILURE,
    FETCH_GIF_REQUEST,
    FETCH_GIF_SUCCESS
  } from "./gifTypes.ts";

const initialState: DefaultReducer<IGif> = {
loading: false,
success: false,
data: {} as IGif,
error: ""
};

const gifReducer = (
    state = initialState,
    action: Action<IGif | string>
  ): DefaultReducer<IGif> => {
    switch (action.type) {
      case FETCH_GIF_REQUEST:
        return {
          ...state,
          loading: true
        };
      case FETCH_GIF_SUCCESS:
        return {
          ...initialState,
          success: true,
          data: action.payload as IGif
        };
      case FETCH_GIF_FAILURE:
        return {
          ...initialState,
          error: action.payload as string
        };
      default:
        return state;
    }
  };

export default gifReducer;