import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Add from './Add';
import List from './List';

const Todo = () => {
    const [todos, setTodos] = useState([]);

    return (
        <Container>
            {console.log(todos)}
            <Add
                todos={todos}
                setTodos={setTodos}
            />
            <List todos={todos}/>
        </Container>        
    );
};

export default Todo;
