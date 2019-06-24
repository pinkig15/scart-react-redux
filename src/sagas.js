import { takeLatest, call, put, all } from "redux-saga/effects";
import { callFetchProducts, callSearchProduct, callLogin } from "./apis";
import { FETCH_PRODUCTS, SEARCH_PRODUCT, LOGIN } from "./constants.js";

export function* login(data) {
  const responseData = yield call(callLogin, data);
  try{
    if(responseData.data.length === 0) {
      alert("Incorrect username or password!")
    }
    else{
      if(responseData.data[0].password !== data.data.password) {
        alert("wrong password!")
      }
      else {
        yield put({type: `${LOGIN}_SUCCESS`, responseData})
      }
    }
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
    takeLatest(`${FETCH_PRODUCTS}_PENDING`, fetchProducts),
    takeLatest(`${SEARCH_PRODUCT}_PENDING`, searchProducts),
  ]);
}

export default [allSagas];
