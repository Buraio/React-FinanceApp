export const Card = ({ setCards, description, value, type, children }) => {
  const removeEntry = () => {

    

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
            <span className="entryValue">{value}</span>
            <button className="removeEntryBtn">
              <img src="../../src/assets/trash.svg" alt="" />
            </button>
          </div>
        </div>

        {typeVerify ? (
          <span className="entryType">Entrada</span>
        ) : (
          <span className="entryType">Saída</span>
        )}
      </div>
    </li>
  );
};
