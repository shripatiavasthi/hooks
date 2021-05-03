import React, {useState, createContext} from 'react';

export const TodolistContext = createContext();
const TodolistContextProvider = ({children}) => {
 
    const [todos, setTodos] = useState([{ id: 1, text: "Buy sabji" },
    { id: 2, text: "Buy some fuirts" },
    { id: 3, text: "Buy country" },])

    
    const addTodos = (text) => {
        setTodos([
            { id: Math.random(), text },
            ...todos            
        ])
    }
    return(
    <TodolistContext.Provider value = {{ todos , addTodos }}>
        {children}
    </TodolistContext.Provider>
    )
}
export default TodolistContextProvider;