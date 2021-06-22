import React from "react";
import styled from "styled-components";
import { useState } from "react";
const Second = styled.div`
  border: 0.2px solid;
  padding: 20px;

  margin: 20px;
`;
const Button = styled.button`
  min-width: 150px;
  padding: 10px;
  color: blue;
  &:focus {
    transform: scale(0.95);
    cursor: pointer;
    transition: 0.2s ease-in;
    background-color: #5cd15c;
  }
  &:hover {
    cursor: pointer;
    background-color: #aac8e9;
  }
`;
const FunctionBased = () => {
  const [value, setValue] = useState("initial value");
  const handleClick = () => {
    setValue("New value assigned");
  };
  return (
    <Second>
      <h1>{value}</h1>
      <Button onClick={handleClick}>Press</Button>
    </Second>
  );
};

export default FunctionBased;
