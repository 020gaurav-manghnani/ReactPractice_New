// createSLice is a compulsory hook to call in making of slice
// nanoid is used to capture unique id's


import { createSlice , nanoid } from "@reduxjs/toolkit";

// initialState is imp to create to tell store its inital value

const initialState = {
    todos : [{
        id: 1,
        text: "hello world"
    }]
}

// and here slice take few compulsary parameters
// name
//initialState : which we already created above
// reducers: which will have projects properties and functions
// here we have todo, so addtodo , deletetodo etccc....

// now functions will take two parameters (state and action)
// state will hold whatever we have mentioned in our initialState  and what actions we want will be coming from action parameter.

export const todoSlice = createSlice({
    name: 'todo',       //compulsary
    initialState,       // compulsary
    reducers: {
        addTodo : (state , action) => {
            const todo = {
                id: nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        } ,

        // todo ko remove krne k liye filter krdo jiski id action bhej rha h, baaki sb todos ki id ko vps state me bhj do

        removeTodo : (state , action) => {
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        }
    }
})

// now we need to export the reducers
// these are some compulsory steps that will be happenign everytime , nothing related to project

// below we have exported indivisual reducers
export const {addTodo , removeTodo} = todoSlice.actions  


//here we need to export whole term the reducers to import it into the store

export default todoSlice.reducer
