import { ICard, tSetCards, tSetLength, tSetTotalValue } from "../../interfaces";
import "./entryForm.css";
import { FormEvent, ReactNode, SetStateAction, useState } from "react";

interface IEntryFormProps {
  setCards: tSetCards;
  setTotalValue: tSetTotalValue;
  setLength: tSetLength;
}

const EntryForm = ({ setCards, setTotalValue, setLength }: IEntryFormProps) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  const getFormData = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formTarget = event.currentTarget
      .elements as HTMLFormControlsCollection;

    if (event.target) {
      const formElements = [...formTarget];
      formElements.map((input) => {
        let inputValue = input.value;
        inputValue = "";
      });

      const cardObj: ICard = {
        description,
        value,
        type,
      };

      setCards((oldCards: ICard[]) => [...oldCards, cardObj]);
      setTotalValue((oldValue) => oldValue + parseInt(cardObj.value));
      setLength((oldLength) => oldLength + 1);
    }
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
            <option value="" disabled>
              Selecione
            </option>
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

export default EntryForm;
