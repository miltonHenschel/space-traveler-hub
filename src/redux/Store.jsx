import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocket/rcktreducer';

export default configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});
