import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    sagaMiddleware,
    ...getDefaultMiddleware()
  ]
})

sagaMiddleware.run(RootSaga)

export type AppDispatch = typeof store.dispatch;

export default store;