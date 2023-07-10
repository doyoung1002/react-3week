import React, { useRef, useState } from "react";
import styled from "styled-components";

function Select() {
  const [firstSelectState, setFirstSelectState] = useState(["리액트"]);

  const subject = ["리액트", "자바", "스프링", "리액트네이티브"];

  const firstSelect = useRef(null);
  const background1 = useRef(null);

  const firstSelectShow = () => {
    firstSelect.current.style.display = "block";
    background1.current.style.display = "block";
  };

  const removeSelect = () => {
    firstSelect.current.style.display = "none";
    background1.current.style.display = "none";
  };

  const selectHandler = (item) => {
    const thisSelect = subject.filter((e) => {
      return item === e;
    });
    setFirstSelectState(thisSelect);
  };

  const SelectWrap = styled.section`
    border: 3px solid #55efc4;
    height: 200px;
    overflow: hidden;
    margin-top: 100px;
    margin-bottom: 120px;
  `;
  const SelectBtn = styled.button`
    background-color: white;
    border: 1px solid #ccc;
    width: 300px;
    display: inline-flex;
    justify-content: space-between;
    margin-right: 30px;
    padding: 20px 10px 20px 10px;
    cursor: pointer;
    border-radius: 12px;
  `;

  const SelectListWrap = styled.div`
    top: 790px;
    left: 20px;
    position: absolute;
    display: none;
    border: 1px solid #eee;
    width: 290px;
    margin-top: 10px;
    border-radius: 12px;
    z-index: 20;
  `;

  const FirstSelectList = styled.div`
    height: 30px;
    &:hover {
      background-color: #eee;
    }
    &:first-child {
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }
    &:last-child {
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }
  `;

  const Background1 = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 19;
  `;
  const MainTitle = styled.h1`
    font-size: 32px;
  `;
  return (
    <>
      <SelectWrap>
        <MainTitle>Select</MainTitle>
        <div>
          <SelectBtn onClick={firstSelectShow}>{firstSelectState}</SelectBtn>
        </div>
        <Background1 ref={background1} onClick={removeSelect}></Background1>
      </SelectWrap>

      <SelectListWrap ref={firstSelect}>
        {subject.map((item) => {
          return <FirstSelectList onClick={() => selectHandler(item)}>{item}</FirstSelectList>;
        })}
      </SelectListWrap>
    </>
  );
}

export default Select;
