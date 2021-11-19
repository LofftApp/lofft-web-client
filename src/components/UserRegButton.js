import React, { useState } from "react";
import { userSubmissionButton } from "../context/AuthorizationContext";

export const UserRegButton = ({ action }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        userSubmissionButton({ action, email, password });
      }}
    >
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Pasword"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value={action} />
    </form>
  );
};
