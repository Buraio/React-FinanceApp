import { useState } from "react";

const Form = ({}) => {
  return (
    <form className="formContainer">
      <input id="transactionValue" type="number" />
      <input id="transactionDesc" type="text" />
      <select id="transactionType" name="">
        <option value="1">Entrada</option>
        <option value="0">Saída</option>
      </select>
      <button id="insertValue" type="submit">
        Inserir valor
      </button>
    </form>
  );
};

export default Form;
