import "./card.css";

const Card = ({
  setCards,
  setTotalValue,
  setLength,
  description,
  value,
  type,
}) => {
  const removeEntry = (cardDesc) => {
    setCards((oldCards) => {
      const currentCards = oldCards.filter(
        (card) => card.description !== cardDesc
      );
      return [...currentCards];
    });

    setTotalValue((oldValue) => oldValue - value);
    setLength((oldLength) => oldLength - 1);
  };

  const typeVerify = type === "entrada";
  return (
    <li className="entryCard">
      {typeVerify ? (
        <div className="greenDiv"></div>
      ) : (
        <div className="redDiv"></div>
      )}

      <div className="cardInfo">
        <div>
          <h2 className="entryTitle">{description}</h2>
          <div className="rightDiv">
            <span className="entryValue">R$ {value}</span>
            <button
              className="removeEntryBtn"
              onClick={() => removeEntry(description)}
            >
              <img src="/src/assets/trash.svg" alt="" />
            </button>
          </div>
        </div>

        {typeVerify ? (
          <span className="entryType">Entrada</span>
        ) : (
          <span className="entryType">Despesa</span>
        )}
      </div>
    </li>
  );
};

export default Card;
