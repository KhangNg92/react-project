import { combineReducers } from "redux";
import { createScopedReducer } from "../../scope";
import { LoadingReducer } from "../../loading";
import { MOVIE_RESULTS_SCOPE, MOVIE_DETAIL_SCOPE } from "./constants";

const MovieReducer = combineReducers({
  results: createScopedReducer(LoadingReducer, MOVIE_RESULTS_SCOPE),
  detail: createScopedReducer(LoadingReducer, MOVIE_DETAIL_SCOPE)
});

export default MovieReducer;
