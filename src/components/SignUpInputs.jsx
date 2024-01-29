import { useState } from "react";

export default function SignUpInputs({ setIsNewUser }) {
  const [fields, setFields] = useState({
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
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
  const userNameNotValid =
    fields.submitted && fields.userName.trim().length < 3;

  const confirmPassNotValid =
    fields.submitted && fields.password !== fields.confirmPassword;

  return (
    <div id="auth-inputs">
      <div className="controls">
        <p>
          <label>Email</label>
          <input
            type="email"
            className={emailNotValid ? "invalid" : undefined}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <label>Username</label>
          <input
            type="text"
            className={userNameNotValid ? "invalid" : undefined}
            onChange={(event) =>
              handleInputChange("userName", event.target.value)
            }
          />
        </p>
        <p>
          <label>Password</label>
          <input
            type="password"
            className={passwordNotValid ? "invalid" : undefined}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
        <p>
          <label>Confirm Password</label>
          <input
            type="password"
            className={confirmPassNotValid ? "invalid" : undefined}
            onChange={(event) =>
              handleInputChange("confirmPassword", event.target.value)
            }
          />
        </p>
      </div>
      <div className="actions">
        <button
          type="button"
          className="text-button"
          onClick={() => setIsNewUser()}
        >
          Go to login
        </button>
        <button className="button" onClick={handleLogin}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
