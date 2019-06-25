import { takeLatest, call, put, all } from "redux-saga/effects";
import { callFetchProducts, callSearchProduct, callLogin, fetchFilterData } from "./apis";
import { FETCH_PRODUCTS, SEARCH_PRODUCT, LOGIN, FETCH_FILTER_DATA } from "./constants.js";

export function* login(data) {
  const responseData = yield call(callLogin, data);
  try{
    if(responseData.data.length === 0) {
      throw "Incorrect username or password!"
    }
    else if(responseData.data[0].password !== data.data.password) {
     throw "Incorrect password!"
    }
    yield put({type: `${LOGIN}_SUCCESS`, responseData})
  }catch(error) {
    yield put({type: `${LOGIN}_FAILURE`, error})
  }
}

export function* fetchProducts() {
  try {
    const response = yield call(callFetchProducts);
    const responseData = response.data;
    yield put({ type: `${FETCH_PRODUCTS}_SUCCESS`, responseData });
  } catch (error) {
    yield put({ type: `${FETCH_PRODUCTS}_FAILURE`, error });
  }
}

export function* callFilterData() {
  try {
    const response = yield call(fetchFilterData);
    const responseData = response.data;
    yield put({ type: `${FETCH_FILTER_DATA}_SUCCESS`, responseData });
  } catch (error) {
    yield put({ type: `${FETCH_FILTER_DATA}_FAILURE`, error });
  }
}

export function* searchProducts(data) {

  try {
    const response = yield call(callSearchProduct, data);
    const responseData = response.data;
    yield put({ type: `${SEARCH_PRODUCT}_SUCCESS`, responseData });
  } catch (error) {
    yield put({ type: `${SEARCH_PRODUCT}_FAILURE`, error });
  }
}

export function* allSagas() {
  yield all([
    takeLatest(`${LOGIN}_PENDING`, login),
    takeLatest(`${FETCH_FILTER_DATA}_PENDING`, callFilterData),
    takeLatest(`${FETCH_PRODUCTS}_PENDING`, fetchProducts),
    takeLatest(`${SEARCH_PRODUCT}_PENDING`, searchProducts),
  ]);
}

export default [allSagas];
