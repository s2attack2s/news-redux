let initinalState = {
  users: [],
  isLogin: false,
};

const account = (state = initinalState, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
};
export { account };
