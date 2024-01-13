import { createSlice, nanoid } from "@reduxjs/toolkit";

export const initialState = {
    todos: [{ id: 1, text: 'hellow world', completed: false }],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
        },
        changeTodo: (state, action) => {
            state.todos = action.payload;
          },
    }
})

export const { addTodo, removeTodo, updateTodo, changeTodo } = todoSlice.actions
export default todoSlice.reducer