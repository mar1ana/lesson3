import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import ActionButton from '../../shared/ActionButton';
const Add = ({todos, setTodos}) => {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    setInputs({
      item: event.target.value
    });
  };
  const handleSubmit = () => {
    setTodos([
      ...todos,
      {
        item: inputs.item,
        id: (new Date()).getTime()
      }
    ]);
  };

  return (
    <Form>
      {console.log(inputs)}
      <Form.Group>
        <Form.Label>
          Todo Item:
        </Form.Label>
        <Form.Control
          name="item"
          onChange={handleChange}
        />
      </Form.Group>
      
      <ActionButton
        label="Add Todo"
        action={handleSubmit}
      />
    </Form>
  );
};
export default Add;
