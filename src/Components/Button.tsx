import React from "react";

type ButtonProps = {
  buttonText: string;
  handelClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = (props: ButtonProps) => {
  return (
    <>
      <button
        onClick={(event) => {
          props.handelClick(event, 1);
        }}
      >
        {props.buttonText}
       </button>
    </>
  );
};

export default Button;