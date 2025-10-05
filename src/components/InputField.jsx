import React from 'react'

function InputField({ id, label, value, onChange, placeholder, readOnly = false, maxLength }) {
  return (
    <div className="input-field">
      <label htmlFor={id}>{label}</label>
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
