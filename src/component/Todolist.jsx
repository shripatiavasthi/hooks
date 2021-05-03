import React, { useContext} from 'react';
import AddTodo from './AddTodo'
import { ListGroup } from 'react-bootstrap';
import { TodolistContext } from "../context/Todolistcontext";




const Todo = () => {
  
    const { todos, addTodos } = useContext(TodolistContext);
    console.log(todos)
    return (
        <>   
        <AddTodo addTodos={addTodos} />     
        <ListGroup > 
            {todos.map((todos)=>{
             return(            
                <ListGroup.Item key={todos.id} action variant="dark">
                 {todos.text}
                </ListGroup.Item>            
                   )
        })}
        </ListGroup>
        </>

    )
}
export default Todo;