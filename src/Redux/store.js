import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './Slice/TodoSlice';
import { counterReducer } from './Slice/CounterSlice';
import { productsApi } from './Slice/productsApiSlice';

import dataSlice from './Slice/dataSlice';

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        counter: counterReducer,
        postdata: dataSlice,
        
        [productsApi.reducerPath]: productsApi.reducer,
       
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});
