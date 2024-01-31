import { useState } from "react";
import { styled } from "styled-components";

// if not want use styled-components,
//ad this classes into Login.module.css and replace controlContainer component with a div
const ControlContainer = styled.div`
  .controls {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .controls label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #6b7280;
  }

  .controls input {
    width: 100%;
    padding: 0.75rem 1rem;
    line-height: 1.5;
    background-color: #d1d5db;
    color: #374151;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${({ $inValid }) => ($inValid ? "#fed2d2" : "#d1d5db")};
  color: ${({ $inValid }) => ($inValid ? "#ef4444" : "#374151")};
  border: 1px solid transparent;
  border-radius: 0.25rem;
  border-color: ${({ $inValid }) => ($inValid ? "#f73f3f" : "transparent")};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export default function AuthInputs({ setIsNewUser }) {
  const [fields, setFields] = useState({
    email: "",
    password: "",
    submitted: false,
  });

  function handleInputChange(identifier, value) {
    setFields((prevFields) => {
      return {
        ...prevFields,
        [identifier]: value,
      };
    });
  }

  function handleLogin() {
    handleInputChange("submitted", true);
  }

  const emailNotValid = fields.submitted && !fields.email.includes("@");
  const passwordNotValid =
    fields.submitted && fields.password.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer className="controls">
        <p>
          <label className={`label ${emailNotValid ? "invalid" : undefined}`}>
            Email
          </label>
          <Input
            type="email"
            // className={emailNotValid ? "invalid" : undefined}
            $inValid={emailNotValid}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <label
            className={`label ${passwordNotValid ? "invalid" : undefined}`}
          >
            Password
          </label>
          <Input
            type="password"
            className={passwordNotValid ? "invalid" : undefined}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </ControlContainer>
      <div className="actions">
        <button
          type="button"
          className="text-button"
          onClick={() => setIsNewUser()}
        >
          Create a new account
        </button>
        <button className="button" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
}
