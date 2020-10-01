import React from 'react';
import { Button } from 'react-bootstrap';

const ActionButton = ({label, action}) => {    
    return (
        <Button 
         onClick={action}
        >
          {label}
    </Button>
    );
};

export default ActionButton;
