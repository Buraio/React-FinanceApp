import "./form.css";
import { useState } from "react";
import { Card } from "../Card";

const Form = ({ setCards }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [typeSelect, setType] = useState("");

  const funcForm = (event) => {
    event.preventDefault();

    const cardObj = {
      description,
      value,
      typeSelect,
    };

    setCards(oldCards => [...oldCards, cardObj]);
  };

  return (
    <form className="formContainer" onSubmit={funcForm}>
      <input
        id="transactionDesc"
        className="inputData"
        type="text"
        placeholder="Digite aqui sua descrição"
        onChange={(event) => {
          setDescription(event.target.value);
          console.log(event.target.value);
        }}
      />
      <input
        id="transactionValue"
        className="inputData"
        type="number"
        placeholder="1"
        onChange={(event) => {
          setValue(event.target.value);
          console.log(event.target.value);
        }}
      />
      <select
        id="transactionType"
        className="inputData"
        name=""
        onChange={(event) => {
          setType(event.target.value);
          console.log(event.target.value);
        }}
      >
        <option value="entrada">Entrada</option>
        <option value="saída">Saída</option>
      </select>
      <button id="insertValue" className="bigBtn btnHover" type="submit">
        Inserir valor
      </button>
    </form>
  );
};

export default Form;
