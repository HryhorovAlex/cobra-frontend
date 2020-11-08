import { all, takeLatest, call, put } from 'redux-saga/effects';
import { apiService } from '../../services';
import { authSlice } from './auth-slice';

export function* loginSaga({ payload }: any) {
  try {
    const response = yield call(apiService.post, { url: "", data: payload });
    yield put(authSlice.actions.loginSuccess(response))
  } catch (error) {
    yield put(authSlice.actions.loginFailure(error))
  }
}

export function* signUpSaga({ payload }: any) {
  try {
    const response = yield call(apiService.post, { url: "", data: payload });
    yield put(authSlice.actions.signUpSuccess(response))
  } catch (error) {
    yield put(authSlice.actions.signUpFailure(error))
  }
}

export default all([
  takeLatest(authSlice.actions.login, loginSaga),
  takeLatest(authSlice.actions.signUp, signUpSaga),
])