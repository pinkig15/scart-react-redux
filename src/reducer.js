import { FETCH_PRODUCTS, SEARCH_PRODUCT, LOGIN, FETCH_FILTER_DATA } from "./constants.js";

const initialState = {
  fetching: false,
  data: null,
  userinfo: null,
  error: null,
  filterData: null,
  filterFetching: false,
  filterError: null,
};

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case `${LOGIN}_PENDING`:
      return { ...state, fetching: true, error: null };
    case `${LOGIN}_SUCCESS`: 
      return { ...state, fetching: false, userinfo: action.responseData.data };
    case `${LOGIN}_FAILURE`:
      return { ...state, fetching: false, userinfo: null, error: action.error};
    case `${FETCH_PRODUCTS}_PENDING`:
      return { ...state, fetching: true, error: null };
    case `${FETCH_PRODUCTS}_SUCCESS`:
      return { ...state, fetching: false, data: action.responseData };
    case `${FETCH_PRODUCTS}_FAILURE`:
      return { ...state, fetching: false, error: "something went wrong!" };
    case `${FETCH_FILTER_DATA}_PENDING`:
      return { ...state, filterFetching: true, filterError: null };
    case `${FETCH_FILTER_DATA}_SUCCESS`:
      return { ...state, filterFetching: false, filterData: action.responseData };
    case `${FETCH_FILTER_DATA}_FAILURE`:
      return { ...state, filterFetching: false, filterError: "something went wrong!" };
    case `${SEARCH_PRODUCT}_PENDING`:
      return { ...state, fetching: true, error: null };
    case `${SEARCH_PRODUCT}_SUCCESS`:
      return { ...state, fetching: false, data: action.responseData };
    case `${SEARCH_PRODUCT}_FAILURE`:
      return { ...state, fetching: false, error: "something went wrong!" };
    default:
      return state;
  }
}
