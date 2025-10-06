import React from 'react'
import styled from "styled-components";

const Label = styled.label`

`;

function InputField({ id, label, value, onChange, placeholder, readOnly = false, maxLength }) {
  return (
    <div className="input-field">
      <Label htmlFor={id}>{label}</Label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        maxLength={maxLength}
      />
    </div>
  );
}

export default InputField;
