import "./form.css";
import { useState } from "react";

const Form = ({ setCards, setTotalValue, setLength }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  const getFormData = (event) => {
    event.preventDefault();

    const formElements = [...event.target.elements];
    formElements.map(input => {
      input.value = '';
    })

    const cardObj = {
      description,
      value,
      type,
    };

    setCards((oldCards) => [...oldCards, cardObj]);
    setTotalValue((oldValue) => oldValue + parseInt(cardObj.value));
    setLength(oldLength => oldLength + 1);
  };

  return (
    <form className="formContainer" onSubmit={getFormData}>
      <label htmlFor="transactionDesc">
        Descrição
        <input
          id="transactionDesc"
          className="inputData"
          type="text"
          placeholder="Digite aqui sua descrição"
          required
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
      </label>
      <small>Ex: Compra de roupas</small>
      <div className="styleInput">
        <label htmlFor="transactionValue">
          Valor
          <input
            id="transactionValue"
            className="inputData"
            type="number"
            placeholder="R$"
            required
            onChange={(event) => {
              setValue(event.target.value);
            }}
          />
        </label>
        <label htmlFor="transactionType">
          Tipo de valor
          <select
            id="transactionType"
            className="inputData"
            defaultValue=""
            required
            onChange={(event) => {
              setType(event.target.value);
            }}
          >
            <option value="" disabled>Selecione</option>
            <option value="entrada">Entrada</option>
            <option value="despesa">Despesa</option>
          </select>
        </label>
      </div>
      <button id="insertValue" className="bigBtn btnHover" type="submit">
        Inserir valor
      </button>
    </form>
  );
};

export default Form;
