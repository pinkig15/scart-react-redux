import { FETCH_PRODUCTS, SEARCH_PRODUCT, LOGIN } from "./constants.js";

const initialState = {
  fetching: false,
  data: null,
  userinfo: {},
  error: null
};

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case `${LOGIN}_PENDING`:
      return { ...state, fetching: true, error: null };
    case `${LOGIN}_SUCCESS`: 
      return { ...state, fetching: false, userinfo: action.responseData.data };
    case `${LOGIN}_FAILURE`:
      return { ...state, fetching: false, userinfo: null, error: action.responseData };
    case `${FETCH_PRODUCTS}_PENDING`:
      return { ...state, fetching: true, error: null };
    case `${FETCH_PRODUCTS}_SUCCESS`:
      return { ...state, fetching: false, data: action.responseData };
    case `${FETCH_PRODUCTS}_FAILURE`:
      return { ...state, fetching: false, error: action.error };
    case `${SEARCH_PRODUCT}_PENDING`:
      return { ...state, fetching: true, error: null };
    case `${SEARCH_PRODUCT}_SUCCESS`:
      return { ...state, fetching: false, data: action.responseData };
    case `${SEARCH_PRODUCT}_FAILURE`:
      return { ...state, fetching: false, error: action.error };
    default:
      return state;
  }
}
