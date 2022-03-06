import React, { useState } from "react";
import Button from "../Components/Button";
type AuthUser = {
  name: string;
  email: string;
};
const LoginFeature = () => {
  const [user, setUser] = useState<null | AuthUser>(null);
  return (
    <>
      <Button
        buttonText={"Login"}
        handelClick={() => {
          setUser({
            name: "Dhaval",
            email: "dhaval@example.com",
          });
        }}
      />
      <Button
        buttonText={"Logout"}
        handelClick={() => {
          setUser(null);
        }}
      />
      <h3>User Name is: {user?.name} </h3>
      <h3>User Email is: {user?.email} </h3>
    </>
  );
};

export default LoginFeature;
