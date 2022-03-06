import React, { useEffect, useRef } from "react";

const DomeRef = () => {
  const inputRef2 = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    inputRef2.current.focus();
  }, []);
  return (
    <>
      <div>DomeRef</div>
      <input type="text"></input>
      <input type="text" ref={inputRef2}></input>
      <input type="text"></input>
    </>
  );
};

export default DomeRef;
