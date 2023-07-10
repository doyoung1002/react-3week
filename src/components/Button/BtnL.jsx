import React from "react";
import styled from "styled-components";

function BtnL(props) {
  return (
    <LargeSection>
      <LargeBtn color={props.color} onClick={ClickAddButton}>
        Large Primary Button {props.icon1}
      </LargeBtn>
      <LargeBtn onClick={ClickPromptShow}>Large Negative Button {props.icon2}</LargeBtn>
    </LargeSection>
  );
}
const LargeSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LargeBtn = styled.button`
  border: 3px solid
    ${(props) => {
      return props.color === "#55efc4" ? "#55efc4" : "#fab1a0";
    }};
  background-color: white;
  padding: 20px;
  font-weight: 900;
  border-radius: 10px;
  cursor: pointer;
  width: 300px;
`;

const ClickAddButton = () => {
  alert("버튼을 만들어 보세요!");
};

const ClickPromptShow = () => {
  prompt("어렵나요?", "");
};
export default BtnL;
