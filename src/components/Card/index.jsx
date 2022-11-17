const Card = () => {
  return (
    <li className="entryCard">
      <div className="colorDiv"></div>
      <div className="cardInfo">
        <div>
          <h2 className="entryTitle"></h2>
          <div className="rightDiv">
            <span className="entryValue">R$ 5.000,00</span>
            <button className="removeEntryBtn">
              <img src="../../src/assets/trash.svg" alt="" />
            </button>
          </div>
        </div>
        <span className="entryType">Entrada</span>
      </div>
    </li>
  );
};
