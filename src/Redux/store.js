import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './Slice/TodoSlice';
import { counterReducer } from './Slice/CounterSlice';

import dataSlice from './Slice/dataSlice';

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        counter: counterReducer,
        postdata: dataSlice
    }
});
