import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  background: yellow;
  width: 300px;
`;

const FormInput = (props) => {
  const [newPerson, setNewPerson] = useState({ name: "", age: "" });

  const nameHandlerChange = (event) => {
    setNewPerson((prev) => {
      return { ...prev, name: event.target.value };
    });
  };

  const ageHandlerChange = (event) => {
    setNewPerson((prev) => {
      return { ...prev, age: event.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const latestPerson = {
      ...newPerson,
      id: Math.random().toString(),
    };
    props.latest(latestPerson);
  };
  return (
    <FormContainer>
      <form onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <input type="text" onChange={nameHandlerChange} />
        </div>
        <div>
          <label>Age</label>
          <input type="number" onChange={ageHandlerChange} />
        </div>
        <button type="submit">Add</button>
      </form>
    </FormContainer>
  );
};

export default FormInput;
