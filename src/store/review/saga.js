import {DONT_BE_EVIL} from './actions'
import {takeEvery} from 'redux-saga/effects'

function* fetch() {
  // fetch data
}

function* reviewSaga() {
  yield takeEvery(DONT_BE_EVIL, fetch)
}

export default reviewSaga
