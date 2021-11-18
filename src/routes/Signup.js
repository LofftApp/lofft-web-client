import React, { useState } from "react";
import lofftApi from "../api/lofftApi";

const SignupRequest = async ({ email, password }) => {
  console.log("I Work");
  try {
    const response = await lofftApi.post("/signin", {
      headers: {
        "Content-Type": "application/json",
      },
      user: {
        email,
        password,
      },
    });
    await console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main>
      <h1>Signup Page</h1>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            SignupRequest({ email, password });
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
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Signup" />
        </form>
      </div>
    </main>
  );
};
