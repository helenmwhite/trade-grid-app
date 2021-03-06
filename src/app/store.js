import { configureStore } from '@reduxjs/toolkit';
import tradeGridReducer from '../features/tradeGrid/tradeGridSlice';

export default configureStore({
  reducer: {
    tradeGrid: tradeGridReducer,
  },
});
