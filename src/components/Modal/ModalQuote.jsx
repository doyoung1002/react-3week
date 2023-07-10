import React from "react";
import styled from "styled-components";
import { SmallBtn } from "../Button/BtnS";

function ModalQuote(props) {
  return (
    <BackgroundDiv>
      <Section>
        <p>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</p>
        <BtnAreaDiv>
          <SmallBtn color={props.color} onClick={props.toggleModalQuote}>
            닫기
          </SmallBtn>
          <SmallBtn>확인</SmallBtn>
        </BtnAreaDiv>
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
  width: 460px;
  height: 260px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 15px;
`;

const BtnAreaDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`;

export default ModalQuote;
