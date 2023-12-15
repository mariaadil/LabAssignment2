import React, { useState, useEffect } from 'react';
import Student from './Student';

const MyHooksComponent = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    
 
    }, []);

  return (
    <div>
      <h1>Fetched Data: {name}</h1>
    </div>
  );
};

export default MyHooksComponent;