import React from 'react';

const MyPropsComponent = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Email: {props.email}</p>
    </div>
  );
};

export default MyPropsComponent;
