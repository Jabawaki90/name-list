import React from "react";
import styled from "styled-components";
import SingleList from "./SingleList";

const Container = styled.div`
  display: flex;
  background: yellow;
`;

const PersonListContainer = (props) => {
  return (
    <Container>
      {props.list.map((list) => {
        const { age, name, id } = list;
        return <SingleList key={id} name={name} age={age} />;
      })}
    </Container>
  );
};

export default PersonListContainer;
