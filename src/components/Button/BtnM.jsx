import React from 'react'
import styled from 'styled-components'



function BtnM(props) {
  return (
    <MediumSection>
      <MediumBtn color={props.color}>Medium</MediumBtn>
      <MediumBtn>Medium</MediumBtn>
    </MediumSection>
  )
}

const MediumSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const MediumBtn = styled.button`
border: none;
background-color: ${(props) => {
  return  props.color === '#55efc4' ? '#55efc4' : '#fab1a0'
}};
padding: 20px;
font-weight: 900;
border-radius: 10px;
cursor: pointer;
width: 150px;
`

export default BtnM