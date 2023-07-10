import React, { useState } from "react";
import styled from "styled-components";
import { SmallBtn } from "../Button/BtnS";
import { LargeBtn } from "../Button/BtnL";
import ModalQuote from "./ModalQuote";
import ModalSingle from "./ModalSingle";

function Modal(props) {
  const [modalQuote, setModalQuote] = useState(false);
  const [modalSingle, setModalSingle] = useState(false);

  const toggleModalQuote = () => setModalQuote(!modalQuote);
  const toggleModalSingle = () => setModalSingle(!modalSingle);

  return (
    <>
      <h1>Modal</h1>
      <Section>
        <SmallBtn color={props.color} onClick={toggleModalQuote}>
          open modal
        </SmallBtn>
        {modalQuote && <ModalQuote toggleModalQuote={toggleModalQuote} color={"#55efc4"} />}

        <LargeBtn onClick={toggleModalSingle}>open modal</LargeBtn>
        {modalSingle && <ModalSingle toggleModalSingle={toggleModalSingle} />}
      </Section>
    </>
  );
}

const Section = styled.section`
  display: flex;
  gap: 10px;
`;

export default Modal;
