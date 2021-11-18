import React, { useState } from "react";
import lofftAPI from "../api/lofftAPI";

const signupSubmit = async ({ email, password }) => {
  try {
    const response = await lofftAPI.post("/signin", {
      headers: {
        "Content-Type": "application/json",
      },
      user: {
        email,
        password,
      },
    });
    await console.log(response.headers);
  } catch (error) {
    console.log(error);
  }
};

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        signupSubmit({ email, password });
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
      <input type="submit" value="Signup" />
    </form>
  );
};
