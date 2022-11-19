import React from "react";
import { useState } from "react";
import Header from "../../components/Header";
import Form from "../../components/Form";
import { Button } from "../../components/Button";
import { TotalMoney } from "../../components/TotalMoney";
import { List } from "../../components/List";
import { Card } from "../../components/Card";

const HomePage = ({ setLogin }) => {
  const [cardArray, setCards] = useState([]);

  return (
    <>
      <Header setLogin={setLogin}></Header>
      <div className="divContainer">
        <div id="left">
          <Form setCards={setCards}></Form>
          <TotalMoney></TotalMoney>
        </div>

        <div id="right">
          <Button></Button>
          <List>
            {cardArray.map((card, index) => (
              <Card
                key={index}
                setCards={setCards}
                description={card.description}
                value={card.value}
                type={card.type}
              ></Card>
            ))}
          </List>
        </div>
      </div>
    </>
  );
};

export default HomePage;
