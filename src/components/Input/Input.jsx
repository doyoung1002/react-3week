import React, { useState } from "react";
import styled from "styled-components";
import { SmallBtn } from "../Button/BtnS";

function Input(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const nameChangeHandler = (e) => setName(e.target.value);
  const priceChangeHandler = (e) => {
    const priceNum = Number(e.target.value.replace(/,/g, ""));
    if (!Number.isNaN(priceNum)) {
      setPrice(priceNum.toLocaleString());
    }
  };

  const saveBtnClickHandler = (e) => {
    e.preventDefault();
    if (name === "") {
      alert(`이름과 가격 모두 입력해주세요.`);
      return;
    }
    alert(`{ name: ${name}, price: ${price.replace(/,/g, "")} }`);
  };

  return (
    <>
      <h1>Input</h1>
      <section>
        <div>
          <Form>
            <label htmlFor="name">
              이름 &nbsp;
              <UserInput type="text" id="name" value={name} onChange={nameChangeHandler} />
            </label>
            <label htmlFor="price">
              가격 &nbsp;
              <UserInput type="text" id="price" value={price} onChange={priceChangeHandler} />
            </label>

            <SmallBtn onClick={saveBtnClickHandler} color={props.color}>
              저장
            </SmallBtn>
          </Form>
        </div>
      </section>
    </>
  );
}

const Form = styled.form`
  display: flex;
  gap: 30px;
`;

const UserInput = styled.input`
  width: 180px;
  height: 40px;
  padding: 0 10px;
  border: 1px solid black;
  border-radius: 10px;
`;

export default Input;
