import React, { useReducer } from "react";
import lofftApi from "../src/api/lofftApi";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await lofftApi.post("/signup", {
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
