import React, { useState, useRef } from "react";
import classNames from "classnames";

import { InputContainer } from "./styles";

const Input = ({
  id,
  label,
  hasValue,
  value,
  className,
  style,
  error,
  onBlur,
  name,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  const errorRef = useRef();
  const inputId = id || `input-${name}`;
  const labelId = `${name}-label`;
  const errorId = `${name}-error`;
  const InputElement = "input";

  const handleBlur = (event) => {
    setFocused(false);

    if (onBlur) {
      onBlur(event);
    }
  };

  return (
    <InputContainer
      className={classNames("input", className, { "input--error": !!error })}
      style={style}
    >
      <div className="input__content">
        <label
          className={classNames("input__label", {
            "input__label--focused": focused,
            "input__label--has-value": !!value,
          })}
          id={labelId}
          htmlFor={inputId}
        >
          {label}
        </label>
        <InputElement
          className="input__element"
          id={inputId}
          aria-labelledby={labelId}
          aria-describedby={!!error ? errorId : undefined}
          onFocus={() => setFocused(true)}
          onBlur={handleBlur}
          value={value}
          name={name}
          {...rest}
        />
        <div
          className={classNames("input__underline", {
            "input__underline--focused": focused,
          })}
        />
      </div>

      {!!error && (
        <div
          className={classNames("input__error", `input__error--${status}`)}
          id={errorId}
          role="alert"
        >
          <div className="input__error-message" ref={errorRef}>
            {error}
          </div>
        </div>
      )}
    </InputContainer>
  );
};

export default Input;
