import React from 'react'
import styled from "styled-components";

export const InputFieldContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.8rem;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 1.1rem;
  color: #fff;
  font-weight: 500;
  width: 80px;
  text-align: right;
`;
export const Input = styled.input`
  background: #fff;
  border: none;
  border-radius: 30px;
  padding: 0.6rem 1rem;
  width: 250px;
  max-width: 370px;
  font-size: 1rem;
  color: #333;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #cba6f7;
  }

  &::placeholder {
    color: #888;
  }

  &:read-only {
    background: #f3f3f3;
    cursor: not-allowed;
  }
`;

function InputField({ id, label, value, onChange, placeholder, readOnly = false, maxLength }) {
  return (
    <InputFieldContainer>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        maxLength={maxLength}
      />
    </InputFieldContainer>
  );
}

export default InputField;
