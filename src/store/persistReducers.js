import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default function persistReducers(reducers) {
  const persistedReducer = persistReducer(
    {
      key: 'calledAnatel',
      whitelist: ['userData', 'updateFormData'],
      storage,
    },
    reducers
  );

  return persistedReducer;
}
