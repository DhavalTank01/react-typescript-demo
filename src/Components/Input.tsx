import React from "react";

type InputProps = {
  value: string;
  handelChanges: (even: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = (props: InputProps) => {
  return (
    <>
      <input value={props.value} onChange={props.handelChanges}></input>
    </>
  );
};

export default Input;
