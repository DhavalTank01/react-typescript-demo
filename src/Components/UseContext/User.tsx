import { useContext } from "react";
import Button from "../Button";
import { UserContext } from "./UserContext";

const User = () => {
  const userContext = useContext(UserContext);
  const handelLogin = () => {
    if (userContext) {
      userContext.setUser({
        name: "Dhaval",
        email: "dhaval@example.com",
      });
    }
  };

  const handelLogout = () => {
    if (userContext) {
      userContext.setUser(null);
    }
  };

  return (
    <div>
      <h3>User Name: {userContext?.user?.name}</h3>
      <h3>User Email: {userContext?.user?.email}</h3>
      <Button buttonText={"Login"} handelClick={handelLogin} />
      <Button buttonText={"Logout"} handelClick={handelLogout} />
    </div>
  );
};

export default User;
