import React, { useReducer } from "react";
import Button from "../Components/Button";
const initValue = { count: 0 };
type CounterState = {
  count: number;
};
type UpdateAction = {
  type: "Increment" | "Decrement";
  payload: number;
};
type ResetAction = {
  type: "Reset";
};
type CounterAction = UpdateAction | ResetAction;

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + action.payload };
    case "Decrement":
      return { count: state.count - action.payload };
    case "Reset":
      return initValue;
    default:
      return { count: state.count };
  }
};
const Counter = () => {
  const [state, despatch] = useReducer(reducer, initValue);
  return (
    <>
      <h3>Count is: {state.count}</h3>
      <Button
        buttonText={"+"}
        handelClick={() => {
          despatch({
            type: "Increment",
            payload: 10,
          });
        }}
      ></Button>
      <Button
        buttonText={"-"}
        handelClick={() => {
          despatch({
            type: "Decrement",
            payload: 10,
          });
        }}
      ></Button>
      <Button
        buttonText={"Reset"}
        handelClick={() => {
          despatch({
            type: "Reset",
          });
        }}
      ></Button>
    </>
  );
};

export default Counter;
