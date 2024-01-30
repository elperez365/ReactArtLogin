import { useState } from "react";
import { styled } from "styled-components";

const ControlContainer = styled.div`
  .controls {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
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
          <input
            type="email"
            className={emailNotValid ? "invalid" : undefined}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <label
            className={`label ${passwordNotValid ? "invalid" : undefined}`}
          >
            Password
          </label>
          <input
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
