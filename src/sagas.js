import { all, fork } from "redux-saga/effects"

export function* helloSaga() {
    yield console.log('Hello Sagas!')
  }



export function* rootSaga(){
    yield all([
        fork(helloSaga)
    ])
}