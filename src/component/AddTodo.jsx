import React, { useState } from 'react';
import { Button, InputGroup,FormControl } from 'react-bootstrap';



const AddTodo = ({addTodos}) =>{
const [text,setText] = useState("")

const updatetext =(e) =>{
    setText(e.target.value)
}
const handlesubmit=() => {
    if(text !== "")
    {
    addTodos(text)
    }
    setText("")
}
return(
      <InputGroup className=" mt-3">
        <FormControl
            value={text}
            onChange = {updatetext}
          placeholder="Type Todos"
        />
        <InputGroup.Append>
          <Button onClick={handlesubmit} variant="outline-secondary">ADD</Button>
        </InputGroup.Append>
        
      </InputGroup>
)

}
export default AddTodo;