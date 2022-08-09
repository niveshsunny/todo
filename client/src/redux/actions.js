export const addtoken = (mytoken) => {
  return {
    type: "SETTOKEN",
    payload: mytoken

  };
};

export const newcolor = (mycolor)=>{
   return{
     type:"SETCOLOR",
     payload: mycolor
   }
};