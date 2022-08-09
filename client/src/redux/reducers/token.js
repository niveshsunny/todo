const intialState = {
  mytoken : localStorage.getItem('token'), foo:'bar',
};

export const tokensetter = (state = intialState, { type, payload }) => {
  switch (type) {
    case "SETTOKEN":
      return {  mytoken: payload };
    default:
      return state;
  }
};

