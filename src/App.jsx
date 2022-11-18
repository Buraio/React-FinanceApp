import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import { Button } from "./components/Button";
import { TotalMoney } from "./components/TotalMoney";
import { List } from "./components/List";
import { Card } from "./components/Card";

function App() {

  const [cardArray, setCards] = useState([]);

  console.log(cardArray)

  return (
    <div className="App">
      <Header></Header>
      <div className="divContainer">
        <div id="left">
          <Form setCards={setCards}></Form>
          <TotalMoney></TotalMoney>
        </div>

        <div id="right">
          <Button></Button>
          <List>
            {cardArray.map((card, index) => <Card key={index} description={card.description} value={card.value} type={card.type}></Card>)}
          </List>
        </div>
      </div>
    </div>
  );
}

export default App;
