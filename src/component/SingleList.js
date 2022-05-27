import React from "react";
import styled from "styled-components";

const SingleCard = styled.div``;

const SingleList = (props) => {
  return (
    <SingleCard>
      <h2>date</h2>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
    </SingleCard>
  );
};

export default SingleList;
