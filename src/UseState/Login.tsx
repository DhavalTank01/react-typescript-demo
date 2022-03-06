import React, { useState } from "react";
import Button from "../Components/Button";

const Login = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  return (
    <>
      <br></br>
      <Button
        buttonText={"Login"}
        handelClick={() => {
          setIsLogIn(true);
        }}
      />
      <Button
        buttonText={"Logout"}
        handelClick={() => {
          setIsLogIn(false);
        }}
      />
      <h2>User is {isLogIn ? "Login" : "Logout"}</h2>
    </>
  );
};

export default Login;
