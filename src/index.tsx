import React from "react";
import ReactDOM from "react-dom";
import Card from "./Components/Card";
import Heading from "./Components/Heading";
import Person from "./Components/Person";
import PersonList from "./Components/PersonList";
import Status from "./Components/Status";
import Greet from "./Components/Greet";
import Button from "./Components/Button";
import Input from "./Components/Input";
import Container from "./Components/Container";
import Login from "./UseState/Login";
import LoginFeature from "./UseState/LoginFeature";
import Counter from "./UseReducer/Counter";
import App from "./Components/UseContext/App";
import DomeRef from "./Components/UseRef/DomeRef";
import MutableRef from "./Components/UseRef/MutableRef";
const personName = {
  first: "Dhaval",
  last: "Tank",
};
const personNameList = [
  {
    first: "Dhaval",
    last: "Tank",
  },
  {
    first: "Jaydip",
    last: "Tank",
  },
  {
    first: "Parth",
    last: "Chauhan",
  },
];

ReactDOM.render(
  <React.StrictMode>
    {/* props with different types */}
    <Greet name="Dhaval" messageCount={10} isLogging={true} />
    <Greet isLogging={true} name="Parth" />
    <Person name={personName} />
    <PersonList names={personNameList} />
    <hr></hr>

    {/* condition vendoring  */}
    <Status status={"loading"} />
    <Status status={"success"} />
    <Status status={"error"} />
    <hr></hr>

    {/* children props */}
    <Heading children={"Dhaval Tank"}></Heading>
    <Heading>Dhaval Tank</Heading>
    <hr></hr>

    {/* pass react component as children props */}
    <Card>
      <Heading>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Necessitatibus, esse?
      </Heading>
    </Card>
    <hr></hr>

    {/* props pass as optional type  */}
    <Greet />
    <hr></hr>

    {/* event props  */}
    <Button
      buttonText={"Click Me"}
      handelClick={(event, id) => {
        console.log("Button Clicked", event, id);
      }}
    ></Button>

    <Input
      value={""}
      handelChanges={(event) => {
        console.log(event);
      }}
    />
    <hr></hr>

    {/* pass style as props */}
    <Container
      style={{
        border: "1px solid red",
        width: "100px",
        height: "100px",
        background: "yellow",
      }}
    />
    <hr></hr>

    {/* useState */}
    <Login />
    <hr></hr>

    {/* useState feature */}
    <LoginFeature />
    <hr></hr>

    {/* useReducer */}
    <Counter />
    <hr></hr>

    {/* createContext and useContext */}
    <App />
    <hr></hr>

    {/* useRef */}
    <DomeRef />
    <MutableRef />
    
  </React.StrictMode>,
  document.getElementById("root")
);
