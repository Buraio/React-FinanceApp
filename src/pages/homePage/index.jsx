import React from "react";
import { useState } from "react";
import Header from "../../components/Header";
import Form from "../../components/Form";
import { Button } from "../../components/Button";
import { TotalMoney } from "../../components/TotalMoney";
import CardList from "../../components/CardList";
import { Card } from "../../components/Card";

import "./media.css";

const HomePage = ({ setLogin }) => {
  const [cardArray, setCards] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  // const [cardArrayLength, setLength] = useState(cardArray.length);

  {
    console.log(cardArray);
    // console.log(cardArrayLength);
  }

  return (
    <div className="homeCont">
      <Header setLogin={setLogin}></Header>
      <div className="divContainer">
        <div id="left">
          <Form
            setCards={setCards}
            setTotalValue={setTotalValue}
            // setLength={setLength}
          ></Form>
          <TotalMoney totalValue={totalValue}></TotalMoney>
        </div>

        <div id="right">
          <Button></Button>
          <CardList>
            {/* {cardArrayLength === 0 ? (
              <>
                <h2>Você ainda não possui nenhum lançamento</h2>
                <img src="../../src/assets/NoCard.svg" alt="" />
                <img src="../../src/assets/NoCard.svg" alt="" />
                <img src="../../src/assets/NoCard.svg" alt="" />
              </>
            ) : ( */}
            {cardArray.map((card, index) => {
              <Card
                key={index}
                setCards={setCards}
                setTotalValue={setTotalValue}
                description={card.description}
                value={card.value}
                type={card.type}
              />;
            })}
            {/* )} */}
          </CardList>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
