import lofftAPI from "../api/lofftAPI";

export const userSubmissionButton = async ({ action, email, password }) => {
  try {
    console.log(action);
    const response = await lofftAPI.post(`/${action}`, {
      headers: {
        "Content-Type": "application/json",
      },
      user: {
        email,
        password,
      },
    });
    const token = response.headers.authorization;
    await console.log(response);
    localStorage.token = token;
  } catch (error) {
    console.log(error);
  }
};

export const userDestroySubmission = () => {
  localStorage.token = "";
};
