const intialState = {
    mycolor: "pagecolor"
  };
  
  export const colorsetter = (state = intialState, { type, payload }) => {
    switch (type) {
      case "SETCOLOR":
        return {  mycolor: payload };
      default:
        return state;
    }
  };
  
  