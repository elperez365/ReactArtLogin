import { useState } from "react";
import AuthInputs from "./AuthInputs";
import Header from "./Header";
import SignUpInputs from "./SignUpInputs";

export default function Login() {
  const [isNewUser, setIsNewUser] = useState(false);
  return (
    <>
      <Header />
      <main>
        {isNewUser ? (
          <SignUpInputs setIsNewUser={() => setIsNewUser(false)} />
        ) : (
          <AuthInputs setIsNewUser={() => setIsNewUser(true)} />
        )}
      </main>
    </>
  );
}
