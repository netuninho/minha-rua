import React from 'react'
import IconSearch from '../assets/img/icon-search.png'
import styled from "styled-components";

const ButtonStyled = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Button = () => {
  return (
    <ButtonStyled type='submit'>
      <img src={IconSearch} alt="Botão busca" width={10} />
    </ButtonStyled>
  )
}

export default Button
