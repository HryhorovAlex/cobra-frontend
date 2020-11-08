import { IState } from '../root-reducer';

export const getAuthLoading = (state: IState) => state.auth.loading;

export const getAuthErrors = (state: IState) => state.auth.error;