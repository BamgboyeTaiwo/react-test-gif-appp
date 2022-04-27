import { IGif } from "types/global";
import { SearchResponseData } from "types/responses";
import { Action, ISearchGifReducer } from "types/store";
import {
  SEARCH_GIFS_FAILURE,
  SEARCH_GIFS_REQUEST,
  SEARCH_GIFS_SUCCESS
} from "./searchTypes.ts";

const initialState: ISearchGifReducer = {
  loading: false,
  success: false,
  data: [],
  page: 0,
  nextPage: true,
  query: "",
  error: "",
  totalCount: 0
};


const searchReducerMain = (
    state = initialState,
    action: Action<SearchResponseData | string>
  ): ISearchGifReducer => {
    switch (action.type) {
      case SEARCH_GIFS_FAILURE:
        return {
            ...state,
            loading: false,
            success: false,
            error: action.payload as string
        };
      case SEARCH_GIFS_REQUEST:
        const query = action.payload as string;
  
        return {
          ...state,
          data: query === state.query ? state.data : [],
          loading: true,
          query,
          error: "",
          success: false
        };
      case SEARCH_GIFS_SUCCESS:
        const { data, pagination } = action.payload as SearchResponseData;
        const page = pagination.offset;
  
        return {
          ...state,
          loading: false,
          success: true,
          data: [
            ...state.data,
            ...data.filter((gif: IGif) => {
              //filter duplicate gifs
              const index = state.data.findIndex(
                (oldGif) => gif.id === oldGif.id
              );
  
              return index < 0;
            })
          ],
          page,
          nextPage: (page + 1) * 50 < pagination.total_count,
          totalCount: pagination.total_count
        };

      default:
        return state;
    }
  };
  
  export default searchReducerMain;
  