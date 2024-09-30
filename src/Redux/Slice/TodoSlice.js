import { createSlice } from '@reduxjs/toolkit';


export const todoSlice = createSlice({
    name: 'todo',
    initialState : [],
    reducers: {
        addtodo: (state, action) => {
            state.push({ id: Date.now(), todo: action.payload });
        },
        deletetodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        }
    }
});

export const { addtodo, deletetodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;


