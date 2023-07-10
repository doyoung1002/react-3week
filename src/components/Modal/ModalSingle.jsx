import React, { useRef } from "react";
import styled from "styled-components";

function ModalSingle(props) {
  const divNode = useRef();
  const divClickHandler = (e) => {
    if (e.target === divNode.current) {
      props.toggleModalSingle();
    }
  };

  return (
    <BackgroundDiv ref={divNode} onClick={divClickHandler}>
      <Section>
        <p>
          닫기와 확인 버튼 1개가 있고, <br />
          외부 영역을 누르면 모달이 닫혀요.
        </p>
        <CloseButton onClick={props.toggleModalSingle}>X</CloseButton>
      </Section>
    </BackgroundDiv>
  );
}

const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(228, 228, 228, 0.8);
`;

const Section = styled.section`
  width: 300px;
  height: 200px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 15px;
`;

const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  margin-top: 10px;
  margin-left: 10px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

export default ModalSingle;
