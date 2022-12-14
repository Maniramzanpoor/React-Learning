import React, { useReducer, useContext } from "react";

const CounterContext = React.createContext();
const CounterContextDispatcher = React.createContext();
const initialState = 0;
const reducer = (state, action) => {
  console.log(state, action.type);
  switch (action.type) {
    case "add":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={dispatch}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;
export const useCount = () => useContext(CounterContext);

export const useCountAction = () => {
  //TODO : use reducer in Context
  return useContext(CounterContextDispatcher);
  // const addOne = () => {
  //   setCount((prevcount) => prevcount + 1);
  // };
  // const addFive = () => {
  //   setCount((prevcount) => prevcount + 5);
  // };
  // const decrement = () => {
  //   setCount((prevcount) => prevcount - 1);
  // };
  // return { addOne, addFive, decrement };
};
