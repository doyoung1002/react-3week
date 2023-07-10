import React from "react";
import styled from "styled-components";
function BtnS(props) {
  return (
    <SmallSection>
      <SmallBtn color={props.color}>Small</SmallBtn>
      <SmallBtn>Small</SmallBtn>
    </SmallSection>
  );
}

const SmallSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SmallBtn = styled.button`
  border: none;
  background-color: ${(props) => {
    return props.color ? "#55efc4" : "#fab1a0";
  }};

  padding: 20px;
  font-weight: 900;
  border-radius: 10px;
  cursor: pointer;
  width: 80px;
`;
export default BtnS;
