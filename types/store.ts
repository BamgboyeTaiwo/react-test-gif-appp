import { PGif } from "./global";

export interface RootState {
  searchResults: ISearchGifReducer;
  gif: DefaultReducer<PGif>;
}

export interface Action<Payload = null> {
  type: string;
  payload?: Payload;
}