import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { callApi } from "../../utils/api";
import { fetchError, fetchSuccess } from "./actions";
import { FETCH_REQUEST } from "./types";

const POST_API_URL = 'https://jsonplaceholder.typicode.com/posts';

// worker saga -- can connect with rest api, and dispatch 
function* handleFetch(){

  try{
    // to call ajax logic -- use redux-saga's call()
    const res = yield call( callApi, 'get', POST_API_URL);
    debugger;
    if(res.error){
      // dispatch with error -- use put() from redux-saga
      yield put(fetchError(res.error))
    }else{
      // dispatch with success / data -- use put() from redux-saga
      yield put(fetchSuccess(res))
    }

  }
  catch(err){
    if(err){
      // dispatch with error -- use put() from redux-saga
    }
  }
}

// watcher saga -- watch specific action type and run the saga 
function* watchFetchRequest(){
  yield takeEvery(FETCH_REQUEST, handleFetch);
}

// feature saga 
function* postsSaga(){
  yield all([
    fork(watchFetchRequest)
  ])
}

export default postsSaga;
