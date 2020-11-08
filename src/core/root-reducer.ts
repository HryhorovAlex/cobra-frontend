import { combineReducers } from '@reduxjs/toolkit';
import { IAuth } from './auth';
import auth from './auth/auth-slice';

export interface IState {
  auth: IAuth
}

const rootReducer = combineReducers({
  auth
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer