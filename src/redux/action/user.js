const register = (username, passowrd) => {
  return {
    type: "REGISTER",
    payload: {
      username,
      passowrd,
    },
  };
};
export { register };
