import "./form.css";
import { useState } from "react";

const funcForm = (event) => {
  event.preventDefault();
  const formElements = [...event.target.elements];

  const [descInput, valueInput, typeInput] = formElements;
};

const Form = () => {
  return (
    <form className="formContainer" onSubmit={funcForm}>
      <input
        id="transactionDesc"
        className="inputData"
        type="text"
        placeholder="Digite aqui sua descrição"
      />
      <input id="transactionValue" className="inputData" type="number" placeholder="1"/>
      <select id="transactionType" className="inputData" name="">
        <option value="1">Entrada</option>
        <option value="0">Saída</option>
      </select>
      <button id="insertValue" className="bigBtn btnHover" type="submit">
        Inserir valor
      </button>
    </form>
  );
};

export default Form;
