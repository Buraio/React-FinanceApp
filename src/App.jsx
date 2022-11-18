import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import { Button } from "./components/Button";
import { TotalMoney } from "./components/TotalMoney";
import { List } from "./components/List";

function App() {
  const userObj = {

    

  }

  return (
    <div className="App">
      <Header></Header>
      <div className="divContainer">
        <div id="left">
          <Form></Form>
          <TotalMoney></TotalMoney>
        </div>

        <div id="right">
          <Button></Button>
          <List></List>
        </div>
      </div>
    </div>
  );
}

export default App;
