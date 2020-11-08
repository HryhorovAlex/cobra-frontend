import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSlice, getAuthErrors, getAuthLoading } from '../../core/auth';

export interface ISignUpHooks {
  loading: boolean;
  error: any[];
  signUp:(values: any) => void;
};

export function useSignUpHooks (): ISignUpHooks {
  const dispatch = useDispatch()
  const loading = useSelector(getAuthLoading)
  const error = useSelector(getAuthErrors)

  const signUp = useMemo(() => (values: any) => {
    dispatch(authSlice.actions.signUp(values))
  },[])

  return {
    loading,
    error,
    signUp,
  }
}