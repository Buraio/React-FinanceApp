import React from "react";
import { useState } from "react";
import Header from "../../components/Header";
import EntryForm from "../../components/entryForm";
import { Button } from "../../components/Button";
import { TotalMoney } from "../../components/TotalMoney";
import CardList from "../../components/CardList";
import Card from "../../components/Card";

import "./media.css";

const HomePage = ({ setLogin }) => {
  const [cardArray, setCards] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [cardArrayLength, setLength] = useState(cardArray.length);
  const [typeFilter, setFilter] = useState("true");
  const verifyCardArrayLength = cardArrayLength === 0;
  const filteredCardArray = cardArray.filter((card) => {
    if (typeFilter === card.type) {
      return card;
    }
  });

  return (
    <div className="homeCont">
      <Header setLogin={setLogin}></Header>
      <div className="divContainer">
        <div id="left">
          <EntryForm
            setCards={setCards}
            setTotalValue={setTotalValue}
            setLength={setLength}
          ></EntryForm>
          <TotalMoney totalValue={totalValue}></TotalMoney>
        </div>

        <div id="right">
          <Button setFilter={setFilter}></Button>
          <CardList>
            {verifyCardArrayLength ? (
              <>
                <h2>Você ainda não possui nenhum lançamento</h2>
                <img className="noEntryImg" src={"./src/assets/NoCard.svg"} alt="" />
                <img className="noEntryImg" src={"./src/assets/NoCard.svg"} alt="" />
                <img className="noEntryImg" src={"./src/assets/NoCard.svg"} alt="" />
              </>
            ) : typeFilter === "true" ? (
              cardArray.map((card, index) => {
                return (
                  <Card
                    key={index}
                    setCards={setCards}
                    setTotalValue={setTotalValue}
                    setLength={setLength}
                    description={card.description}
                    value={card.value}
                    type={card.type}
                  />
                );
              })
            ) : (
              filteredCardArray.map((card, index) => {
                return (
                  <Card
                    key={index}
                    setCards={setCards}
                    setTotalValue={setTotalValue}
                    setLength={setLength}
                    description={card.description}
                    value={card.value}
                    type={card.type}
                  />
                );
              })
            )}
          </CardList>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
