import React from 'react';
import { ListGroup } from 'react-bootstrap';

const List = ({todos}) => {
    return(
        <ListGroup>
            {todos.map((todo, i) => (
                <ListGroup.Item key={i}>
                    {todo.item}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default List;
